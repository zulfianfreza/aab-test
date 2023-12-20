"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className=" container mx-auto p-4 mt-8">
      <p className=" text-gray-800">
        Created by{" "}
        <Link
          href="https://julianreza.com"
          target="_blank"
          className=" text-blue-600"
        >
          Zulfian Fachru Reza
        </Link>
      </p>
    </div>
  );
}
