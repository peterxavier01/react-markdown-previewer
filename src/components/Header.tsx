import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import DocTitle from "./DocTitle";
import ActionBtn from "./ActionBtn";

interface HeaderProps {
  isMenuOpen: boolean;
  setMenuOpen: (isMenuOpen: boolean) => void;
}

const Header = ({ isMenuOpen, setMenuOpen }: HeaderProps) => {
  const NavIcon = isMenuOpen ? AiOutlineClose : AiOutlineMenu;

  return (
    <header className="flex items-center h-[72px] bg-secondary w-full sticky top-0">
      <button
        className="bg-white/5 w-20 h-full flex items-center justify-center mr-6"
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        <NavIcon size={32} className="text-white" />
      </button>

      <div className="flex items-center gap-6 h-full py-3">
        <h1 className="uppercase hidden md:block text-white font-bold text-base tracking-[0.3em]">
          Markdown
        </h1>
        <span className="h-12 w-[2px] bg-gray-300/50 hidden md:block" />
        <DocTitle />
      </div>

      <ActionBtn />
    </header>
  );
};

export default Header;
