import { MdOutlineAlternateEmail } from "react-icons/md";
import { EmailInput, EmailCombobox } from "./ECInputs";
import prisma from "@/utils/prisma";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

interface Domain {
  id: number;
  name: string;
}

interface EmailFormsProps {
  domains: Domain[];
  availabilityButton?: boolean;
}

// const EmailForms = async ({ domains, showButton = false }: EmailFormsProps) => {

async function getData() {
  const response = await prisma.domains.findMany();

  const domainsData = response.map((item: any) => ({
    id: item.id,
    name: item.domain,
  }));

  return domainsData;
}

const EmailForms = async ({ availabilityButton = false }: any) => {
  const domainsData = await getData();

  return (
    <div className="flex space-x-2 mt-4">
      <EmailInput />
      <div className="flex items-center">
        <MdOutlineAlternateEmail />
      </div>
      <EmailCombobox domains={domainsData} />
      {availabilityButton && (
        <button
          type="submit"
          className="inline-flex items-center gap-x-1.5 rounded-md bg-sky-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          <CheckCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
          Verify Availability
        </button>
      )}
    </div>
  );
};

export default EmailForms;
