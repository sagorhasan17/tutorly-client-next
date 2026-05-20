import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaBookOpen,
  FaChalkboardTeacher,
  FaUserGraduate,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-24">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-md">
              About Tutorly
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Empowering Students Through Smart Learning
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
              Tutorly connects students with expert teachers to create a modern,
              flexible, and engaging learning experience from anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto grid items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem]">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
              alt="Students Learning"
              width={700}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-600">
              Who We Are
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900">
              A Modern Platform For Online Education
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-500">
              Tutorly is an online teacher booking platform designed to make
              learning easier and more accessible for students across
              Bangladesh. Our mission is to help students connect with skilled
              mentors and achieve their academic goals.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-500">
              From academic subjects to professional skills, Tutorly provides a
              trusted environment where students can learn confidently through
              live interactive classes.
            </p>

            <div className="mt-8">
              <Link href="/teachers">
                <Button className="h-12 rounded-2xl bg-emerald-500 px-7 text-sm font-semibold text-white hover:bg-emerald-600">
                  Explore Teachers
                  <FaArrowRight />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-600">
              Why Tutorly
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900">
              Everything You Need To Learn Better
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-2xl text-emerald-600">
                <FaChalkboardTeacher />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Expert Mentors
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Learn from verified and experienced teachers in various fields.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-2xl text-emerald-600">
                <FaBookOpen />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Flexible Learning
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Book classes anytime and learn at your own pace comfortably.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-2xl text-emerald-600">
                <FaUserGraduate />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Student Success
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Thousands of students trust Tutorly to improve their skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] bg-slate-900 px-6 py-16 text-center sm:px-10">
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Ready To Start Learning?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
              Join Tutorly today and connect with expert teachers for a smarter
              learning experience.
            </p>

            <div className="mt-10 flex justify-center">
              <Link href="/teachers">
                <Button className="h-12 rounded-2xl bg-emerald-500 px-7 text-sm font-semibold text-white hover:bg-emerald-600">
                  Find Teachers
                  <FaArrowRight />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
