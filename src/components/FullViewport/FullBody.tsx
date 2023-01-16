import useTheme from "../../hooks/useTheme";

// export type FullBodyAlign = 'start' | 'center' | 'end';
export type FullBodyProps = {
    // verticalAlign?: FullBodyAlign,
    // horizontalAlign?: FullBodyAlign,
    // direction?: 'row' | 'column',
    children?: React.ReactNode,
};

const FullViewport = (
    props: {
        // verticalAlign?: FullBodyAlign,
        // horizontalAlign?: FullBodyAlign,
        // direction?: 'row' | 'column',
        children?: React.ReactNode,
    },
): JSX.Element => {
    // const { verticalAlign, horizontalAlign, direction, children } = props;
    const { children } = props;
    // let display: any = {};
    // if (verticalAlign || horizontalAlign || direction) {
    //     display.display = 'flex';
    //     display.flexDirection= direction;
    //     display.justifyContent= verticalAlign;
    //     display.alignItems= horizontalAlign;
    // };
    const { themeState } = useTheme();
    return (
        <div style={{
            backgroundColor: themeState.backgroundColor,
            color: themeState.title,
            width: '100%',
            minHeight: '100vh',
            overflow: 'auto'
        }}>
            {/* <div style={{
                width: '100%',
                minHeight: '100vh',
                overflow: 'auto',
            }}>
                {children}
            </div> */}
            {children}
        </div>
    );
};

export default FullViewport;