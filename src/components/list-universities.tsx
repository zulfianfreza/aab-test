"use client";

import { University } from "@/@types";
import ListItem from "./list-item";
import { useState } from "react";

interface ListUniversitiesProps {
  universities: University[];
}

export default function ListUniversities({
  universities,
}: ListUniversitiesProps) {
  const [search, setSearch] = useState<string>("");
  const [universityList, setUniversityList] =
    useState<University[]>(universities);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    if (text != "") {
      let results = [...universities];
      results = results.filter((university) => {
        return university.name.toLowerCase().indexOf(text.toLowerCase()) !== -1;
      });
      setUniversityList(results);
    } else {
      setUniversityList(universities);
    }

    setSearch(e.target.value);
  };
  return (
    <div className=" mt-4 flex flex-col">
      <div className="flex justify-end">
        <input
          type="text"
          className="bg-gray-100 rounded-xl h-12 px-4 py-2.5 w-[356px] text-sm"
          value={search}
          onChange={handleSearch}
          placeholder="Cari universitas..."
        />
      </div>
      <div className=" w-full grid grid-cols-12 text-gray-800 bg-gray-200 px-4 py-2.5 mt-4">
        <div className=" col-span-1">#</div>
        <div className=" col-span-6">Nama Universitas</div>
        <div className=" col-span-5">Website</div>
      </div>
      {universityList.map((university, i) => (
        <ListItem key={i} index={i + 1} university={university} />
      ))}
    </div>
  );
}
