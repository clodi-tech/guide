import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
  try {
    const { priceId, email, userId } = await request.json();

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

    const session = await stripe.checkout.sessions.create({
      metadata: {
        user_id: userId,
      },
      customer_email: email,
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
        },
        {
          price: "price_1OtHdOBF7AptWZlcPmLotZgW",
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${request.headers.get("origin")}/success`,
      cancel_url: `${request.headers.get("origin")}/cancel`,
    });

    return NextResponse.json({ id: session.id });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}