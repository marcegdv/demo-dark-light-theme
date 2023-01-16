import { blueValues } from "./ColorTheme/Blue";
import { darkValues } from "./ColorTheme/Dark";
import { greenValues } from "./ColorTheme/Green";
import { lightValues } from "./ColorTheme/Light";
import { redValues } from "./ColorTheme/Red";

export const DARK_MODE: string = 'Dark';
export const LIGHT_MODE: string = 'Light';

export type ColorThemeType = {
    name: string,
    backgroundColor: string,
    title: string,
    normalText: string,
};

export type ThemeType = Record<string, ColorThemeType>
export const themes: ThemeType = {
    Dark: darkValues,
    Light: lightValues,
    Red: redValues,
    Green: greenValues,
    Blue: blueValues,
};

export const themeNames = (): Array<string> => {
    return Object.keys(themes);
};

export type ThemeListType =
    | 'Dark'
    | 'Light'
    | 'Red'
    | 'Green'
    | 'Blue'
    ;

export const themeName: Array<string> = [
    'Dark',
    'Light',
    'Red',
    'Green',
    'Blue',
];