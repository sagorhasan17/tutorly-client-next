"use client";
import { AlertDialog, Button } from "@heroui/react";
import { toast } from "react-toastify";

const DeleteAlert = ({ booking, id }) => {
  const handleCancelBooking = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/cancel/${id}`,
        {
          method: "PATCH",
        },
      );
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
        return;
      }
      toast.success(data.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  // if already cancelled
  if (booking?.currentStatus === "cancelled") {
    return (
      <Button
        disabled
        variant="danger"
        className="cursor-not-allowed opacity-50"
      >
        Cancelled
      </Button>
    );
  }

  return (
    <AlertDialog>
      <Button variant="danger">Cancel Booking</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Cancel booking permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently cancel <strong>{booking?.name}</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Close
              </Button>
              <Button
                slot="close"
                variant="danger"
                onClick={handleCancelBooking}
              >
                Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteAlert;
