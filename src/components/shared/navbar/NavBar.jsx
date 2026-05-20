"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaBookOpen,
  FaChalkboardTeacher,
  FaTimes,
} from "react-icons/fa";
import NavLink from "./NavLink";

const navBarLinks = (
  <>
    <li>
      <NavLink href="/">Home</NavLink>
    </li>

    <li>
      <NavLink href="/teachers">Teachers</NavLink>
    </li>

    <li>
      <NavLink href="/add-tutor">Add a tutor</NavLink>
    </li>

    <li>
      <NavLink href="/my-bookings">Bookings</NavLink>
    </li>

    <li>
      <NavLink href="/about">About</NavLink>
    </li>
  </>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500 shadow-lg shadow-emerald-100">
            <FaChalkboardTeacher className="text-lg text-white" />
          </div>

          <div>
            <h2 className="text-2xl font-black tracking-tight text-slate-900">
              Tutorly
            </h2>

            <p className="text-xs font-medium text-slate-500">
              Learn From Expert Teachers
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-7 lg:flex">{navBarLinks}</ul>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/login">
            <Button
              variant="bordered"
              className="border-slate-300 px-5 text-slate-700"
            >
              Sign In
            </Button>
          </Link>

          <Link href="/signup">
            <Button className="bg-emerald-500 px-5 text-white hover:bg-emerald-600">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-slate-200 p-2 text-slate-700 lg:hidden"
        >
          {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container mx-auto px-4 py-5">
            {/* Mobile Links */}
            <ul className="flex flex-col gap-5">{navBarLinks}</ul>

            {/* Mobile Buttons */}
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/signin">
                <Button
                  variant="bordered"
                  className="w-full border-slate-300 text-slate-700"
                >
                  Sign In
                </Button>
              </Link>

              <Link href="/signup">
                <Button className="w-full bg-emerald-500 text-white hover:bg-emerald-600">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Small Info Card */}
            <div className="mt-6 rounded-3xl border border-emerald-100 bg-emerald-50 p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-emerald-500 p-3 text-white">
                  <FaBookOpen />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800">
                    Start Learning Today
                  </h4>

                  <p className="text-sm text-slate-500">
                    Book your favorite teacher instantly.
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
