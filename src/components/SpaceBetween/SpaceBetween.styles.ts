import { style } from "typestyle";
import { SpaceBetweenAlign } from "./SpaceBetween";

type Params = {
    alignItems: SpaceBetweenAlign,
    direction: 'row' | 'column',
}

const styles = {
    container: (params: Params): string => style({
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: params.direction,
        justifyContent: 'space-between',
        alignItems: params.alignItems,
    })
};

export default styles;