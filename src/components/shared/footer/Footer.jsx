import Link from "next/link";
import {
  FaChalkboardTeacher,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-14">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500">
                <FaChalkboardTeacher className="text-lg text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900">Tutorly</h2>

                <p className="text-xs text-slate-500">Learn From Experts</p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              Tutorly helps students connect with experienced teachers and book
              classes easily from anywhere in Bangladesh.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-emerald-500 hover:text-white"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-emerald-500 hover:text-white"
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-emerald-500 hover:text-white"
              >
                <FaTwitter />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-emerald-500 hover:text-white"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li>
                <Link href="/" className="transition hover:text-emerald-500">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/teachers"
                  className="transition hover:text-emerald-500"
                >
                  Teachers
                </Link>
              </li>

              <li>
                <Link
                  href="/classes"
                  className="transition hover:text-emerald-500"
                >
                  Classes
                </Link>
              </li>

              <li>
                <Link
                  href="/bookings"
                  className="transition hover:text-emerald-500"
                >
                  Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Company</h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li>
                <Link
                  href="/about"
                  className="transition hover:text-emerald-500"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-emerald-500"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="transition hover:text-emerald-500"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="transition hover:text-emerald-500"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Start Learning
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              Find the perfect teacher and start your learning journey today.
            </p>

            <Link
              href="/teachers"
              className="mt-5 inline-flex rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-600"
            >
              Find Teachers
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-center sm:flex-row">
          <p className="text-sm text-slate-500">
            © 2026 Tutorly. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-emerald-500">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-emerald-500">
              Terms
            </Link>

            <Link href="/contact" className="hover:text-emerald-500">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
