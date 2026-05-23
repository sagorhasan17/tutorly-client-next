import { Button } from "@heroui/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const CTABanner = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 px-6 py-16 shadow-2xl shadow-slate-900/20 sm:px-10 lg:px-16 dark:bg-slate-900">
          {/* Background Glow */}
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Badge */}
            <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-300 backdrop-blur-md">
              Start Your Learning Journey
            </span>
            {/* Heading */}
            <h2 className="mt-6 max-w-4xl text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl">
              Find The Perfect Tutor And Start Learning Today
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
              Join Tutorly and connect with experienced teachers for live
              interactive classes, flexible schedules, and personalized learning
              support from anywhere.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Link href="/teachers">
                <Button className="h-12 w-full rounded-2xl bg-emerald-500 px-7 text-sm font-semibold text-white transition hover:bg-emerald-600 sm:w-auto">
                  Explore Tutors
                  <FaArrowRight />
                </Button>
              </Link>

              <Link href="/signup">
                <Button
                  variant="bordered"
                  className="h-12 w-full rounded-2xl border-white/20 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20 sm:w-auto"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
