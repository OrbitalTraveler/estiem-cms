import React from "react";
import Navbar from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center pt-44 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <h1 className="text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-b to-primary-800 from-primary-600">
            404
          </h1>
          <p className="mt-2 text-3xl font-bold text-text sm:text-4xl">
            Stranica ne postoji!
          </p>
          <div className="mt-16">
            <Button
              asChild
              className="w-full bg-gradient-to-b from-primary-800 to-primary-600 hover:transform hover:scale-105 transition duration-300 text-white font-semibold py-3 px-4 rounded-md"
            >
              <Link href="/">Nazad na početnu stranicu</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;
