/**
 * This file was generated from FieldSet.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";
import { ReactNode } from "react";

interface CommonProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
}

export interface FieldSetContainerProps extends CommonProps {
    caption?: DynamicValue<string>;
    content: ReactNode;
}

export interface FieldSetPreviewProps {
    class: string;
    style: string;
    styleObject: CSSProperties;
    caption?: string;
    content: ReactNode;
}

export interface VisibilityMap {
    caption: boolean;
    content: boolean;
}
