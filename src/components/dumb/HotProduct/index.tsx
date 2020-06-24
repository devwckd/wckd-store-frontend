import React, { FunctionComponent } from "react";

import { Center } from "components";

import { Author, Container, Details, Image, InfoButton, NameContainer, Padding, PriceContainer } from "./styles";

const HotProduct: FunctionComponent<{ spaceTop?: string }> = (props) => {
    return (
        <Container style={{marginTop: props.spaceTop ? props.spaceTop : "0"}}>
            <Padding>

                <Image/>

                <Details>
                    <NameContainer>
                        WckdFactions<br/>
                        <Author>por devwckd.</Author>
                    </NameContainer>

                    <PriceContainer>
                        <Center vertical>
                            R$110,00
                        </Center>
                    </PriceContainer>
                </Details>

                <Center>
                    <InfoButton to="">Clique aqui para mais informações...</InfoButton>
                </Center>

            </Padding>
        </Container>
    )
};

export default HotProduct;