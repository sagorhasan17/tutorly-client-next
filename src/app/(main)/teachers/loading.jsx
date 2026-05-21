"use client";

import { Spinner } from "@heroui/react";

const RootLoading = () => {
  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <div className="flex flex-col items-center">
        <Spinner size="lg" color="success" />

        <p className="mt-5 text-sm font-medium text-slate-500">
          Loading, please wait...
        </p>
      </div>
    </section>
  );
};

export default RootLoading;
