import { useEffect, useState } from "react";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";
import Switch from "react-switch";

import { useTheme } from "../hooks/useTheme";

const ToggleTheme = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setChecked(theme === "light" ? true : false);
  }, [theme]);

  const handleToggle = () => {
    setChecked((prev) => !prev);
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div className="flex items-center gap-4 mt-auto mb-4">
      <AiOutlineMoon className="text-white" />
      <Switch
        checked={checked}
        handleDiameter={15}
        onChange={handleToggle}
        onColor="#e46643"
        offColor="#555"
        checkedIcon={false}
        uncheckedIcon={false}
      />
      <AiOutlineSun className="text-white" />
    </div>
  );
};

export default ToggleTheme;
