import { ReactNode, createElement } from "react";
import classNames from "classnames";
import { ValueStatus } from "mendix";
import { hot } from "react-hot-loader/root";
import { FieldSetContainerProps } from "../typings/FieldSetProps";

const getLegend = (text: string, renderMode: string): ReactNode => {
    return createElement("legend", {}, createElement(renderMode, {}, text));
};

const FieldSet = (props: FieldSetContainerProps): ReactNode => {
    const { caption, content, renderMode } = props;
    const legend = caption?.status === ValueStatus.Available ? getLegend(caption.value, renderMode) : null;
    return (
        <fieldset className={classNames("widget-field-set", props.class)} style={props.style}>
            {legend}
            {content}
        </fieldset>
    );
};

export default hot(FieldSet);
