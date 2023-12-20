"use client";

import useDialog from "@/hooks/use-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

export default function DialogDetailUniversity() {
  const { isOpen, onClose, onOpen, university } = useDialog();

  const toggleDialog = () => {
    isOpen ? onClose() : onOpen();
  };

  return (
    <Dialog open={isOpen} onOpenChange={toggleDialog}>
      <DialogContent className=" rounded-xl lg:rounded-xl">
        <DialogHeader>
          <DialogTitle>Detail Universitas</DialogTitle>
        </DialogHeader>
        <div className=" mt-4">
          <p>Nama Universitas: {university?.name ?? ""}</p>
          <p>Website: {university?.web_pages[0] ?? ""}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
