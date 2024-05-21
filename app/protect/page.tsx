import { auth } from "@/auth";
import CheckoutButton from "@/components/checkout";
import { SignOut } from "@/components/providers";
import { SignInButton } from "@/components/signin";
import { openai } from "@/utils/openai";

async function copy() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "Congratulate the user to have found the best saas guide in the solar system and invite to buy it. Max 200 char.",
      },
    ],
    model: "gpt-4o",
  });

  return completion.choices[0].message.content;
}

export default async function Page() {
  const session = await auth();
  if (!session?.user)
    return (
      <div>
        <h1>Protected Page</h1>
        <SignInButton />
      </div>
    );

  const text = await copy();

  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      <p>{text}</p>
      <CheckoutButton session={session} />
      <SignOut />
    </div>
  );
}
