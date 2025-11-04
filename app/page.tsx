"use client"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  return (<SessionProvider>
    <HomeComponent/>
  </SessionProvider>)
}

function HomeComponent() {
  const session = useSession();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {JSON.stringify(session)}Main Page
      {session.status === "authenticated" ?<button onClick={()=>signOut()}>Logout</button> : ""}
      {session.status === "unauthenticated"?<button onClick={()=>signIn()}>Login</button> : ""}
    </div>
  );
}
