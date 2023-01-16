import useTheme from "../../hooks/useTheme";
import styles from "./Description.styles";

const Description = (
    props: {
        text: string,
        align?: 'left' | 'center' | 'right';
    },
): JSX.Element => {
    const { themeState } = useTheme();
    const align: string = props.align || 'left';
    return (
        <div className={styles.container(themeState, align)}>
            {props.text}
        </div>
    );
};

export default Description;