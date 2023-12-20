"use client";

import { University } from "@/@types";
import useDialog from "@/hooks/use-dialog";
import Link from "next/link";

interface ListItemProps {
  university: University;
  index: number;
}

export default function ListItem({ university, index }: ListItemProps) {
  const { onOpen, setUniversity } = useDialog();

  const handleClick = () => {
    onOpen();
    setUniversity(university);
  };

  return (
    <div className="p-4 w-full hover:bg-gray-100 grid grid-cols-12">
      <div className=" col-span-1 text-gray-800">{index}</div>
      <div className=" col-span-6">
        <p
          className="  cursor-pointer w-fit text-gray-800"
          onClick={handleClick}
        >
          {university.name}
        </p>
      </div>
      <div className=" col-span-5">
        <Link
          href={university.web_pages[0]}
          target="_blank"
          className=" text-blue-600 hover:underline"
        >
          {university.web_pages[0]}
        </Link>
      </div>
    </div>
  );
}
