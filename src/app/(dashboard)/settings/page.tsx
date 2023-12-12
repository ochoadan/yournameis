import Image from "next/image";

const Page = () => {
  return (
    <div className="border-b border-gray-200 bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold text-gray-900 text-center pt-2">
        Under Construction
      </h1>
      <Image
        className="mx-auto"
        src="/img/under-construction.svg"
        alt="Under Construction"
        width={400}
        height={400}
      />
    </div>
  );
};

export default Page;
