'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function PaymentSection() {
  const router = useRouter();
  const isLoggedIn = false; // Replace with your authentication logic

  useEffect(() => {
    if (!isLoggedIn) {
      alert("Please sign in to access the payment page.");
      router.push("/auth/signin");
    }
  }, [isLoggedIn, router]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Payment Section</h2>
      <p>Securely process your payments for Gospel Tech products.</p>
    </div>
  );
}
