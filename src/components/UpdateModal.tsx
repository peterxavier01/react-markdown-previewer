import { useState } from "react";

import Button from "./Button";
import Modal from "./Modal";

import useUpdateModal from "../hooks/useUpdateModal";
import useMarkdownStore from "../store/useMarkdown";

const UpdateModal = () => {
  const [input, setInput] = useState("");
  const isOpen = useUpdateModal((state) => state.isOpen);
  const onClose = useUpdateModal((state) => state.onClose);

  const updateDocTitle = useMarkdownStore(
    (state) => state.updateActiveMarkdownTitle
  );
  const activeMarkdown = useMarkdownStore((state) => state.activeMarkdown);
  console.log(activeMarkdown);

  const handleUpdateDocTitle = () => {
    updateDocTitle(activeMarkdown.title, input);
    window.location.href = input;
    onClose();
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        modalLabel="Delete Markdown Document Modal"
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Document name here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="px-4 py-2 rounded mb-4 w-full outline-none text-slate-800"
          />
          <Button
            className="w-full text-center justify-center py-3"
            onClick={handleUpdateDocTitle}
          >
            Update
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default UpdateModal;
