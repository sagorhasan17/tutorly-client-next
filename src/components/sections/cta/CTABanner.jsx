import { Button } from "@heroui/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const CTABanner = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-slate-900 px-6 py-16 sm:px-10 lg:px-16">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-md">
              Start Your Learning Journey
            </span>

            <h2 className="mt-6 max-w-3xl text-2xl md:text-5xl font-black leading-tight tracking-tight text-white sm:text-5xl">
              Find The Perfect Teacher And Start Learning Today
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
              Join Tutorly and connect with experienced teachers for live
              interactive classes and personalized learning support.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/teachers">
                <Button className="h-12 rounded-2xl bg-emerald-500 px-7 text-sm font-semibold text-white hover:bg-emerald-600">
                  Explore Teachers
                  <FaArrowRight />
                </Button>
              </Link>

              <Link href="/signup">
                <Button
                  variant="bordered"
                  className="h-12 rounded-2xl border-white/20 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/20"
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
