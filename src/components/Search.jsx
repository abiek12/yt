import { MagnifyingGlassIcon, MicrophoneIcon } from "@phosphor-icons/react";

const Search = () => {
  return (
    <div className="flex gap-4">
      <div className="flex border rounded-4xl">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className="py-1 px-4 border-r flex-1"
        />
        <button className="py-1 px-5 bg-gray-200 cursor-pointer rounded-r-4xl">
          <MagnifyingGlassIcon size={30} />
        </button>
      </div>
      <button className="bg-gray-200 rounded-full p-2 cursor-pointer">
        <MicrophoneIcon size={30} />
      </button>
    </div>
  );
};

export default Search;
