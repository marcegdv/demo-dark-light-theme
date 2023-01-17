import { LIGHT_MODE, ThemeListType, themeNames } from "../Context/Theme/ThemeColors";

export const AppStorage = (isSession?: boolean) => {
    const storage = isSession ? window.sessionStorage : window.localStorage;

    const set = (key: string, value: any): void => {
        storage.setItem(key, JSON.stringify(value))
    };
    const get = (key: string): any => {
        try {
            JSON.parse(storage.getItem(key) || JSON.stringify(''));
        } catch (error) {
            storage.setItem(key, JSON.stringify(''));
        };
        return JSON.parse(storage.getItem(key) || JSON.stringify(''));
    };

    return {
        set: (key: string, value: any): void => set(key, value),
        get: (key: string): any => get(key),

        setTheme: (theme: string): void => set('theme', theme),
        getTheme: (): string => get('theme'),
    };
};

export const validateStorage = (
    key: string,
    expectedValues: Array<any>,
    defaultValue: any
): any => {
    let currentValue: string = AppStorage().get(key);
    const expectedList: Array<string> = [];
    expectedValues.forEach(
        (expectedValue: any) => expectedList.push(expectedValue)
    );
    if (!expectedList.includes(currentValue)) {
        currentValue = defaultValue;
    };
    AppStorage().set(key, currentValue);
    return currentValue;
};

export const validateTheme = (): ThemeListType => {
    return validateStorage('theme', themeNames(), LIGHT_MODE) as ThemeListType;
};