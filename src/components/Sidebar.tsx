import { AiOutlinePlus } from "react-icons/ai";

import NavItem from "./NavItem";
import ToggleTheme from "./ToggleTheme";
import Button from "./Button";

import { cn } from "../utils";
import useMarkdownStore from "../store/useMarkdown";

interface SidebarProps {
  isMenuOpen: boolean;
}

const Sidebar = ({ isMenuOpen }: SidebarProps) => {
  const markdownFiles = useMarkdownStore((state) => state.markdownFiles);
  const createNewDoc = useMarkdownStore((state) => state.createNewMarkdownDoc);

  return (
    <aside
      className={cn(
        "bg-tertiary w-72 fixed flex flex-col top-0 h-full transition duration-500 pt-8 px-6",
        isMenuOpen ? "left-0 translate-x-0" : "-left-72 -translate-x-[100%]"
      )}
    >
      <div>
        <h2 className="uppercase text-gray-300 mb-8">My documents</h2>
      </div>
      <Button className="mb-4 w-full h-fit" onClick={() => createNewDoc()}>
        <AiOutlinePlus size={15} className="text-white" />
        <span className="capitalize">New document</span>
      </Button>

      <div className="max-h-96 h-full overflow-y-auto">
        <ul className="flex flex-col gap-4">
          {markdownFiles.map((item) => (
            <NavItem key={item.id} data={item} />
          ))}
        </ul>
      </div>

      <ToggleTheme />
    </aside>
  );
};

export default Sidebar;
