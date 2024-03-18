"use client";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUp() {
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const res = await createUserWithEmailAndPassword(email, password);
      console.log(res, "response");
      setEmail("");
      setPassword("");
      router.push("/sign-in");
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
        <h1 className="text-white text-2xl">Sign Up</h1>
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
          Sign Up
        </button>
        <h3 className="text-white">
          Already Have a acount?{" "}
          <Link className="text-blue-500" href={"/sign-in"}>
            Sign-in
          </Link>
        </h3>
      </form>
    </div>
  );
}
