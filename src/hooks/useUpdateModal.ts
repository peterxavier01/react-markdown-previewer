import { create } from "zustand";

interface UpdateModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useUpdateModal = create<UpdateModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useUpdateModal;
