"use client";

import { Button } from "@heroui/react";

const BookSessionButton = () => {
  const onSubmit = () => {
    alert("Form submitted");
  };

  return (
    <Button
      onClick={onSubmit}
      className="rounded-2xl bg-emerald-500 text-sm font-semibold text-white hover:bg-emerald-600"
    >
      Book Session
    </Button>
  );
};

export default BookSessionButton;