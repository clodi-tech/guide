"use client";

import { signIn } from "next-auth/react";

export function SignInButton() {
  return (
    <button className="btn btn-primary" onClick={() => signIn()}>
      Sign in
    </button>
  );
}
