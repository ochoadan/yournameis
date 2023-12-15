"use client";

import { useRouter } from "next/navigation";
import getStripe from "@/utils/getStripe";

interface CheckoutButtonProps {
  className: string;
  children: string;
  tier: number;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({
  className,
  children,
  tier,
}) => {
  const router = useRouter();
  const productId = (() => {
    if (tier === 1) {
      return process.env.NEXT_PUBLIC_STRIPE_API_ID_FY!;
    } else if (tier === 2) {
      return process.env.NEXT_PUBLIC_STRIPE_API_ID_BY!;
    } else if (tier === 3) {
      return process.env.NEXT_PUBLIC_STRIPE_API_ID_EY!;
    }
  })();

  const handleCreateCheckoutSession = async (productId: string) => {
    try {
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

      if (res.status === 409) {
        router.push("/billing");
        return;
      }

      const checkoutSession = await res.json().then((value) => {
        return value.session;
      });

      const stripe = await getStripe();
      const { error } = await stripe!.redirectToCheckout({
        sessionId: checkoutSession.id,
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (error: any) {
      console.error("An error occurred:", error.message);
    }
  };

  return (
    <>
      <button
        className={className}
        onClick={() => handleCreateCheckoutSession(productId!)}
      >
        {children}
      </button>
    </>
  );
};

export default CheckoutButton;
