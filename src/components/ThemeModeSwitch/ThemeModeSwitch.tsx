import useTheme from "../../hooks/useTheme";
import styles from "./ThemeModeSwitch.styles";

export type ThemeModeSwitchProps = {
    checked?: boolean,
};

const ThemeModeSwitch = (
    props: {
        checked?: boolean,
    },
): JSX.Element => {
    const { themeState, toggleTheme } = useTheme();

    const handleOnChange = (): void => {
        toggleTheme();
    };

    return (
        <div className={styles.container(themeState)}>
            <input
                type='checkbox'
                onChange={handleOnChange}
            />
            Está en modo: {themeState.name}
        </div>
    );
};

export default ThemeModeSwitch;