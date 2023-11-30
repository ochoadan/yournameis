import { redirect } from "next/navigation";
import { auth } from "auth";
import AppBarNav from "./appbarnav";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Appbar = async () => {
  const session = await auth();

  if (!session) {
    redirect("/");
  }
  return <AppBarNav />;
};

export default Appbar;
