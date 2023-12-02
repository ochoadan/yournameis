const Page = () => {
  return (
    <form className="mt-12">
      <div className="col-span-full">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Application Name
        </label>
        <input
          id="text"
          type="text"
          name="text"
          // onChange={(event) => setApplicationName(event.target.value)}
          className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
          placeholder="My Application"
          maxLength={32}
          required
        />
      </div>
      <div className="mt-3 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
          // onClick={() => setAppCreate(false)}
        >
          Cancel
        </button>
        <button
          // disabled={createAppLoading}
          type="submit"
          className="inline-flex justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {/* {createAppLoading ? "Loading..." : "Submit"} */}Loading...
        </button>
      </div>
    </form>
  );
};

export default Page;
