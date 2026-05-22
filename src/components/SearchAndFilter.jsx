// "use client";

// import { useEffect, useState } from "react";
// import { FaSearch } from "react-icons/fa";

// const SearchAndFilter = () => {
//   const [searchInput, setSearchInput] = useState("");
//   const [teachers, setTeachers] = useState([]);

//   // Realtime Search
//   useEffect(() => {
//     const fetchTeachers = async () => {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/teachers?search=${searchInput}`);
//       const data = await res.json();
//       setTeachers(data);
      
//     };

//     fetchTeachers();
//   }, [searchInput]);
//   console.log(teachers);

//   return (
//     <div>
//       {/* Filter Section */}
//       <div className="mb-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100">
//         <form className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
//           {/* Search */}
//           <div>
//             <label className="mb-2 block text-sm font-semibold text-slate-700">
//               Search Tutor
//             </label>

//             <div className="relative">
//               <input
//                 type="text"
//                 name="search"
//                 placeholder="Search tutor by name..."
//                 value={searchInput}
//                 onChange={(e) => setSearchInput(e.target.value)}
//                 className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:bg-white"
//               />

//               <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
//             </div>
//           </div>

//           {/* Start Date */}
//           <div>
//             <label className="mb-2 block text-sm font-semibold text-slate-700">
//               Start Date
//             </label>

//             <input
//               type="date"
//               name="startDate"
//               className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:bg-white"
//             />
//           </div>

//           {/* End Date */}
//           <div>
//             <label className="mb-2 block text-sm font-semibold text-slate-700">
//               End Date
//             </label>

//             <input
//               type="date"
//               name="endDate"
//               className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:bg-white"
//             />
//           </div>

//           {/* Search Status */}
//           <div className="flex items-end">
//             <div className="w-full rounded-2xl bg-emerald-50 px-5 py-3 text-sm font-medium text-emerald-600">
//               Found {teachers.length} Tutors
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SearchAndFilter;