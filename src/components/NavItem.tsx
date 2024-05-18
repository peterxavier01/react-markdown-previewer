import { Link, useParams } from "react-router-dom";
import { AiOutlineFile } from "react-icons/ai";

import { cn, formatDate } from "../utils";

interface NavItemProps {
  data: {
    id: string;
    lastUpdated: Date;
    title: string;
    content: string;
  };
}

const NavItem = ({ data }: NavItemProps) => {
  const { docName } = useParams();
  const isCurrentFile = data.title === docName;

  return (
    <Link to={`/${data.title}`}>
      <li
        className={cn(
          "list-none rounded flex items-center gap-4 px-4 py-2 hover:bg-white/10 transition",
          isCurrentFile ? "bg-white/10" : ""
        )}
      >
        <div>
          <AiOutlineFile size={20} className="text-white" />
        </div>
        <div>
          <p className="text-gray-400 text-sm">
            {formatDate(data.lastUpdated)}
          </p>
          <p className="text-white">{`${data.title}.md`}</p>
        </div>
      </li>
    </Link>
  );
};

export default NavItem;
