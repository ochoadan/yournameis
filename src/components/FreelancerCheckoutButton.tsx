"use client";

import { useRouter } from "next/navigation";
import getStripe from "@/utils/getStripe";

interface FreelancerCheckoutButtonProps {
  className: string;
  children: string;
}

const FreelancerCheckoutButton: React.FC<FreelancerCheckoutButtonProps> = ({
  className,
  children,
}) => {
  const router = useRouter();
  const plan = process.env.NEXT_PUBLIC_STRIPE_API_ID_FY!;

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
        router.push("/dashboard");
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
  // if (session && session.user.isActive) {
  //   return (

  //   );
  // }

  return (
    <>
      <button
        className={className}
        onClick={() => handleCreateCheckoutSession(plan)}
      >
        {children}
      </button>
    </>
  );
};

export default FreelancerCheckoutButton;
