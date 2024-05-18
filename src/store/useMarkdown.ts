import { create } from "zustand";
import { MarkdownFile } from "../types";
import { v4 as uuidv4 } from "uuid";
import { defaultActiveFile, dummyData } from "../utils/data";

interface MarkdownStore {
  showPreview: boolean;
  setShowPreview: () => void;
  markdownFiles: MarkdownFile[];
  setMarkdownFiles: (data: MarkdownFile) => void;
  saveMarkdown: (title: string, content: string) => void;
  activeMarkdown: MarkdownFile;
  updateActiveMarkdownTitle: (prevTitle: string, newTitle: string) => void;
  updateActiveMarkdownContent: (content: string) => void;
  deleteActiveMarkdown: () => void;
  setActiveMarkdown: (title: string | undefined) => void;
  createNewMarkdownDoc: () => void;
}

const storedMarkdownFiles: MarkdownFile[] = JSON.parse(
  localStorage.getItem("MARKDOWN_FILES") as string
);

const useMarkdownStore = create<MarkdownStore>((set) => ({
  showPreview: false,
  
  setShowPreview: () =>
    set((state) => ({
      showPreview: !state.showPreview,
    })),

  markdownFiles: storedMarkdownFiles ? storedMarkdownFiles : dummyData,

  setMarkdownFiles: (data) =>
    set((state) => {
      const newFilesArray = [...state.markdownFiles];
      newFilesArray.push(data);

      return {
        ...state,
        markdownFiles: newFilesArray,
      };
    }),

  saveMarkdown: (title, content) =>
    set((state) => {
      const markToUpdate = state.markdownFiles.find(
        (mark) => mark.title === title
      ) as MarkdownFile;
      // If the markdown file exists, update its content
      if (markToUpdate) {
        markToUpdate.content = content;
        markToUpdate.lastUpdated = new Date();

        // Update the markdownFiles array
        const updatedMarkdownFiles = state.markdownFiles.map((file) =>
          file.title === title ? markToUpdate : file
        );

        // Save the updated array to local storage
        localStorage.setItem(
          "MARKDOWN_FILES",
          JSON.stringify(updatedMarkdownFiles)
        );

        // Update the state
        state.markdownFiles = updatedMarkdownFiles;
      }

      return state;
    }),

  activeMarkdown: defaultActiveFile,

  updateActiveMarkdownTitle: (prevTitle, newTitle) =>
    set((state) => {
      const fileToUpdate = state.markdownFiles.find(
        (mark) => mark.title === prevTitle
      ) as MarkdownFile;

      // If the markdown file exists, update its content
      if (fileToUpdate) {
        fileToUpdate.title = newTitle;
        fileToUpdate.lastUpdated = new Date();

        // Update the markdownFiles array
        const updatedMarkdownFiles = state.markdownFiles.map((file) =>
          file.title === prevTitle ? fileToUpdate : file
        );

        // Save the updated array to local storage
        localStorage.setItem(
          "MARKDOWN_FILES",
          JSON.stringify(updatedMarkdownFiles)
        );

        // Update the state
        state.markdownFiles = updatedMarkdownFiles;
      }

      return state;
    }),

  updateActiveMarkdownContent: (content) =>
    set((state) => ({
      activeMarkdown: {
        ...state.activeMarkdown,
        content: content,
      },
    })),

  deleteActiveMarkdown: () =>
    set((state) => {
      const filteredArray = state.markdownFiles.filter(
        (file) => file.title !== state.activeMarkdown.title
      );

      localStorage.setItem("MARKDOWN_FILES", JSON.stringify(filteredArray));

      return { ...state, markdownFiles: filteredArray };
    }),

  setActiveMarkdown: (title) =>
    set((state) => {
      // Set the active file to defaultActiveFile if title is undefined
      if (!title) {
        return { ...state, activeMarkdown: defaultActiveFile };
      }

      // Find the active file from the markdownFiles array
      let doc = state.markdownFiles.find((file) => file.title === title);
      if (!doc) {
        // If there no file is found, create a new one
        doc = {
          id: uuidv4(),
          title,
          lastUpdated: new Date(),
          content: `# File ${title[0].toUpperCase() + title.slice(1)} \n## New Document
          `,
        };
        state.activeMarkdown = doc; // set the active markdown to the newly created markdown
        state.markdownFiles = [...state.markdownFiles, doc];
      }

      return { ...state, activeMarkdown: doc }; // set the active markdown to the existing markdown
    }),

  createNewMarkdownDoc: () =>
    set((state) => {
      let docName = "untitled";
      let fileId = 1;
      let isFileNameUnique = false;

      while (!isFileNameUnique) {
        isFileNameUnique = true;
        state.markdownFiles.forEach((file) => {
          if (file.title === docName) {
            isFileNameUnique = false;
            docName = `untitled-${fileId++}`;
          }
        });
      }
      const newDoc = {
        id: uuidv4(),
        title: docName,
        lastUpdated: new Date(),
        content: "# New Document",
      };

      localStorage.setItem(
        "MARKDOWN_FILES",
        JSON.stringify([...state.markdownFiles, newDoc])
      );

      return {
        ...state,
        markdownFiles: [...state.markdownFiles, newDoc],
      };
    }),
}));

export default useMarkdownStore;
