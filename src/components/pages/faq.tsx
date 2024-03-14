"use client";

// import { FadeIn, FadeInStagger } from "@/components/Global/FadeIn";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";

const faqs = [
  {
    question: "How do I get started with YourNameIs?",
    answer: "You can get started by signing up for an account. And creating an email route, when the email route is set up you can receive email to the designated email address you set up.",
  },
  {
    question: "How do I set up an email route?",
    answer: "To set up an email route, Simply go to your dashboard and click on the Create Email button, then fill in the forms and click on the submit button.",
  },
  {
    question: "What is the pricing for YourNameIs?",
    answer: "The pricing for YourNameIs is $10 per month, and you can cancel anytime. This pricing at least twice as competitive than registering a domain and getting email services from a domain registrar.",
  },
  {
    question: "What are the features of YourNameIs?",
    answer: "The features of YourNameIs are: Email Encryption, Spam Filtering, Competitive Pricing.",
  },
  
];
const GlobalFAQ = () => {
  return (
    <div className="mx-auto max-w-5xl mb-20">
      <div className="text-3xl font-extrabold leading-10 text-gray-900">
        <h2>Frequently asked questions:</h2>
        <hr className="border-sky-600 opacity-90 border-b-[2px] w-20 my-2" />
      </div>
      <p className="mt-4 text-base leading-7 text-gray-600">
        Can’t find the answer you’re looking for? Reach out to our{" "}
        <Link
          href="https://www.halfnine.com/contact"
          className="font-semibold text-sky-600 hover:text-sky-500"
        >
          customer support
        </Link>{" "}
        team.
      </p>
      <dl className="mt-10 divide-y divide-gray-900/10">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <dl>
              <Disclosure as="div">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button
                        className={clsx(
                          "flex w-full items-start justify-between text-left text-gray-700 hover:text-black",
                          {
                            "pt-6 pb-4": open,
                            "py-6": !open,
                          }
                        )}
                      >
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="pr-12 mb-6">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </dl>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default GlobalFAQ;
