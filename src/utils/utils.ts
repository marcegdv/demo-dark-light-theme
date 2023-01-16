import { LIGHT_MODE, ThemeListType } from "../Context/Theme/ThemeColors";

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
    if (!AppStorage().getTheme()) AppStorage().setTheme(LIGHT_MODE);
    return AppStorage().getTheme() as ThemeListType;
};