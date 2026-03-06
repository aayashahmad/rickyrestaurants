import { NextResponse } from "next/server";

const WHATSAPP_NUMBER = "7006052604";

async function generateAIConfirmation(orderDetails) {
    const { customer, items, totalItems } = orderDetails;
    const totalAmount = (items || []).reduce(
        (sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 0),
        0
    );
    
    const itemsList = items
        .map((item) => {
            const price = Number(item.price) || 0;
            const qty = Number(item.quantity) || 0;
            const lineTotal = price * qty;
            return `- ${item.name} (x${qty}) — AED ${price} — AED ${lineTotal}`;
        })
        .join("\n");

    const confirmationMessage = `
🎉 *New Order Received!*

📋 *Order Details:*
${itemsList}

📦 *Total Items:* ${totalItems}
💰 *Total Amount:* AED ${totalAmount}

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
