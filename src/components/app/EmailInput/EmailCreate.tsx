import { MdOutlineAlternateEmail } from "react-icons/md";
import { EmailInput, EmailCombobox } from "./ECInputs";

interface Domain {
  id: number;
  name: string;
}

interface EmailFormsProps {
  domainsData: Domain[];
}

const EmailForms = ({ domainsData }: EmailFormsProps) => {
  return (
    <div className="flex space-x-2 mt-4">
      <EmailInput />
      <div className="flex items-center">
        <MdOutlineAlternateEmail />
      </div>
      <EmailCombobox domains={domainsData} />
    </div>
  );
};

export default EmailForms;
