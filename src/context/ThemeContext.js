import React, { useState, useContext } from "react";
import {theme, darkTheme} from '../style/theme';

const Theme = React.createContext();

export function useTheme() {
  return useContext(Theme);
}

export function ThemeContext({ children }) {
  return (
    <Theme.Provider value={theme}>
      {children}
    </Theme.Provider>
  );
}