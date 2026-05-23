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
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
            Why Choose Tutorly
          </span>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Smarter Learning Starts Here
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-500 dark:text-slate-400">
            Tutorly connects students with expert tutors and provides a modern,
            flexible, and engaging learning experience from anywhere.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-100 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-500/20 dark:hover:shadow-none"
            >
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-2xl text-emerald-600 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white dark:bg-emerald-500/10 dark:text-emerald-400">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-black text-slate-900 dark:text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
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
