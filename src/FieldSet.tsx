import { ReactNode, createElement } from "react";
import { ValueStatus } from "mendix";
import { hot } from "react-hot-loader/root";
import { FieldSetContainerProps } from "../typings/FieldSetProps";

const FieldSet = (props: FieldSetContainerProps): ReactNode => {
    const legend = props.caption?.status === ValueStatus.Available ? <legend>{props.caption.value}</legend> : null;
    return (
        <fieldset>
            {legend}
            {props.content}
        </fieldset>
    );
};

export default hot(FieldSet);
