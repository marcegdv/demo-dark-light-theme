import { createContext } from "react";
import { ColorThemeType } from "./ThemeColors";

export type ThemeContextProps = {
    themeState: ColorThemeType,
    toggleTheme: Function,
    setTheme: Function
};

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);