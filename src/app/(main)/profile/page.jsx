"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import {
  FaBookOpen,
  FaEdit,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUserGraduate,
} from "react-icons/fa";

const ProfilePage = () => {
  const userInfo = authClient.useSession();

  const user = userInfo.data?.user;
  console.log(user?.image);

  return (
    <section className="min-h-screen bg-slate-50 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-black tracking-tight text-slate-900">
              My Profile
            </h1>

            <p className="mt-3 text-base text-slate-500">
              Manage your profile information and account details.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Side */}
            <Card className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-100">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-emerald-100 shadow-lg">
                  <Image
                    src={user?.image || "/default-avatar.png"}
                    alt={user?.name || "User Avatar"}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h2 className="mt-6 text-3xl font-black text-slate-900">
                  {user?.name || "Tutorly User"}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Student & Learning Member
                </p>

                <Button className="mt-6 h-12 rounded-2xl bg-emerald-500 px-6 text-sm font-semibold text-white hover:bg-emerald-600">
                  <FaEdit />
                  Edit Profile
                </Button>
              </div>

              {/* Quick Info */}
              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <FaEnvelope />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Email Address</p>

                    <h4 className="text-sm font-semibold text-slate-900">
                      {user?.email || "example@gmail.com"}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Phone Number</p>

                    <h4 className="text-sm font-semibold text-slate-900">
                      +8801XXXXXXXXX
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Location</p>

                    <h4 className="text-sm font-semibold text-slate-900">
                      Dhaka, Bangladesh
                    </h4>
                  </div>
                </div>
              </div>
            </Card>

            {/* Right Side */}
            <div className="space-y-8 lg:col-span-2">
              {/* Overview */}
              <Card className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">
                      Profile Overview
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Your learning activity and account information.
                    </p>
                  </div>

                  <Button
                    variant="bordered"
                    className="rounded-2xl border-slate-300"
                  >
                    <FaEdit />
                    Edit
                  </Button>
                </div>

                {/* Stats */}
                <div className="mt-8 grid gap-5 sm:grid-cols-3">
                  <div className="rounded-2xl bg-slate-50 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                      <FaBookOpen />
                    </div>

                    <h4 className="mt-5 text-3xl font-black text-slate-900">
                      12
                    </h4>

                    <p className="mt-2 text-sm text-slate-500">
                      Booked Sessions
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                      <FaUserGraduate />
                    </div>

                    <h4 className="mt-5 text-3xl font-black text-slate-900">
                      5
                    </h4>

                    <p className="mt-2 text-sm text-slate-500">Active Tutors</p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                      <FaBookOpen />
                    </div>

                    <h4 className="mt-5 text-3xl font-black text-slate-900">
                      32h
                    </h4>

                    <p className="mt-2 text-sm text-slate-500">
                      Learning Hours
                    </p>
                  </div>
                </div>
              </Card>

              {/* About */}
              <Card className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">
                      About Me
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Short introduction about yourself.
                    </p>
                  </div>

                  <Button
                    variant="bordered"
                    className="rounded-2xl border-slate-300"
                  >
                    <FaEdit />
                    Edit
                  </Button>
                </div>

                <p className="mt-6 leading-8 text-slate-600">
                  Passionate learner exploring new skills and improving
                  knowledge through online tutoring and personalized education
                  experiences on Tutorly.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
