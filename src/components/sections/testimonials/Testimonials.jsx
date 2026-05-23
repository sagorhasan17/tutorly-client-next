import Image from "next/image";
import { FaQuoteRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Rahman",
    role: "HSC Student",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop",
    review:
      "Tutorly helped me find an amazing Math teacher. The booking process was smooth and the classes were very interactive.",
  },
  {
    id: 2,
    name: "Rakib Hasan",
    role: "University Student",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop",
    review:
      "I improved my English speaking skills within a few months. The teachers are really supportive and professional.",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "Web Development Learner",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=687&auto=format&fit=crop",
    review:
      "The platform looks modern and booking live sessions is super easy. Highly recommended for online learning.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
            Testimonials
          </span>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            What Students Say
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-500 dark:text-slate-400">
            Thousands of students trust Tutorly to improve their learning
            experience with expert teachers and flexible online sessions.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-100 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-500/20 dark:hover:shadow-none"
            >
              {/* Quote */}
              <div className="absolute right-6 top-6 text-emerald-100 transition group-hover:text-emerald-200 dark:text-emerald-500/10">
                <FaQuoteRight className="text-5xl" />
              </div>

              {/* User */}
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-emerald-100 dark:border-emerald-500/20">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="mt-6 flex items-center gap-1 text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Review */}
              <p className="mt-5 text-sm leading-8 text-slate-600 dark:text-slate-400">
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
