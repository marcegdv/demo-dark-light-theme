import { style } from "typestyle";
import { ColorThemeType } from "../../Context/Theme/ThemeColors";

const styles = {
    container: (theme: ColorThemeType, align: any): string => style({
        backgroundColor: theme.backgroundColor,
        color: theme.normalText,
        padding: '2px 8px',
        fontSize: '24px',
        fontWeight: 'bolder',
        textAlign: align,
    })
};

export default styles;