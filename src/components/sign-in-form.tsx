"use client";

import { signIn } from "next-auth/react";
import React, { useState } from "react";

export default function SignInForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    signIn("credentials", { username, password, redirect: true });
  };

  return (
    <div className="flex flex-col mt-8">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="username"
          className=" text-sm font-medium text-gray-800"
        >
          Username
        </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className=" h-12 w-full py-2.5 px-4 text-sm bg-gray-100 rounded-xl"
          placeholder="Username"
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label
          htmlFor="password"
          className=" text-sm font-medium text-gray-800"
        >
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className=" h-12 w-full py-2.5 px-4 text-sm bg-gray-100 rounded-xl"
          placeholder="Password"
        />
      </div>
      <div className=" mt-4">
        <button
          className=" w-full h-12 rounded-xl font-medium bg-blue-600 text-sm text-white"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
