"use client";

import { useRouter } from "next/navigation";
import getStripe from "@/utils/getStripe";
import clsx from "clsx";
import React from "react";

interface FreelancerCheckoutButtonProps {
  className: string;
  children: string;
}

const FreelancerCheckoutButton: React.FC<FreelancerCheckoutButtonProps> = ({
  className,
  children,
}) => {
  const router = useRouter();
  const plan = "price_1OKiQwHaJCks5lGVmAtPHZsq";

  const handleCreateCheckoutSession = async (productId: string) => {
    const res = await fetch(`/api/stripe/checkout-session`, {
      method: "POST",
      body: JSON.stringify(productId),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 401) {
      router.push("/signin");
      return;
    }

    const checkoutSession = await res.json().then((value) => {
      return value.session;
    });

    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      sessionId: checkoutSession.id,
    });

    console.warn(error.message);
  };

  return (
    <button
      className={clsx(
        // "bg-slate-100 hover:bg-slate-200 text-black px-6 py-2 rounded-md capitalize font-bold mt-1",
        className
      )}
      onClick={() => handleCreateCheckoutSession(plan)}
    >
      {children}
    </button>
  );
};

export default FreelancerCheckoutButton;
