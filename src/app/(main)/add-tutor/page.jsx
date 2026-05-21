"use client";

import GlobalLoading from "@/components/shared/GlobalLoading";
import Link from "next/link";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

const availableDays = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

const AddTutorPage = () => {
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // const formData = new FormData(e.currentTarget);
    // const tutorData = {
    //   tutorName: formData.get("tutorName"),
    //   photo: formData.get("photo"),
    //   subject: formData.get("subject"),
    //   teachingMode: formData.get("teachingMode"),
    //   availableDays: formData.getAll("availableDays"),
    //   startTime: formData.get("startTime"),
    //   endTime: formData.get("endTime"),
    //   hourlyFee: formData.get("hourlyFee"),
    //   totalSlots: formData.get("totalSlots"),
    //   sessionStartDate: startDate.toISOString(),
    //   institution: formData.get("institution"),
    //   experience: formData.get("experience"),
    //   area: formData.get("area"),
    //   city: formData.get("city"),
    //   contact: formData.get("contact"),
    //   qualification: formData.get("qualification"),
    //   bio: formData.get("bio"),
    // };

    const formData = new FormData(e.currentTarget);
    const tutorData = Object.fromEntries(formData.entries());

    const res = await fetch(`${process.env.LOCALHOST_URL}/teachers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tutorData),
    });
    if (!res.ok) {
      toast.error("Failed to add tutor. Please try again.", {
        autoClose: 3000,
      });
      setLoading(false);
      return;
    } else {
      toast.success("Tutor added successfully!", { autoClose: 3000 });
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-10 md:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-600">
            Tutor Management
          </span>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Add a New Tutor
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-500">
            Add professional tutors with schedules, subjects, pricing, and
            teaching details.
          </p>
        </div>

        {/*full Form */}
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-100">
          <div className="h-1.5 w-full bg-linear-to-r from-emerald-400 via-emerald-500 to-green-400" />

          <form
            onSubmit={onSubmit}
            className="grid gap-6 p-5 sm:p-8 lg:grid-cols-2 lg:p-10"
          >
            {/* Tutor Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Tutor Name
              </label>

              <input
                type="text"
                name="tutorName"
                placeholder="Enter tutor name"
                required
                className="h-13 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            {/* Tutor Photo */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Tutor Photo URL
              </label>

              <input
                type="url"
                name="photo"
                placeholder="https://i.ibb.co/example.jpg"
                required
                className="h-13 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Subject / Category
              </label>

              <select
                name="subject"
                required
                className="h-13 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              >
                <option value="">Select Subject</option>

                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                <option value="English">English</option>
                <option value="ICT">ICT</option>
                <option value="Programming">Programming</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>
            </div>

            {/* Teaching Mode */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Teaching Mode
              </label>

              <select
                name="teachingMode"
                required
                className="h-13 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              >
                <option value="">Select Mode</option>

                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                <option value="Both">Both</option>
              </select>
            </div>

            {/* Schedule */}
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50/80 p-5 sm:p-6 lg:col-span-2">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Available Schedule
                  </h3>

                  <p className="text-sm text-slate-500">
                    Select available days and teaching time.
                  </p>
                </div>

                <span className="w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-600">
                  Weekly Availability
                </span>
              </div>

              {/* Days */}
              <div className="mt-6">
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Available Days
                </label>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
                  {availableDays.map((day, index) => (
                    <label
                      key={index}
                      className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-600 transition-all hover:border-emerald-400 hover:bg-emerald-50"
                    >
                      <input
                        type="checkbox"
                        name="availableDays"
                        value={day}
                        className="h-4 w-4 accent-emerald-500"
                      />

                      <span>{day}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Time */}
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Start Time
                  </label>

                  <input
                    type="time"
                    name="startTime"
                    required
                    className="h-13 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    End Time
                  </label>

                  <input
                    type="time"
                    name="endTime"
                    required
                    className="h-13 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  />
                </div>
              </div>
            </div>

            {/* Hourly Fee */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Hourly Fee (BDT)
              </label>

              <input
                type="number"
                name="hourlyFee"
                placeholder="500"
                required
                className="h-13 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            {/* Total Slots */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Total Slots
              </label>

              <input
                type="number"
                name="totalSlots"
                placeholder="20"
                required
                className="h-13 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            {/* Session Date */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Session Start Date
              </label>

              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
                dateFormat="dd MMMM yyyy"
                placeholderText="Select session start date"
                className="h-13 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            {/* Institution */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Institution
              </label>

              <input
                type="text"
                name="institution"
                placeholder="Dhaka University"
                required
                className="h-13 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            {/* Experience */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Experience
              </label>

              <input
                type="text"
                name="experience"
                placeholder="5 Years Experience"
                required
                className="h-13 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            {/* Area */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Area
              </label>

              <input
                type="text"
                name="area"
                placeholder="Dhanmondi"
                required
                className="h-13 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            {/* City */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                City
              </label>

              <select
                name="city"
                required
                className="h-13 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              >
                <option value="">Select City</option>

                <option value="Dhaka">Dhaka</option>
                <option value="Chattogram">Chattogram</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Khulna">Khulna</option>
                <option value="Barishal">Barishal</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Mymensingh">Mymensingh</option>
              </select>
            </div>

            {/* Contact */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Contact Number
              </label>

              <input
                type="tel"
                name="contact"
                placeholder="+8801XXXXXXXXX"
                required
                className="h-13 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            {/* Qualification */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Qualification
              </label>

              <input
                type="text"
                name="qualification"
                placeholder="BSc in Mathematics"
                className="h-13 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            {/* Bio */}
            <div className="lg:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Tutor Bio
              </label>

              <textarea
                name="bio"
                rows={6}
                placeholder="Write a short tutor introduction..."
                className="w-full resize-none rounded-3xl border border-slate-200 bg-white p-5 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse gap-4 pt-4 sm:flex-row sm:justify-end lg:col-span-2">
              <Link href="/">
                <button className="h-12 cursor-pointer rounded-2xl border border-slate-200 px-8 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-100">
                  Cancel
                </button>
              </Link>

              <button
                type="submit"
                disabled={loading}
                className="h-12 cursor-pointer rounded-2xl bg-emerald-500 px-8 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-600 disabled:cursor-not-allowed disabled:bg-emerald-300"
              >
                {loading ? "Adding Tutor..." : "Add Tutor"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {loading && <GlobalLoading />}
    </section>
  );
};

export default AddTutorPage;
