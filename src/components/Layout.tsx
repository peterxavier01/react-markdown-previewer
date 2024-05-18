import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Editor from "./Editor";
import Previewer from "./Previewer";
import useMarkdownStore from "../store/useMarkdown";

const Layout = () => {
  const { docName } = useParams();
  const activeMarkdown = useMarkdownStore.getState().activeMarkdown;

  useEffect(() => {
    const setActiveMarkdown = useMarkdownStore.getState().setActiveMarkdown;
    setActiveMarkdown(docName);
  }, [docName, activeMarkdown]);

  return (
    <div className="flex min-h-screen w-full overflow-hidden">
      <Editor />
      <Previewer />
    </div>
  );
};

export default Layout;
