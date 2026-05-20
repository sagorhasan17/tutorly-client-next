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
    <section className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-600">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900">
            What Students Say
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-500">
            Thousands of students trust Tutorly to improve their learning
            experience with expert teachers.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-100"
            >
              <div className="absolute right-6 top-6 text-emerald-100 transition group-hover:text-emerald-200">
                <FaQuoteRight className="text-5xl" />
              </div>

              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-1 text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-500">
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
