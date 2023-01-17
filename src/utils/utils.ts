import { LIGHT_MODE, ThemeListType, themeNames } from "../Context/Theme/ThemeColors";

export const AppStorage = () => {
    const storage = window.localStorage;
    return {
        setTheme: (name: string): void => {
            storage.setItem('theme', name);
        },
        getTheme: (): string => {
            return storage.getItem('theme') || '';
        },
    };
};

export const validateTheme = (): ThemeListType => {
    const last: string = AppStorage().getTheme();
    let theme: string = LIGHT_MODE;
    if (last) {
        const list: string[] = themeNames();
        if (list.includes(last)) {
            theme = last;
        };
    };
    AppStorage().setTheme(theme);
    return theme as ThemeListType;
};