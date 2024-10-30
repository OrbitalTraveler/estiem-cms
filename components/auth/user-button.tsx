"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { LogOut, Settings, User } from "lucide-react";
import { useCurrentUser } from "@/hooks/user-current-user";
import { signOutAction } from "@/actions/sign-out";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface UserButtonProps {
  device: "mobile" | "desktop";
}

const NavbarLinks = [
  { href: "/", label: "Dashboard" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
];

function UserButton({ device }: UserButtonProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const user = useCurrentUser();

  return device === "desktop" ? (
    // Desktop User Button
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-10 w-10 rounded-full"
        >
          <Avatar className="bg-gradient-to-b from-primary-600 to-primary-800">
            <AvatarImage src={user?.image || ""} />
            <AvatarFallback className="text-white">
              {user?.name
                ? user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()
                : "U"}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <AnimatePresence>
        <DropdownMenuContent className="w-56" align="end">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <DropdownMenuItem asChild>
              <Link href="/profile" className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/settings" className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <button
                className="flex w-full items-center"
                onClick={() => {
                  signOutAction();
                }}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sign out</span>
              </button>
            </DropdownMenuItem>
          </motion.div>
        </DropdownMenuContent>
      </AnimatePresence>
    </DropdownMenu>
  ) : (
    // Mobile User Button
    <div className="pt-4 pb-3 border-t border-gray-200">
      <div className="flex items-center px-4">
        <div className="flex-shrink-0">
          <Avatar className="h-10 w-10 bg-gradient-to-b from-primary-600 to-primary-800">
            <AvatarImage src={user?.image || ""} />
            <AvatarFallback className="text-white">
              {user?.name
                ? user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()
                : "U"}
            </AvatarFallback>{" "}
          </Avatar>
        </div>
        <div className="ml-3">
          <div className="text-base font-medium text-text">
            {user?.name || "User Name"}
          </div>
          <div className="text-sm font-medium text-secondary">
            {user?.email || " "}
          </div>
        </div>
      </div>
      <div className="mt-3 space-y-1">
        <Link
          href="/profile"
          className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Profile
        </Link>
        <Link
          href="/settings"
          className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Settings
        </Link>
        <button
          onClick={() => {
            signOutAction();
            setIsMobileMenuOpen(false);
          }}
          className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

export default UserButton;
