import React, { FunctionComponent } from "react";

import { Author, Container, Image, Padding, Title } from "./styles";

const HotProduct: FunctionComponent<{ spaceTop?: string }> = (props) => {
    return (
        <Container style={{marginTop: props.spaceTop ? props.spaceTop : "0"}}>
            <Padding>

                <Title>
                    WckdFactions<br/>
                    <Author>por devwckd.</Author>
                </Title>

                <Image/>

            </Padding>
        </Container>
    )
};

export default HotProduct;