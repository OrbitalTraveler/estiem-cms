"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Menu, Plus } from "lucide-react";
import EstiemCMSLogo from "@/public/images/estiem-cms-logo";
import UserButton from "../auth/user-button";

const NavbarLinks = [
  { href: "/", label: "Dashboard" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="bg-white shadow-sm relative z-10">
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <EstiemCMSLogo color="#205E44" width={192} />
              </div>
              <div className="hidden sm:ml-12 sm:flex sm:space-x-8">
                {NavbarLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Button
                variant="ghost"
                size="icon"
                className="bg-gradient-to-b from-primary-800 to-primary-600 text-white hover:transform hover:scale-105 transition duration-300 hover:text-white"
              >
                <Plus className="" />
              </Button>
              <div className="ml-8 relative">
                <UserButton device="desktop" />
              </div>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <Button
                variant="ghost"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500"
              >
                <Menu className="block h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 fixed inset-0 bg-white z-50 sm:hidden overflow-y-auto"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex justify-end items-center h-16">
              <Button
                variant="ghost"
                onClick={() => setIsMobileMenuOpen(false)}
                className="-mr-2 flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500"
              >
                <Menu className="block h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <div className="pt-2 pb-3 space-y-1">
              {NavbarLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <UserButton device="mobile" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
