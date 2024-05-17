"use client";

import { loadStripe } from "@stripe/stripe-js";

export default function CheckoutButton() {
  const handleCheckout = async () => {
    const userId = "4ce39715-ba0f-4211-a6a4-eb4b3a142129";
    const userEmail = "ciao@clodi.tech";

    const stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
    );
    const stripe = await stripePromise;
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        priceId: "price_1PDOP405deeQVvS290f0jVzg",
        userId: userId,
        email: userEmail,
      }),
    });
    const session = await response.json();
    await stripe?.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <button className="btn btn-accent" onClick={handleCheckout}>
      Buy Now
    </button>
  );
}
