"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const userSession = sessionStorage.getItem("user");

  useEffect(() => {
    if (!user && !userSession) {
      router.push("/sign-up");
    }
  }, [user]);

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <button
        onClick={async () => {
          await signOut(auth);
          sessionStorage.removeItem("user");
        }}
        className="w-[140px] h-10 bg-blue-600"
      >
        logout
      </button>
      <h1>Dashboard Page</h1>
    </main>
  );
}
