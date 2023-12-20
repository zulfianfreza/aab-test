import DialogDetailUniversity from "@/components/dialog-detail-university";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ListUniversities from "@/components/list-universities";
import { authOptions } from "@/lib/auth";
import { getUniversities } from "@/services/university";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/sign-in");
  }
  const universities = await getUniversities();
  return (
    <>
      <div className=" w-full min-h-screen">
        <Header />
        <div className="container mx-auto mt-8">
          <h1 className=" text-gray-800">
            Welcome, {session.user.username} 👋
          </h1>

          <ListUniversities universities={universities} />
        </div>

        <Footer />
      </div>
      <DialogDetailUniversity />
    </>
  );
}
