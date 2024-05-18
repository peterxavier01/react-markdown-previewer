import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import useMarkdownStore from "../store/useMarkdown";

interface SectionHeaderProps {
  title: string;
  isIcon?: boolean;
  onClick?: () => void;
}

const SectionHeader = ({ title, isIcon, onClick }: SectionHeaderProps) => {
  const showPreview = useMarkdownStore.getState().showPreview;

  const Icon = !showPreview ? AiOutlineEye : AiOutlineEyeInvisible;

  return (
    <div className="h-10 bg-tertiary flex items-center p-4 text-gray-300 justify-between">
      <p className="uppercase">{title}</p>

      {isIcon ? (
        <Icon size={18} onClick={onClick} className="cursor-pointer" />
      ) : null}
    </div>
  );
};

export default SectionHeader;
