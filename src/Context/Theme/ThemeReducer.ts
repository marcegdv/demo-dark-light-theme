import { AppStorage } from "../../utils/utils";
import {
    themes, LIGHT_MODE, DARK_MODE,
    ThemeListType, ColorThemeType,
} from "./ThemeColors";

const actionMap = {
    getMode: 'getMode',
    toggleMode: 'toggleMode',
    setTheme: 'setTheme',
};

type ThemeActionType =
    | { type: 'getMode', payload: '' }
    | { type: 'toggleMode', payload: '' }
    | { type: 'setTheme', payload: ThemeListType }

export const themeReducer = (state: ColorThemeType, action: ThemeActionType): ColorThemeType => {
    const { type, payload } = action;

    const toggleTheme = (): ColorThemeType => {
        const toggleTo: string = (state.name === DARK_MODE)
            ? LIGHT_MODE
            : DARK_MODE;
        const theme: ColorThemeType = { ...themes[toggleTo] };
        AppStorage().setTheme(theme.name);
        return theme;
    };

    const setTheme = (): ColorThemeType => {
        const theme: ColorThemeType = { ...themes[payload] };
        AppStorage().setTheme(theme.name);
        return theme;
    };

    switch (type) {
        case actionMap.toggleMode:
            return toggleTheme();
        case actionMap.setTheme:
            return setTheme();
        case actionMap.getMode:
        default:
            return state;
    };
};