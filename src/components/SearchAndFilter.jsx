"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchAndFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchInput, setSearchInput] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // Clear filters on reload
 useEffect(() => {
  if (window.performance.navigation.type === 1) {
    router.replace("/teachers");
  }
}, [router]);


  // Realtime Search
  const handleSearch = (value) => {
    setSearchInput(value);
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    router.push(`/teachers?${params.toString()}`);
  };

  // Time Filter
  const handleFilter = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (startTime) {
      params.set("startTime", startTime);
    } else {
      params.delete("startTime");
    }
    if (endTime) {
      params.set("endTime", endTime);
    } else {
      params.delete("endTime");
    }
    router.push(`/teachers?${params.toString()}`);
  };

  return (
    <div className="mb-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {/* Search */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
            Search Tutor
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search tutor by name..."
              value={searchInput}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-emerald-500 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:bg-slate-800"
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
        </div>

        {/* Start Time */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
            Start Time
          </label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-emerald-500 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:bg-slate-800"
          />
        </div>

        {/* End Time */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
            End Time
          </label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-emerald-500 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:bg-slate-800"
          />
        </div>

        {/* Filter Button */}
        <div className="flex items-end">
          <button
            type="button"
            onClick={handleFilter}
            className="w-full rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            Filter Time
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
