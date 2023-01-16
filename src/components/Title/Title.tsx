import useTheme from "../../hooks/useTheme";

const Title = (
    props: {
        text: string,
        align?: 'left' | 'center' | 'right';
    },
): JSX.Element => {
    const { themeState } = useTheme();
    const styles = {
        container: {
            backgroundColor: themeState.backgroundColor,
            color: themeState.title,
            padding: '2px 8px',
            fontSize: '24px',
            fontWeight: 'bolder',
            textAlign: props.align || 'left',
        },
    };

    return (
        <div style={styles.container}>
            {props.text}
        </div>
    );
};

export default Title;