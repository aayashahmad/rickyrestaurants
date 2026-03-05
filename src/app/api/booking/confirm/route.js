import { NextResponse } from "next/server";

const PHONE_NUMBER = "7006052604";

async function generateBookingMessage(bookingDetails) {
    const { catering, customer } = bookingDetails;
    
    const bookingMessage = `
🎉 *New Catering Booking Request!*

📋 *Service Details:*
*Service:* ${catering.title}
*Category:* ${catering.category}
*Description:* ${catering.desc}

👤 *Customer Information:*
*Name:* ${customer.name}
*Phone:* ${customer.phone}
*Number of Guests:* ${customer.numberOfGuests}
${customer.partyType ? `*Party Type:* ${customer.partyType}` : ''}

📝 *Additional Details:*
${customer.description || 'No additional details provided'}

⏰ *Request Time:* ${new Date(bookingDetails.timestamp).toLocaleString()}

📞 *Action Required:* Please call the customer to confirm booking details.
    `.trim();

    return bookingMessage;
}

async function createCallUrl(phoneNumber) {
    return `tel:${phoneNumber}`;
}

export async function POST(request) {
    try {
        const bookingDetails = await request.json();

        if (!bookingDetails.customer || !bookingDetails.catering) {
            return NextResponse.json(
                { error: "Invalid booking details" },
                { status: 400 }
            );
        }

        const bookingMessage = await generateBookingMessage(bookingDetails);
        
        const encodedMessage = encodeURIComponent(bookingMessage);
        const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
        
        const callUrl = await createCallUrl(bookingDetails.customer.phone);

        return NextResponse.json({
            success: true,
            message: "Booking request submitted successfully",
            confirmation: bookingMessage,
            whatsappUrl: whatsappUrl,
            callUrl: callUrl,
        });
    } catch (error) {
        console.error("Booking confirmation error:", error);
        return NextResponse.json(
            { error: "Failed to process booking" },
            { status: 500 }
        );
    }
}
