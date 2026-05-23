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
    <footer className="mt-20 border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 shadow-lg shadow-emerald-500/20">
                <FaChalkboardTeacher className="text-lg text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                  Tutorly
                </h2>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Learn From Experts
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Tutorly helps students connect with experienced tutors and book
              learning sessions easily from anywhere.
            </p>
            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-emerald-500 hover:bg-emerald-500 hover:text-white dark:border-slate-700 dark:text-slate-300"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-emerald-500 hover:bg-emerald-500 hover:text-white dark:border-slate-700 dark:text-slate-300"
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-emerald-500 hover:bg-emerald-500 hover:text-white dark:border-slate-700 dark:text-slate-300"
              >
                <FaTwitter />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-emerald-500 hover:bg-emerald-500 hover:text-white dark:border-slate-700 dark:text-slate-300"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href="/"
                  className="text-sm text-slate-600 transition hover:text-emerald-500 dark:text-slate-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link href="/teachers"
                  className="text-sm text-slate-600 transition hover:text-emerald-500 dark:text-slate-400"
                >
                  Teachers
                </Link>
              </li>

              <li>
                <Link
                  href="/my-bookings"
                  className="text-sm text-slate-600 transition hover:text-emerald-500 dark:text-slate-400"
                >
                  My Bookings
                </Link>
              </li>

              <li>
                <Link
                  href="/profile"
                  className="text-sm text-slate-600 transition hover:text-emerald-500 dark:text-slate-400"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-600 transition hover:text-emerald-500 dark:text-slate-400"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm text-slate-600 transition hover:text-emerald-500 dark:text-slate-400"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-slate-600 transition hover:text-emerald-500 dark:text-slate-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="text-sm text-slate-600 transition hover:text-emerald-500 dark:text-slate-400"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Start Learning
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Discover expert tutors and start your personalized learning
              journey today.
            </p>

            <Link
              href="/teachers"
              className="mt-6 inline-flex items-center rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              Find Tutors
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row dark:border-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © 2026 Tutorly. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-sm text-slate-500 transition hover:text-emerald-500 dark:text-slate-400"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="text-sm text-slate-500 transition hover:text-emerald-500 dark:text-slate-400"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="text-sm text-slate-500 transition hover:text-emerald-500 dark:text-slate-400"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
