import SignInForm from "@/components/sign-in-form";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  return (
    <div className=" min-h-screen w-full items-center justify-center flex">
      <div className=" max-w-sm w-full">
        <h1 className=" text-lg font-semibold">Login</h1>
        <SignInForm />
      </div>
    </div>
  );
}
