import useTheme from "../../hooks/useTheme";
import styles from "./FullViewport.styles";

export type FullBodyProps = {
    children?: React.ReactNode,
};

/**
 * FullViewport
 * @param props 
 * @returns 
 */
const FullViewport = (props: FullBodyProps): JSX.Element => {
    const { children } = props;
    const { themeState } = useTheme();
    return (
        <div className={styles.container(themeState)}>
            {children}
        </div>
    );
};

export default FullViewport;