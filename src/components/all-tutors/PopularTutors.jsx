import { getPopularTutors } from "@/lib/fetchData";
import TutorCard from "../TutorCard";

const PopularTutors = async () => {
  const allTutorsRes = await getPopularTutors();

  return (
    <section className="py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-600">
            Popular Tutors
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900">
            Learn From Top Rated Tutors
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-500">
            Discover highly rated tutors trusted by thousands of students across
            Bangladesh.
          </p>
        </div>

        {/* Tutors Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {allTutorsRes.map((tutor) => (
            <TutorCard key={tutor._id} tutor={tutor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTutors;
