import React, { FunctionComponent } from "react";

import { Container } from "./styles";

export interface CenterProps {
    vertical?: boolean;
    both?: boolean;
}

const Center: FunctionComponent<CenterProps> = (props) => {

    if (props.both) {

        return (
            <Container style={{flexDirection: "row"}}>
                <Container style={{flexDirection: "column"}}>
                    {props.children}
                </Container>
            </Container>
        )

    }

    return (
        <Container style={{flexDirection: props.vertical ? "column" : "row"}}>
            {props.children}
        </Container>
    )
};

export default Center;