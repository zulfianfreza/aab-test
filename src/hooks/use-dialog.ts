import { University } from "@/@types";
import { create } from "zustand";

interface DialogStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  university: University | undefined;
  setUniversity: (university: University) => void;
}

const useDialog = create<DialogStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
  university: undefined,
  setUniversity: (university) => set({ university }),
}));

export default useDialog;
