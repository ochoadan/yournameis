"use client";

import { useRouter } from "next/navigation";
import stripe from "@/utils/stripe";

interface CheckoutButtonProps {
  className: string;
  children: string;
  session: any;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({
  className,
  children,
  session,
}) => {
  const handleCreateCheckoutSession = async () => {
    try {
      await stripe.billingPortal.sessions.create({
        customer: session.user.stripeCustomerId,
        return_url: `${process.env.NEXTAUTH_URL}/billing`,
      });
    } catch (error: any) {
      console.error("An error occurred:", error.message);
    }
  };

  return (
    <>
      <button className={className} onClick={handleCreateCheckoutSession}>
        {children}
      </button>
    </>
  );
};

export default CheckoutButton;
