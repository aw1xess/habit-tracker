"use client";

import { capitalizeFirstLetter } from "@/app/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  name: string;
  path: string;
}
//TODO Replace light/dark with theme provider

const MenuItem = ({ name, path }: MenuItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <>
      <Link
        href={path}
        className={`text-xs flex flex-col gap-2 items-center ${
          isActive ? "text-active font-bold" : ""
        }`}
      >
        <div
          className={`px-8 py-1.5 rounded-xl ${
            isActive ? "bg-active-background" : ""
          }`}
        >
          <Image
            src={"/icons/" + name + ".svg"}
            className={`menu-icon ${isActive ? "active-menu-icon" : ""}`}
            alt={name}
            width={20}
            height={20}
          />
        </div>
        {capitalizeFirstLetter(name)}
      </Link>
    </>
  );
};

export default MenuItem;
