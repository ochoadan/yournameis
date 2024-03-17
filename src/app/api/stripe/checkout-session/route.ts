import { auth } from "auth";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2023-10-16",
  });

  const session = await auth();

  if (!session?.user) {
    return NextResponse.json(
      {
        error: {
          code: "no-access",
          message: "You are not signed in.",
        },
      },
      { status: 401 }
    );
  }

  if (session.user.isActive) {
    return NextResponse.json(
      {
        error: {
          code: "already-active",
          message: "You are already an active subscriber.",
        },
      },
      { status: 409 }
    );
    // TODO: implement billing portal
    // const activeSession = await stripe.billingPortal.sessions.create({
    //   customer: session.user.stripeCustomerId,
    //   return_url: `${process.env.NEXTAUTH_URL}/billing`,
    // });
    // return NextResponse.json({ session: activeSession }, { status: 200 });
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer: session.user.stripeCustomerId,
    line_items: [
      {
        // temporarily hard coded price (subscription)
        price: body,
        quantity: 1,
      },
    ],
    allow_promotion_codes: true,
    success_url:
      process.env.NEXTAUTH_URL + `/dashboard?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXTAUTH_URL}/dashboard`,
    subscription_data: {
      metadata: {
        // so that we can manually check in Stripe for whether a customer has an active subscription later, or if our webhook integration breaks.
        payingUserId: session.user.id,
      },
    },
  });

  if (!checkoutSession.url) {
    return NextResponse.json(
      {
        error: {
          code: "stripe-error",
          message: "Could not create checkout session",
        },
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ session: checkoutSession }, { status: 200 });
}
