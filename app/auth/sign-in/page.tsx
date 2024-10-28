"use client";

import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import SignInForm from "@/components/auth/sign-in-form";

export default function SignInPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen p-6">
      <motion.div
        className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-md">
          <motion.div
            className="mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/images/estiem-lgns-logo.svg"
              alt="Estiem Logo"
              width={168}
              height={168}
              className="mx-auto"
            />
          </motion.div>
          <SignInForm />
          <div className="mt-4 text-center">
            <Link
              href="/forgot-password"
              className="text-sm text-secondary hover:text-text transition duration-300"
            >
              Zaboravili ste lozinku?
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="w-full rounded-2xl md:w-1/2 bg-primary-800 relative overflow-hidden"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/images/sign-in-hero.png"
          alt="Background"
          fill={true}
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-background p-8">
          <motion.h1
            className="text-4xl font-bold mb-24"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Image
              src="/estiem-cms-logo.svg"
              alt="EstiemCMS Logo"
              width={464}
              height={464}
              className="mx-auto"
            />
          </motion.h1>
          <motion.p
            className="text-3xl text-left mb-8 italic"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Image
              src="/estiem-cms-moto.svg"
              alt="EstiemCMS Moto"
              width={464}
              height={464}
              className="mx-auto"
            />
          </motion.p>
          <motion.a
            href="https://estiem.rs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-background hover:underline absolute bottom-4 right-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Globe size={24} className="inline mr-2" />
            estiem.rs
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
