import TutorCard from "@/components/TutorCard";
import { getAllTutors } from "@/lib/fetchData";

export const metadata = {
  title: "Tutors",
  description:
    "Tutorly helps students connect with expert mentors and enjoy a flexible, modern learning experience.",
};

const TeachersPage = async () => {
  const allTutorsRes = await getAllTutors();

  return (
    <section className="min-h-screen bg-slate-50 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tutors */}
        <div className="mt-6">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-black text-slate-900">
                All The Available Tutors
              </h2>

              <p className="mt-2 text-slate-500">
                {allTutorsRes.length} tutors available for booking.
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {allTutorsRes.map((tutor) => (
              <TutorCard key={tutor._id} tutor={tutor} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersPage;
