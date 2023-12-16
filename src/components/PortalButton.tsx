"use client";

import { useRouter } from "next/navigation";
import getStripe from "@/utils/getStripe";

interface CheckoutButtonProps {
  className: string;
  children: string;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({
  className,
  children,
}) => {
  const router = useRouter();

  const handleCreateCheckoutSession = async () => {
    try {
      const res = await fetch(`/api/stripe/billing-portal`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 401) {
        router.push("/signin");
        return;
      }
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
