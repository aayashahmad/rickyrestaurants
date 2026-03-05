import { NextResponse } from "next/server";

const WHATSAPP_NUMBER = "7006052604";

async function generateAIConfirmation(orderDetails) {
    const { customer, items, totalItems } = orderDetails;
    
    const itemsList = items
        .map((item) => `- ${item.name} (x${item.quantity})`)
        .join("\n");

    const confirmationMessage = `
🎉 *New Order Received!*

📋 *Order Details:*
${itemsList}

📦 *Total Items:* ${totalItems}

👤 *Customer Information:*
*Name:* ${customer.name}
*Phone:* ${customer.phone}
*Delivery Type:* ${customer.deliveryType === "home" ? "Home Delivery" : "Pickup Order"}
*Address:* ${customer.address}

⏰ *Order Time:* ${new Date(orderDetails.timestamp).toLocaleString()}

✅ Order confirmed and ready for processing!
    `.trim();

    return confirmationMessage;
}

async function sendWhatsAppMessage(message) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    return whatsappUrl;
}

export async function POST(request) {
    try {
        const orderDetails = await request.json();

        if (!orderDetails.customer || !orderDetails.items || orderDetails.items.length === 0) {
            return NextResponse.json(
                { error: "Invalid order details" },
                { status: 400 }
            );
        }

        const aiConfirmation = await generateAIConfirmation(orderDetails);
        
        const whatsappUrl = await sendWhatsAppMessage(aiConfirmation);

        if (typeof window !== "undefined") {
            window.open(whatsappUrl, "_blank");
        }

        return NextResponse.json({
            success: true,
            message: "Order confirmed successfully",
            confirmation: aiConfirmation,
            whatsappUrl: whatsappUrl,
        });
    } catch (error) {
        console.error("Order confirmation error:", error);
        return NextResponse.json(
            { error: "Failed to process order" },
            { status: 500 }
        );
    }
}
