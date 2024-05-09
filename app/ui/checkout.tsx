"use client";

import { loadStripe } from "@stripe/stripe-js";

export default function CheckoutButton() {
  const handleCheckout = async () => {
    const stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
    );
    const stripe = await stripePromise;
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        priceId: "price_1OtHkdBF7AptWZlcIjbBpS8r",
        userId: "data.user?.id",
        email: "data.user?.email",
      }),
    });
    const session = await response.json();
    await stripe?.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div>
      <h1>Signup for a Plan</h1>
      <p>Clicking this button creates a new Stripe Checkout session</p>
      <button className="btn btn-accent" onClick={handleCheckout}>
        Buy Now
      </button>
    </div>
  );
}
