import { stripe } from "@/lib/stripe";
import { prisma } from "@/db/client";

export async function POST(req: Request) {
  const { userId, ticketData } = await req.json();

  const ticket = await prisma.ticket.create({
    data: {
      ...ticketData,
      userId,
    },
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: ticket.eventTitle,
          },
          unit_amount: ticket.price,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_URL}/dashboard`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/tickets`,
    metadata: {
      ticketId: ticket.id,
    },
  });

  return Response.json({ url: session.url });
}
