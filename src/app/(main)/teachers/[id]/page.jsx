import UpdateModal from "@/components/UpdateModal";
import { auth } from "@/lib/auth";
import { getSingleTutor } from "@/lib/fetchData";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import {
  FaBookOpen,
  FaCalendarAlt,
  FaClock,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaStar,
  FaVideo,
} from "react-icons/fa";

export const metadata = {
  title: "Teacher Details",
  description:
    "Teacher details page of Tutorly. Tutorly helps students connect with expert mentors and enjoy a flexible, modern learning experience.",
};
const TeacherDetailsPage = async ({ params }) => {
  const { id } = await params;
  const {token} = await auth.api.getToken({
    headers: await headers(),
  });
  const tutor = await getSingleTutor(id, token);
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  return (
    <section className="min-h-screen bg-slate-50 py-6">
      <div className="container mx-auto">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Image Section */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg shadow-slate-100">
              <div className="relative aspect-4/5 w-full overflow-hidden">
                <Image
                  src={tutor?.photo}
                  alt={tutor?.tutorName}
                  fill
                  priority
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="border-t border-slate-100 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Hourly Fee</p>

                    <h3 className="mt-1 text-3xl font-black text-emerald-600">
                      ৳{tutor?.hourlyFee}
                      <span className="text-base font-medium text-slate-500">
                        /hr
                      </span>
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 rounded-2xl bg-yellow-50 px-4 py-3 text-yellow-500">
                    <FaStar />

                    <span className="font-bold">{tutor?.rating}</span>
                  </div>
                </div>

                <div className="mt-10 flex justify-between gap-4">
                  <UpdateModal tutor={tutor} user={user}/>
                  <Link href="/teachers">
                    <Button
                      variant="outline"
                      className="rounded-2xl border-slate-300 text-sm font-semibold"
                    >
                      Back To Tutors
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100 lg:col-span-2 lg:p-8">
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold text-emerald-600">
              {tutor?.subject}
            </span>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900">
              {tutor?.tutorName}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-emerald-500" />

                <span>{tutor?.institution}</span>
              </div>

              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-emerald-500" />

                <span>
                  {tutor?.area}, {tutor?.city}
                </span>
              </div>
            </div>

            {/* Info Cards */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <FaClock />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Experience</p>

                    <h4 className="font-bold text-slate-900">
                      {tutor?.experience}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <FaBookOpen />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Subject</p>

                    <h4 className="font-bold text-slate-900">
                      {tutor?.subject}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <FaVideo />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Teaching Mode</p>

                    <h4 className="font-bold text-slate-900">
                      {tutor?.teachingMode}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <FaCalendarAlt />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Available Slots</p>

                    <h4 className="font-bold text-slate-900">
                      {tutor?.totalSlots}
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Available Schedule
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                  <span className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                    {tutor?.availableDays}
                  </span>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <span className="rounded-full bg-emerald-100 px-4 py-2 font-medium text-emerald-600">
                  {tutor?.startTime}
                </span>

                <span>to</span>

                <span className="rounded-full bg-emerald-100 px-4 py-2 font-medium text-emerald-600">
                  {tutor?.endTime}
                </span>
              </div>
            </div>

            {/* Bio */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-slate-900">About Tutor</h3>

              <p className="mt-5 leading-8 text-slate-500">{tutor?.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherDetailsPage;
