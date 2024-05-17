import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/utils/stripe";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get("stripe-signature");

    let event;
    try {
      event = stripe.webhooks.constructEvent(
        rawBody,
        signature!,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch (error: any) {
      console.error(`Webhook signature verification failed: ${error.message}`);
      return NextResponse.json({ message: "Webhook Error" }, { status: 400 });
    }

    if (event.type === "checkout.session.completed") {
      const session: Stripe.Checkout.Session = event.data.object;
      console.log(session);
      const userId = session.metadata?.user_id;

      // business logic here
    }

    if (event.type === "customer.subscription.updated") {
    }

    if (event.type === "customer.subscription.deleted") {
    }

    return NextResponse.json({ message: "success" });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
