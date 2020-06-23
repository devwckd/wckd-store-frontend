import React, { FunctionComponent } from "react";

import {Container as ComponentContainer} from "./styles";

export interface ContainerProps {
    flex?: boolean;
}

const Container: FunctionComponent<ContainerProps> = (props) => {
    return (
        <ComponentContainer style={{ display: props.flex ? "flex" : "block" }}>
            {props.children}
        </ComponentContainer>
    )
};

export default Container;