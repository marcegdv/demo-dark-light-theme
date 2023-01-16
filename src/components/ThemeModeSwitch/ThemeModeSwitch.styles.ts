import { style } from "typestyle";
import { ColorThemeType } from "../../Context/Theme/ThemeColors";

const styles = {
    container: (theme: ColorThemeType): string => style({
        color: theme.normalText,
    })
};

export default styles;