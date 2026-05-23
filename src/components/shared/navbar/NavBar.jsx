"use client";

import ThemeToggle from "@/components/themeSwiche/ThemeToggle";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaBookOpen,
  FaChalkboardTeacher,
  FaTimes,
} from "react-icons/fa";
import NavLink from "./NavLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userInfo = authClient.useSession();
  const user = userInfo.data?.user;
  const handleLogout = async () => {
    await authClient.signOut();
  };

  const navBarLinks = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>

      <li>
        <NavLink href="/teachers">Teachers</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink href="/add-tutor">Add Tutor</NavLink>
          </li>

          <li>
            <NavLink href="/my-tutors">My Tutors</NavLink>
          </li>

          <li>
            <NavLink href="/my-bookings">My Bookings</NavLink>
          </li>

          <li>
            <NavLink href="/profile">Profile</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500 shadow-lg shadow-emerald-500/20">
            <FaChalkboardTeacher className="text-lg text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              Tutorly
            </h2>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Learn From Experts
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-7 lg:flex">{navBarLinks}</ul>
        {/* Desktop Right */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          {user ? (
            <div className="flex items-center gap-3">
              <Link href="/profile">
                <Avatar className="h-12 w-12 border-2 border-emerald-500">
                  <Avatar.Image
                    alt={user?.name}
                    src={user?.image}
                    className="h-full w-full rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>
                    {user?.name?.charAt(0) || "U"}
                  </Avatar.Fallback>
                </Avatar>
              </Link>
              <Button
                onClick={handleLogout}
                className="h-11 rounded-2xl bg-red-500 px-5 text-sm font-semibold text-white hover:bg-red-600"
              >
                Logout
              </Button>
            </div>
          ) : (
            <>
              <Link href="/login">
                <Button
                  variant="bordered"
                  className="h-11 rounded-2xl border-slate-300 px-5 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200"
                >
                  Sign In
                </Button>
              </Link>

              <Link href="/signup">
                <Button className="h-11 rounded-2xl bg-emerald-500 px-5 text-sm font-semibold text-white hover:bg-emerald-600">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 lg:hidden"
        >
          {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <div className="container mx-auto px-4 py-6 sm:px-6">
            {/* Mobile Links */}
            <ul className="flex flex-col gap-5">{navBarLinks}</ul>
            {/* Mobile Actions */}
            <div className="mt-6 border-t border-slate-200 pt-6 dark:border-slate-800">
              <div className="mb-5 flex items-center justify-between">
                <ThemeToggle />
                {user && (
                  <Link href="/profile">
                    <Avatar className="h-12 w-12 border-2 border-emerald-500">
                      <Avatar.Image
                        alt={user?.name}
                        src={user?.image}
                        className="h-full w-full rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <Avatar.Fallback>
                        {user?.name?.charAt(0) || "U"}
                      </Avatar.Fallback>
                    </Avatar>
                  </Link>
                )}
              </div>
              {user ? (
                <Button
                  onClick={handleLogout}
                  className="h-11 w-full rounded-2xl bg-red-500 text-sm font-semibold text-white hover:bg-red-600"
                >
                  Logout
                </Button>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link href="/login">
                    <Button
                      variant="bordered"
                      className="h-11 w-full rounded-2xl border-slate-300 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200"
                    >
                      Sign In
                    </Button>
                  </Link>

                  <Link href="/signup">
                    <Button className="h-11 w-full rounded-2xl bg-emerald-500 text-sm font-semibold text-white hover:bg-emerald-600">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
            {/* Info Card */}
            <div className="mt-6 rounded-[2rem] border border-emerald-100 bg-emerald-50 p-5 dark:border-emerald-500/10 dark:bg-emerald-500/5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white">
                  <FaBookOpen />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Start Learning Today
                  </h4>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Find expert tutors and book sessions instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
