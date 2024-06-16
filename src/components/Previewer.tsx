import dompurify from "dompurify";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.min.css";

import useMarkdownStore from "../store/useMarkdown";
import SectionHeader from "./SectionHeader";
import { cn } from "../utils";

const marked = new Marked(
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  })
);

const Previewer = () => {
  const activeMarkdown = useMarkdownStore((state) => state.activeMarkdown);
  const parsedMarkdown = dompurify.sanitize(
    marked.parse(activeMarkdown.content) as string
  );

  const showPreview = useMarkdownStore((state) => state.showPreview);
  const setShowPreview = useMarkdownStore((state) => state.setShowPreview);

  return (
    <div
      className={cn(
        "h-full ml-auto md:border-l border-gray-500  bg-white dark:bg-main-dark transition-cubic duration-300 min-h-screen",
        showPreview ? "w-full md:w-full" : "w-0 md:w-1/2"
      )}
    >
      <SectionHeader title="Preview" isIcon onClick={() => setShowPreview()} />
      <div
        className="h-full min-h-screen px-4 pt-4 pb-10 prose dark:prose-invert prose-h6:text-highlight-secondary prose-code:text-gray-200  prose-a:text-highlight-secondary prose-p:text-[15px] prose-li:text-[15px] prose-li:leading-6 prose-h1:text-[32px] prose-h1:leading-[42px] prose-p:leading-6 prose-code:bg-tertiary prose-pre:bg-tertiary prose-blockquote:border-highlight-primary prose-blockquote:bg-white/10"
        dangerouslySetInnerHTML={{ __html: parsedMarkdown }}
      />
    </div>
  );
};

export default Previewer;
