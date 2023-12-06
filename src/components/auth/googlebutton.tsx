import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa6";

const GoogleButton = () => {
  const handleClick = () => {
    signIn("google");
  };

  return (
    <button
      onClick={handleClick}
      className="flex w-full items-center justify-center gap-3 rounded-md bg-[#333333] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
    >
      <FaGoogle className="h-5 w-5" />
      <span className="text-sm font-semibold leading-6">Google</span>
    </button>
  );
};

export default GoogleButton;
