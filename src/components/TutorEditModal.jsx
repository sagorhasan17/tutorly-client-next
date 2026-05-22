"use client";
import { updateTeacher } from "@/lib/fetchData";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaEdit } from "react-icons/fa";

const TutorEditModal = ({ tutor }) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    await updateTeacher(tutor._id, data);
    window.location.reload();
  };
  return (
    <Modal>
      <Button
        size="sm"
        className="rounded-xl bg-blue-500 text-white hover:bg-blue-600"
      >
        <FaEdit />
        Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaEdit className="size-5" />
              </Modal.Icon>
              <Modal.Heading className="text-center text-2xl font-bold">
                Edit Tutor Details
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-5">
                  {/* Tutor Name */}
                  <TextField
                    defaultValue={tutor?.tutorName}
                    className="w-full"
                    name="tutorName"
                    type="text"
                    variant="secondary"
                    isRequired
                  >
                    <Label>Tutor Name</Label>

                    <Input
                      placeholder="Enter tutor name"
                      className="rounded-2xl"
                    />
                  </TextField>

                  {/* Subject */}
                  <TextField
                    defaultValue={tutor?.subject}
                    className="w-full"
                    name="subject"
                    type="text"
                    variant="secondary"
                    isRequired
                  >
                    <Label>Subject</Label>

                    <Input
                      placeholder="Enter subject"
                      className="rounded-2xl"
                    />
                  </TextField>

                  {/* Start Time */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Start Time
                    </label>

                    <input
                      defaultValue={tutor?.startTime}
                      type="time"
                      name="startTime"
                      required
                      className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                    />
                  </div>

                  {/* End Time */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      End Time
                    </label>

                    <input
                      defaultValue={tutor?.endTime}
                      type="time"
                      name="endTime"
                      required
                      className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                    />
                  </div>

                  {/* Hourly Fee */}
                  <TextField
                    defaultValue={tutor?.hourlyFee}
                    className="w-full"
                    name="hourlyFee"
                    type="number"
                    variant="secondary"
                    isRequired
                  >
                    <Label>Hourly Fee</Label>

                    <Input
                      placeholder="Enter hourly fee"
                      className="rounded-2xl"
                    />
                  </TextField>

                  {/* Total Slots */}
                  <TextField
                    defaultValue={tutor?.totalSlots}
                    className="w-full"
                    name="totalSlots"
                    type="number"
                    variant="secondary"
                    isRequired
                  >
                    <Label>Total Slots</Label>

                    <Input
                      placeholder="Enter total slots"
                      className="rounded-2xl"
                    />
                  </TextField>

                  {/* Buttons */}
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      slot="close"
                      className="bg-emerald-500 text-white hover:bg-emerald-600"
                    >
                      Update Tutor
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default TutorEditModal;
