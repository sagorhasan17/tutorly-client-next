import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

const TutorCard = ({ tutor }) => {
  return (
    <div className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-sm hover:shadow-emerald-100 dark:border-slate-800 dark:bg-slate-900">
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={tutor.photo}
          alt={tutor.tutorName}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-yellow-500 backdrop-blur-md dark:bg-slate-900/90">
          <FaStar className="text-xs" />

          <span>{tutor.rating}</span>
        </div>
        {/* Subject */}
        <div className="absolute bottom-4 left-4">
          <span className="rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
            {tutor.subject}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Price */}
        <div className="flex items-center justify-between">
          <h3 className="line-clamp-1 text-2xl font-black text-slate-900 dark:text-white">
            {tutor.tutorName}
          </h3>
          <h4 className="shrink-0 text-lg font-black text-emerald-600">
            ৳{tutor.hourlyFee}
          </h4>
        </div>

        {/* Institution */}
        <p className="mt-2 line-clamp-1 text-sm font-medium text-slate-500 dark:text-slate-400">
          {tutor.institution}
        </p>

        {/* Location */}
        <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <FaMapMarkerAlt className="shrink-0 text-emerald-500" />
          <span className="line-clamp-1">
            {tutor.area}, {tutor.city}
          </span>
        </div>

        {/* Bottom */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5 dark:border-slate-800">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Experience
            </p>

            <h5 className="mt-1 text-sm font-bold text-slate-700 dark:text-slate-200">
              {tutor.experience}
            </h5>
          </div>

          <Link href={`/teachers/${tutor._id}`}>
            <Button className="h-11 rounded-2xl bg-emerald-500 px-5 text-sm font-semibold text-white transition hover:bg-emerald-600">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
