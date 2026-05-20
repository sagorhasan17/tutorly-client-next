import {
    FaCalendarAlt,
    FaChalkboardTeacher,
    FaLaptopCode,
    FaStar,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaChalkboardTeacher />,
    title: "Expert Teachers",
    description:
      "Learn from experienced and verified teachers across multiple subjects.",
  },

  {
    id: 2,
    icon: <FaCalendarAlt />,
    title: "Flexible Booking",
    description:
      "Book classes anytime according to your preferred schedule easily.",
  },

  {
    id: 3,
    icon: <FaLaptopCode />,
    title: "Online Learning",
    description:
      "Join live interactive classes from anywhere with smooth online sessions.",
  },

  {
    id: 4,
    icon: <FaStar />,
    title: "Trusted Platform",
    description:
      "Thousands of students trust Tutorly for quality education and mentoring.",
  },
];

const WhyChooseTutorly = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-600">
            Why Choose Tutorly
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900">
            Smarter Learning Starts Here
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-500">
            Tutorly helps students connect with expert mentors and enjoy a
            flexible, modern learning experience.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group rounded-[2rem] border border-slate-200 bg-white p-8 transition hover:-translate-y-2 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-100"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-2xl text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTutorly;
