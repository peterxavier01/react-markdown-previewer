import { useParams } from "react-router-dom";
import { AiOutlineSave } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { Flip, toast } from "react-toastify";

import Button from "./Button";
import useMarkdownStore from "../store/useMarkdown";
import useDeleteModal from "../hooks/useDeleteModal";

const ActionBtn = () => {
  const { docName } = useParams();
  const onOpen = useDeleteModal((state) => state.onOpen);

  const saveMarkdown = () => {
    const activeMarkdown = useMarkdownStore.getState().activeMarkdown;
    const saveMarkdown = useMarkdownStore.getState().saveMarkdown;
    saveMarkdown(docName as string, activeMarkdown.content);

    toast.success("File updated successfully", { transition: Flip });
  };

  return (
    <div className="ml-auto flex items-center gap-4 mr-4 h-full py-3">
      <button onClick={onOpen}>
        <MdDeleteOutline size={24} className="text-gray-400" />
      </button>
      <Button onClick={saveMarkdown}>
        <AiOutlineSave size={20} className="text-white" />
        <span className="hidden sm:block capitalize">Save changes</span>
      </Button>
    </div>
  );
};

export default ActionBtn;
