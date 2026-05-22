import DeleteAlert from "@/components/DeleteAlert";
import { auth } from "@/lib/auth";
import { getMyBookingSessions } from "@/lib/fetchData";
import { headers } from "next/headers";
import { FaCalendarCheck, FaCheckCircle } from "react-icons/fa";
import { MdOutlinePlaylistRemove } from "react-icons/md";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  const email = user?.email;

  const myBooking = await getMyBookingSessions(email);

  return (
    <section className="min-h-screen bg-slate-50 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
              <FaCalendarCheck className="text-2xl" />
            </div>

            <div>
              <h1 className="text-4xl font-black tracking-tight text-slate-900">
                My Bookings
              </h1>

              <p className="mt-1 text-slate-500">
                Manage all your tutor booking sessions easily.
              </p>
            </div>
          </div>
        </div>


        {/* Table Card */}
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-100">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="border-b border-slate-200 bg-slate-100">
                <tr>
                  <th className="px-6 py-5 text-left text-sm font-bold text-slate-700">
                    Student Name
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold text-slate-700">
                    Phone
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold text-slate-700">
                    Tutor Name
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold text-slate-700">
                    Email
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold text-slate-700">
                    Status
                  </th>

                  <th className="px-6 py-5 text-center text-sm font-bold text-slate-700">
                    Cancel
                  </th>
                </tr>
              </thead>

              <tbody>
                {myBooking?.length > 0 ? (
                  myBooking.map((booking) => (
                    <tr
                      key={booking._id}
                      className="border-b border-slate-100 transition hover:bg-slate-50"
                    >
                      <td className="px-6 py-5">
                        <h3 className="font-semibold text-slate-900">
                          {booking.name}
                        </h3>
                      </td>

                      <td className="px-6 py-5 text-sm text-slate-600">
                        {booking.phone}
                      </td>

                      <td className="px-6 py-5">
                        <h3 className="font-semibold text-slate-900">
                          {booking.tutorName}
                        </h3>
                      </td>

                      <td className="px-6 py-5 text-sm text-slate-600">
                        {booking.email}
                      </td>

                      <td className="px-6 py-5">
                        {booking.currentStatus === "confirmed" ? (
                          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold text-emerald-600">
                            <FaCheckCircle />
                            Confirmed
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-xs font-semibold text-yellow-600">
                            <MdOutlinePlaylistRemove />
                            Cancelled
                          </span>
                        )}
                      </td>

                      <td className="px-6 py-5 text-center">
                        <DeleteAlert id={booking._id} booking={booking} />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-16 text-center text-slate-500"
                    >
                      No booking sessions found.
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
