import { Search } from "lucide-react";
import React from "react";

type Props = {};

const Searchbar = (props: Props) => {
  return (
    <div className="hidden sm:flex items-center gap-2 rounded-md ring-1 ring-gray-200 px-2 py-1 shadow-sm">
      <Search className="w-4 h-4 text-gray-500" />
      <input id="search" placeholder="search..." type="text" />
    </div>
  );
};

export default Searchbar;
