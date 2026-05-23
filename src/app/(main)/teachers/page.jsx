import SearchAndFilter from "@/components/SearchAndFilter";
import TutorCard from "@/components/TutorCard";
import { getAllTutors } from "@/lib/fetchData";

export const metadata = {
  title: "Tutors",
  description:
    "Tutorly helps students connect with expert mentors and enjoy a flexible, modern learning experience.",
};

const TeachersPage = async ({ searchParams }) => {
  const params = await searchParams;
  const search = params?.search || "";
  const startTime = params?.startTime || "";
  const endTime = params?.endTime || "";
  const allTutorsRes = await getAllTutors(search, startTime, endTime);

  return (
    <section className="min-h-screen bg-slate-50 py-10 dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              Tutor Directory
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Find The Perfect Tutor
            </h1>
            <p className="mt-4 text-base leading-8 text-slate-500 dark:text-slate-400">
              Browse experienced tutors, explore available schedules, and book
              personalized learning sessions with ease.
            </p>
          </div>
          {/* Stats */}
          <div className="flex w-full gap-4 sm:w-auto">
            <div className="flex-1 rounded-[1.5rem] border border-slate-200 bg-white px-6 py-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                {allTutorsRes.length}
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Available Tutors
              </p>
            </div>

            <div className="flex-1 rounded-[1.5rem] border border-slate-200 bg-white px-6 py-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-3xl font-black text-emerald-600">24/7</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Learning Support
              </p>
            </div>
          </div>
        </div>

        {/* Search */}
        <SearchAndFilter />

        {/* Tutors */}
        {allTutorsRes.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {allTutorsRes.map((tutor) => (
              <TutorCard key={tutor._id} tutor={tutor} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-87.5 items-center justify-center rounded-[2rem] border border-dashed border-slate-300 bg-white dark:border-slate-800 dark:bg-slate-900">
            <div className="text-center">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                No Tutors Found
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
                Try searching with another tutor name or different time range.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeachersPage;
