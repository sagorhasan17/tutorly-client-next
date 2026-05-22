"use client";

import { deleteTutor } from "@/lib/fetchData";
import { AlertDialog, Button } from "@heroui/react";

const DeleteTutorAlert= ({tutor}) => {
 const handleDeleteTutor = async () => {
  try {
    const res = await deleteTutor(tutor?._id);
    if (res) {
      window.location.reload();
    }
  } catch (error) {
    console.log(error);
  }
 }


  return (
    <AlertDialog>
      <Button variant="danger">Delete Project</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{tutor?.tutorName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDeleteTutor} slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
export default DeleteTutorAlert;