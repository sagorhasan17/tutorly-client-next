import DeleteTutorAlert from "@/components/DeleteTutorAlert";
import TutorEditModal from "@/components/TutorEditModal";
import { auth } from "@/lib/auth";
import { getMyTutors } from "@/lib/fetchData";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";
import { FaUserGraduate } from "react-icons/fa";

const MyTutorsPage = async () => {
  const {token} = await auth.api.getToken({
    headers: await headers(),
  });
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const email = user?.email;
  const myTutors = await getMyTutors(email, token);

  return (
    <section className="min-h-screen bg-slate-50 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
              <FaUserGraduate className="text-3xl" />
            </div>

            <div>
              <h1 className="text-4xl font-black tracking-tight text-slate-900">
                My Tutors
              </h1>

              <p className="mt-2 text-slate-500">
                Manage all tutors added by you.
              </p>
            </div>
          </div>

          <Link href="/add-tutor">
            <Button className="h-12 rounded-2xl bg-emerald-500 px-6 text-sm font-semibold text-white hover:bg-emerald-600">
              Add New Tutor
            </Button>
          </Link>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-100">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="border-b border-slate-200 bg-slate-100">
                <tr>
                  <th className="px-6 py-5 text-left text-sm font-bold text-slate-700">
                    Tutor Name
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold text-slate-700">
                    Subject
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold text-slate-700">
                    Available
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold text-slate-700">
                    Hourly Fee
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold text-slate-700">
                    Total Slots
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold text-slate-700">
                    Registration Date
                  </th>

                  <th className="px-6 py-5 text-center text-sm font-bold text-slate-700">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {myTutors?.length > 0 ? (
                  myTutors.map((tutor) => (
                    <tr
                      key={tutor._id}
                      className="border-b border-slate-100 transition hover:bg-slate-50"
                    >
                      {/* Tutor Name */}
                      <td className="px-6 py-5">
                        <div>
                          <h3 className="font-semibold text-slate-900">
                            {tutor.tutorName}
                          </h3>

                          <p className="mt-1 text-sm text-slate-500">
                            {tutor.city}
                          </p>
                        </div>
                      </td>

                      {/* Subject */}
                      <td className="px-6 py-5">
                        <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold text-emerald-600">
                          {tutor.subject}
                        </span>
                      </td>

                      {/* Available */}
                      <td className="px-6 py-5">
                        <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold text-blue-600">
                          {tutor.startTime} - {tutor.endTime}
                        </span>
                      </td>

                      {/* Hourly Fee */}
                      <td className="px-6 py-5 font-semibold text-slate-700">
                        ৳{tutor.hourlyFee}
                      </td>

                      {/* Total Slots */}
                      <td className="px-6 py-5 text-slate-600">
                        {tutor.totalSlots}
                      </td>

                      {/* Registration Date */}
                      <td className="px-6 py-5 text-slate-600">
                        {new Date(
                          tutor.sessionStartDate,
                        ).toLocaleDateString()}
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-5">
                        <div className="flex items-center justify-center gap-3">
                          {/* <Link href={`/update-tutor/${tutor._id}`}>
                            <Button
                              size="sm"
                              className="rounded-xl bg-blue-500 text-white hover:bg-blue-600"
                            >
                              <FaEdit />
                              Edit
                            </Button>
                            
                          </Link> */}
                          <TutorEditModal tutor={tutor}/>

                          <DeleteTutorAlert tutor={tutor} />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-6 py-16 text-center text-slate-500"
                    >
                      No tutors found.
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

export default MyTutorsPage;

