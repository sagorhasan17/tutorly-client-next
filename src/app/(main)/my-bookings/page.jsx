import DeleteAlert from "@/components/DeleteAlert";
import { auth } from "@/lib/auth";
import { getMyBookingSessions } from "@/lib/fetchData";
import { headers } from "next/headers";
import {
  FaCalendarCheck,
  FaCheckCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaUserGraduate,
} from "react-icons/fa";
import { MdOutlinePlaylistRemove } from "react-icons/md";

export const metadata = {
  title: "My Bookings",
  description:
    "My bookings page of Tutorly. Tutorly helps students connect with expert mentors and enjoy a flexible, modern learning experience.",
};

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const email = user?.email;
  const myBooking = await getMyBookingSessions(email);

  return (
    <section className="min-h-screen bg-slate-50 py-10 dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <FaCalendarCheck className="text-2xl" />
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                My Bookings
              </h1>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Manage all your tutor booking sessions easily.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">
              {myBooking?.length || 0}
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Total Bookings
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-950">
                <tr>
                  <th className="px-6 py-5 text-left text-sm font-black uppercase tracking-wide text-slate-600 dark:text-slate-300">
                    Student
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-black uppercase tracking-wide text-slate-600 dark:text-slate-300">
                    Phone
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-black uppercase tracking-wide text-slate-600 dark:text-slate-300">
                    Tutor
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-black uppercase tracking-wide text-slate-600 dark:text-slate-300">
                    Email
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-black uppercase tracking-wide text-slate-600 dark:text-slate-300">
                    Status
                  </th>
                  <th className="px-6 py-5 text-center text-sm font-black uppercase tracking-wide text-slate-600 dark:text-slate-300">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {myBooking?.length > 0 ? (
                  myBooking.map((booking) => (
                    <tr
                      key={booking._id}
                      className="border-b border-slate-100 transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-950"
                    >
                      {/* Student */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                            <FaUserGraduate />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900 dark:text-white">
                              {booking.name}
                            </h3>

                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              Student
                            </p>
                          </div>
                        </div>
                      </td>
                      {/* Phone */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                          <FaPhoneAlt className="text-emerald-500" />

                          <span>{booking.phone}</span>
                        </div>
                      </td>
                      {/* Tutor */}
                      <td className="px-6 py-5">
                        <h3 className="font-bold text-slate-900 dark:text-white">
                          {booking.tutorName}
                        </h3>
                      </td>
                      {/* Email */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                          <FaEnvelope className="text-emerald-500" />

                          <span>{booking.email}</span>
                        </div>
                      </td>
                      {/* Status */}
                      <td className="px-6 py-5">
                        {booking.currentStatus === "confirmed" ? (
                          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-xs font-bold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                            <FaCheckCircle />
                            Confirmed
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-xs font-bold text-red-500 dark:bg-red-500/10 dark:text-red-400">
                            <MdOutlinePlaylistRemove />
                            Cancelled
                          </span>
                        )}
                      </td>
                      {/* Action */}
                      <td className="px-6 py-5 text-center">
                        <DeleteAlert id={booking._id} booking={booking} />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-slate-800">
                          <FaCalendarCheck className="text-3xl" />
                        </div>
                        <h3 className="mt-6 text-2xl font-black text-slate-900 dark:text-white">
                          No Bookings Found
                        </h3>
                        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                          You have not booked any tutor sessions yet.
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBookingPage;
