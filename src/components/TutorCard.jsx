import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

const TutorCard = ({ tutor }) => {
  return (
    <div
      key={tutor._id}
      className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-100"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={tutor.photo}
          alt={tutor.tutorName}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-yellow-500 backdrop-blur-md">
          <FaStar />
          <span>{tutor.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-600">
            {tutor.subject}
          </span>

          <h4 className="text-lg font-black text-emerald-600">
            ৳{tutor.hourlyFee}/hr
          </h4>
        </div>

        <h3 className="mt-5 text-2xl font-bold text-slate-900">
          {tutor.tutorName}
        </h3>

        <p className="mt-2 text-sm text-slate-500">{tutor.institution}</p>

        <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
          <FaMapMarkerAlt className="text-emerald-500" />

          <span>
            {tutor.area}, {tutor.city}
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400">Experience</p>

            <h5 className="text-sm font-semibold text-slate-700">
              {tutor.experience}
            </h5>
          </div>

          <Link href={`/tutors/${tutor._id}`}>
            <Button className="rounded-xl bg-emerald-500 text-sm font-semibold text-white hover:bg-emerald-600">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
