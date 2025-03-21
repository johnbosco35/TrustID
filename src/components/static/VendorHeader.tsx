import { useState } from "react";
import { Search } from "lucide-react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const userInfo = JSON.parse(localStorage.getItem("UserInfo") || "{}");

  return (
    <header className="w-full bg-[#171923] py-3 px-4 flex items-center justify-between">
      <div className="flex-1 text-white">
        {/* Left side content can go here if needed */}
        <div className="flex items-center">
          <p>Hey!</p>
          <span className="ml-3">{userInfo.name}</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#2D3748] text-gray-300 rounded-md py-1 px-8 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-[200px]"
          />
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        </div>

        {/* Custom avatar implementation without using shadcn components */}
        <div className="h-8 w-8 rounded-full bg-gray-600 overflow-hidden flex items-center justify-center text-white">
          {/* <img
            src="/placeholder.svg?height=32&width=32"
            alt="User"
            className="h-full w-full object-cover"
            onError={(e) => {
              // Fallback to showing the letter if image fails to load
              e.currentTarget.style.display = "none";
              // e.currentTarget.parentElement.innerHTML = "U";
            }}
          /> */}

          <p>{userInfo?.name?.charAt()}</p>
        </div>
      </div>
    </header>
  );
}
