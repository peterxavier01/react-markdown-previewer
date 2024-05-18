import { useParams } from "react-router-dom";
import { AiOutlineFile } from "react-icons/ai";

import { truncateText } from "../utils";
import useUpdateModal from "../hooks/useUpdateModal";

const DocTitle = () => {
  const { docName } = useParams();
  const onOpen = useUpdateModal((state) => state.onOpen);

  return (
    <div className="flex items-center gap-4">
      <div onClick={onOpen} className="cursor-pointer">
        <AiOutlineFile size={20} className="text-white" />
      </div>
      <div>
        <p className="text-sm text-gray-400 capitalize hidden sm:block">
          Document name
        </p>
        <p className="text-base font-medium text-white">
          {`${truncateText(docName || "welcome", 10)}.md`}
        </p>
      </div>
    </div>
  );
};

export default DocTitle;
