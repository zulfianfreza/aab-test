"use client";

import { signOut } from "next-auth/react";
import Logo from "./logo";

export default function Header() {
  return (
    <header className=" w-full border-b">
      <div className=" w-full py-6 container mx-auto flex justify-between items-center">
        <Logo />
        <button onClick={() => signOut()}>Logout</button>
      </div>
    </header>
  );
}
