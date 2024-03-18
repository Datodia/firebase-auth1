"use client";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const res = await signInWithEmailAndPassword(email, password);
      if(res?.user){
        sessionStorage.setItem("user", "exist");
        router.push("/");
      }
      setEmail("");
      setPassword("");
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh] ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border-2 border-black p-6 rounded-md bg-sky-900"
      >
        <h1 className="text-white text-2xl">Sign In</h1>
        <input
          type="email"
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 w-[300px] h-[40px] mt-2 "
          value={email}
        />
        <input
          type="password"
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 w-[300px] h-[40px] mt-2"
          value={password}
        />
        <button className="text-[#fff] h-10 border-2 border-black mt-2 bg-blue-600">
          Sign In
        </button>
      </form>
    </div>
  );
}
