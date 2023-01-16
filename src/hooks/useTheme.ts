import { useContext } from "react";
import { ThemeContext, ThemeContextProps } from "../Context/Theme/ThemeContext";

const useTheme = (): ThemeContextProps => {

    const { themeState, toggleTheme, setTheme } = useContext(ThemeContext);

    return { themeState, toggleTheme, setTheme };

};

export default useTheme;