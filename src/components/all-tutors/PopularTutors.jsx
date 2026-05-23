import { getPopularTutors } from "@/lib/fetchData";
import TutorCard from "../TutorCard";

const PopularTutors = async () => {
  const allTutorsRes = await getPopularTutors();

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
            Popular Tutors
          </span>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Learn From Top Rated Tutors
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-500 dark:text-slate-400">
            Discover highly rated tutors trusted by thousands of students and
            start learning with confidence from anywhere.
          </p>
        </div>

        {/* Tutors Grid */}
        {allTutorsRes.length > 0 ? (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {allTutorsRes.map((tutor) => (
              <TutorCard key={tutor._id} tutor={tutor} />
            ))}
          </div>
        ) : (
          <div className="mt-14 flex min-h-80 items-center justify-center rounded-[2rem] border border-dashed border-slate-300 bg-white dark:border-slate-800 dark:bg-slate-900">
            <div className="text-center">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                No Popular Tutors Found
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
                Popular tutors will appear here once available.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularTutors;
