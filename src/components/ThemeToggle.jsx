import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Tooltip
      title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <IconButton
        onClick={toggleTheme}
        sx={{
          color: "var(--text-primary)",
          "&:hover": {
            backgroundColor: "var(--hover-bg)",
          },
        }}
      >
        {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
