"use client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useState } from "react";
import { IoMdDoneAll } from "react-icons/io";
import { toast } from "react-toastify";

const UpdateModal = ({ tutor, user }) => {
  const [loading, setLoading] = useState(false);
  const bookingInfo = {
    name: user?.name,
    email: user?.email,
    tutorName: tutor?.tutorName,
    tutorId: tutor?._id,
    subject: tutor?.subject,
    teachingMode: tutor?.teachingMode,
    availableDays: tutor?.availableDays,
    startTime: tutor?.startTime,
    endTime: tutor?.endTime,
    hourlyFee: tutor?.hourlyFee,
    totalSlots: tutor?.totalSlots,
    sessionStartDate: tutor?.sessionStartDate,
    sessionEndDate: tutor?.sessionEndDate,
    institution: tutor?.institution,
    experience: tutor?.experience,
    area: tutor?.area,
    city: tutor?.city,
    contact: tutor?.contact,
    qualification: tutor?.qualification,
    bio: tutor?.bio,
    currentStatus: "confirmed",
    bookingTime: new Date(),
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(e.currentTarget);
      const modalData = Object.fromEntries(formData.entries());
      const finalBookingData = {
        ...bookingInfo,
        tutorId: tutor?._id,
        ...modalData,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalBookingData),
        },
      );
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message, {
          autoClose: 3000,
        });
        return;
      }
      toast.success(data.message, {
        autoClose: 3000,
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", {
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal>
      <Button
        disabled={tutor?.totalSlots <= 0}
        className={`rounded-2xl text-sm font-semibold text-white ${
          tutor?.totalSlots > 0
            ? "bg-emerald-500 hover:bg-emerald-600"
            : "cursor-not-allowed bg-gray-400"
        }`}
      >
        {tutor?.totalSlots > 0 ? "Book Now" : "Fully Booked"}
      </Button>

      {tutor?.totalSlots > 0 && (
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <IoMdDoneAll className="size-5" />
                </Modal.Icon>

                <Modal.Heading className="text-center text-3xl font-bold">
                  Book Session
                </Modal.Heading>
              </Modal.Header>

              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <TextField
                      defaultValue={user?.name}
                      className="w-full"
                      name="name"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Name</Label>

                      <Input placeholder="Enter your name" />
                    </TextField>

                    <TextField
                      defaultValue={tutor?.tutorName}
                      className="w-full"
                      name="tutorName"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Tutor Name</Label>

                      <Input placeholder="Enter tutor name" />
                    </TextField>

                    <TextField
                      className="w-full"
                      name="phone"
                      type="tel"
                      variant="secondary"
                    >
                      <Label>Phone</Label>

                      <Input placeholder="+8801xxxxxxxx" />
                    </TextField>

                    <TextField
                      defaultValue={user?.email}
                      className="w-full"
                      name="email"
                      type="email"
                      variant="secondary"
                    >
                      <Label>Email</Label>

                      <Input placeholder="Enter your email" />
                    </TextField>

                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>

                      <Button type="submit" disabled={loading}>
                        {loading ? "Booking..." : "Book Session"}
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      )}
    </Modal>
  );
};

export default UpdateModal;
