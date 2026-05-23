"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import { FaEdit, FaEnvelope, FaUser } from "react-icons/fa";

const ProfilePage = () => {
  const userInfo = authClient.useSession();
  const user = userInfo.data?.user;

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            My Profile
          </h1>
          <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
            View and manage your Tutorly account information.
          </p>
        </div>
        {/* Card */}
        <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
          {/* Top Banner */}
          <div className="h-36 bg-linear-to-r from-emerald-500 via-green-500 to-lime-400" />
          <div className="px-6 pb-8 sm:px-8">
            {/* Profile */}
            <div className="-mt-16 flex flex-col items-center">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-[6px] border-white bg-slate-100 shadow-lg dark:border-slate-900">
                <Image
                  src={user?.image || "/default-avatar.png"}
                  alt={user?.name || "User"}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h2 className="mt-5 text-center text-3xl font-black text-slate-900 dark:text-white">
                {user?.name || "Tutorly User"}
              </h2>
              <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                Tutorly Member
              </p>
              <Button className="mt-6 h-11 rounded-2xl bg-emerald-500 px-6 text-sm font-semibold text-white transition hover:bg-emerald-600">
                <FaEdit />
                Edit Profile
              </Button>
            </div>
            {/* User Info */}
            <div className="mt-10 space-y-5">
              {/* Name */}
              <div className="flex items-center gap-4 rounded-[1.8rem] border border-slate-200 bg-white px-5 py-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                  <FaUser className="text-lg" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Full Name
                  </p>
                  <h3 className="mt-1 text-lg font-black text-slate-100 dark:text-white">
                    {user?.name || "Tutorly User"}
                  </h3>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-center gap-4 rounded-[1.8rem] border border-slate-200 bg-white px-5 py-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                  <FaEnvelope className="text-lg" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Email Address
                  </p>
                  <h3 className="mt-1 break-all text-lg font-black text-slate-100 dark:text-white">
                    {user?.email || "example@gmail.com"}
                  </h3>
                </div>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="mt-8 rounded-[1.8rem] bg-emerald-50 px-5 py-5 dark:bg-emerald-500/10">
              <p className="text-sm leading-7 text-emerald-700 dark:text-emerald-300">
                Welcome to Tutorly. Discover expert tutors, book live learning
                sessions, and improve your skills with personalized education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
