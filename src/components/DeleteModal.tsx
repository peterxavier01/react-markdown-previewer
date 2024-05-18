import Button from "./Button";
import Modal from "./Modal";

import useDeleteModal from "../hooks/useDeleteModal";
import useMarkdownStore from "../store/useMarkdown";

const DeleteModal = () => {
  const isOpen = useDeleteModal((state) => state.isOpen);
  const onClose = useDeleteModal((state) => state.onClose);

  const activeMarkdown = useMarkdownStore((state) => state.activeMarkdown);
  const deleteDoc = useMarkdownStore((state) => state.deleteActiveMarkdown);

  const handleDelete = () => {
    deleteDoc();
    window.location.href = "/";
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        modalLabel="Delete Markdown Document Modal"
      >
        <h2 className="text-xl font-bold mb-4">Delete this document?</h2>
        <p className="text-gray-300 text-sm leading-6 mb-4">
          Are you sure you want to delete '{activeMarkdown.title}.md' document
          and its contents? This action cannot be reversed.
        </p>
        <Button
          onClick={handleDelete}
          className="w-full text-center justify-center py-3"
        >
          Confirm & Delete
        </Button>
      </Modal>
    </div>
  );
};

export default DeleteModal;
