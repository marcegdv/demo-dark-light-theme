import styles from "./Container.styles";

const Container = (
    props: {
        children?: React.ReactNode,
        styles?: any,
    },
): JSX.Element => {
    return (
        <div
            className={styles.container}
            style={{ ...props?.styles }}
        >
            {props.children}
        </div>
    );
};

export default Container;