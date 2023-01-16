import styles from "./SpaceBetween.styles";

export type SpaceBetweenAlign = 'start' | 'center' | 'end';
export type SpaceBetweenProps = {
    children?: JSX.Element | JSX.Element[],
};

const SpaceBetween = (
    props: {
        alignItems: SpaceBetweenAlign,
        direction: 'row' | 'column',
        children?: JSX.Element | JSX.Element[],
    },
): JSX.Element => {
    const { direction, alignItems } = props;

    return (
        <div className={styles.container({alignItems, direction})}>
            {props.children}
        </div>
    );
};

export default SpaceBetween;