import Image from "next/image";
import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/24/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

interface navigationItemInterface {
  text: string;
  icon: any;
  isActive: boolean;
}

export default function Sidebar() {
  const navigationItems: Array<navigationItemInterface> = [
    { text: "Home", icon: HomeIcon, isActive: true },
    { text: "Explore", icon: HashtagIcon, isActive: false },
    { text: "Notifications", icon: BellIcon, isActive: false },
    { text: "Messages", icon: InboxIcon, isActive: false },
    { text: "Bookmarks", icon: BookmarkIcon, isActive: false },
    { text: "Lists", icon: ClipboardIcon, isActive: false },
    { text: "Profile", icon: UserIcon, isActive: false },
    { text: "More", icon: EllipsisHorizontalCircleIcon, isActive: false },
  ];
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      {/* Twitter Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image src="/logo.png" alt="twitter logo" width={50} height={50} />
      </div>
      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:items-starts">
        {navigationItems.map((item: navigationItemInterface, index: number) => (
          <SidebarMenuItem
            key={index}
            text={item.text}
            Icon={item.icon}
            active={item.isActive}
          />
        ))}
      </div>
      {/* Button */}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
        Tweet
      </button>
      {/* Mini-profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img
          className="h-10 w-10 rounded-full xl:mr-2"
          src="https://picsum.photos/200/300"
          alt="picture profile"
        />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">John Doe</h4>
          <p className="text-gray-500">@john_doe_twitter</p>
        </div>
        <EllipsisHorizontalIcon className="h-5 xl:ml-8" />
      </div>
    </div>
  );
}
