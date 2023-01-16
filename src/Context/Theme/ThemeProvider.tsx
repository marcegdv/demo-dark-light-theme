import { ThemeContext } from './ThemeContext';
import { themes, ThemeListType, ColorThemeType } from './ThemeColors';
import { useReducer } from 'react';
import { themeReducer } from './ThemeReducer';
import { darkValues } from './ColorTheme/Dark';

const initState: Function = (theme?: ThemeListType): ColorThemeType => {
    if (theme) {
        return themes[theme] as ColorThemeType;
    } else {
        const init: any = Object.assign({}, darkValues);
        Object.keys(init).forEach((key: string) => init[key] = '');
        return init as ColorThemeType;
    };
};

export type ThemeProviderProps = {
    theme?: ThemeListType,
    children: JSX.Element | JSX.Element[],
};

const ThemeModeProvider = ({ children, theme }: ThemeProviderProps): JSX.Element => {

    const [themeState, dispatch] = useReducer(themeReducer, initState(theme));

    const toggleTheme: Function = (): void => {
        dispatch({ type: 'toggleMode', payload: '' })
    };

    const setTheme: Function = (mode: ThemeListType): void => {
        dispatch({ type: 'setTheme', payload: mode })
    };

    return (
        <ThemeContext.Provider value={{
            themeState: themeState,
            toggleTheme,
            setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeModeProvider;