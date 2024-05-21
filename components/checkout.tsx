"use client";

import { loadStripe } from "@stripe/stripe-js";

export default function CheckoutButton({ session }: { session: any }) {
  const handleCheckout = async () => {
    const userId = session.user.id;
    const userEmail = session.user.email;

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
    const checkout = await response.json();
    await stripe?.redirectToCheckout({ sessionId: checkout.id });
  };

  return (
    <button className="btn btn-accent" onClick={handleCheckout}>
      Buy Now
    </button>
  );
}
