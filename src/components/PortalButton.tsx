"use client";

interface CheckoutButtonProps {
  className: string;
  children: string;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({
  className,
  children,
}) => {
  const handleCreateCheckoutSession = async () => {
    try {
      const res = await fetch(`/api/stripe/billing-portal`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 401) {
        window.location.href = "/signin";
        return;
      }

      const billingSession = await res.json().then((value) => {
        return value.session;
      });

      if (billingSession && billingSession.url) {
        window.location.href = billingSession.url;
      } else {
        console.error("Invalid billing session");
        return;
      }
    } catch (error: any) {
      console.error("An error occurred:", error.message);
      return;
    }
  };

  return (
    <button className={className} onClick={handleCreateCheckoutSession}>
      {children}
    </button>
  );
};

export default CheckoutButton;
