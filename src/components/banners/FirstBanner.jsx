import { Button } from "@heroui/react";
import Link from "next/link";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";

const FirstBanner = () => {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-linear-to-r from-slate-950/85 via-slate-900/70 to-emerald-900/40" />

      <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            <p className="text-sm font-medium text-white">
              Trusted Learning Platform
            </p>
          </div>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            Learn From The Best Teachers In Bangladesh
          </h1>

          <p className="hidden md:block mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Connect with expert tutors, book live classes, and improve your
            skills with personalized learning experiences anytime, anywhere.
          </p>

          <div className="mt-10 flex items-center justify-between px-10 md:px-0 gap-2 md:gap-0">
            <Link href="/teachers">
              <Button className="h-12 rounded-2xl bg-emerald-500 px-7 text-sm font-semibold text-white hover:bg-emerald-600">
                Find Teachers
                <FaArrowRight />
              </Button>
            </Link>

            <Link href="/about">
              <Button
                variant="bordered"
                className="h-12 rounded-2xl border-white/20 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/20"
              >
                <FaPlayCircle />
                Learn More
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            <div>
              <h3 className="text-3xl font-black text-white">100+</h3>
              <p className="mt-1 text-sm text-slate-300">Expert Teachers</p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-white">10K+</h3>
              <p className="mt-1 text-sm text-slate-300">Active Students</p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-white">4.9★</h3>
              <p className="mt-1 text-sm text-slate-300">Student Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstBanner;
