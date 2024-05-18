import { useEffect, useState } from "react";
import useMarkdownStore from "../store/useMarkdown";

import SectionHeader from "./SectionHeader";
import { cn } from "../utils";

const Editor = () => {
  const activeMarkdown = useMarkdownStore((state) => state.activeMarkdown);
  const updateActiveMarkdownContent = useMarkdownStore(
    (state) => state.updateActiveMarkdownContent
  );
  const setShowPreview = useMarkdownStore((state) => state.setShowPreview);
  const showPreview = useMarkdownStore((state) => state.showPreview);

  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);
  const isMobile = screenSize < 640;

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateActiveMarkdownContent(e.target.value);
  };

  return (
    <div
      className={cn(
        "transition-transform duration-500 h-full md:w-1/2",
        showPreview ? "w-0 md:w-0" : "w-full md:w-1/2"
      )}
    >
      <SectionHeader
        title="Markdown"
        isIcon={isMobile ? true : false}
        onClick={() => setShowPreview()}
      />
      <div className="h-full">
        <textarea
          title="markdown editor"
          id="editor"
          className="w-full min-h-screen resize-none h-full transition duration-300 bg-white scroll-bar-width dark:bg-main-dark outline-none caret-highlight-primary p-4 dark:bg-emerald-600"
          value={activeMarkdown.content}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Editor;
