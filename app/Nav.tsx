import { getServerSession } from "next-auth/next";
import { signIn } from "next-auth/react";
import Login from "./auth/Login";
import Logged from "./auth/Logged";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  console.log("session", session);
  return (
    <nav className="flex justify-between items-center py-8 ">
      <Link href={"/"}>
        <h1 className="font-bold text-lg">SendIt.</h1>
      </Link>
      <ul className="flex items-center gap-6"></ul>
      {!session?.user && <Login />}
      {/* {session?.user && <Logged image={session.user.image || ""} />} */}
    </nav>
  );
}
