import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import { useTheme } from "./hooks/useTheme";
import { cn } from "./utils";

function App() {
  const { theme } = useTheme();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        limit={3}
        hideProgressBar={true}
        theme={theme === "dark" ? "dark" : "light"}
      />

      <div className="flex items-start h-full bg-white dark:bg-main-dark text-slate-800 dark:text-gray-300 selection:bg-highlight-primary selection:text-white">
        <Sidebar isMenuOpen={isMenuOpen} />
        <main
          className={cn(
            "w-full transition-transform duration-500",
            isMenuOpen ? "translate-x-72" : "translate-x-0"
          )}
        >
          <Header setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen} />
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
