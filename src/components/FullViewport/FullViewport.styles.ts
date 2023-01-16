import { style } from "typestyle";
import { ColorThemeType } from "../../Context/Theme/ThemeColors";

const styles = {
    container: (theme: ColorThemeType): string => style({
        width: '100%',
        minHeight: '100vh',
        overflow: 'auto',
        backgroundColor: theme.backgroundColor,
    })
};

export default styles;