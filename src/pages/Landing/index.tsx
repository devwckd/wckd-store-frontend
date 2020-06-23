import React from "react";

import { PageWrapper, TextContainer } from "./styles";

import { Container, LandingText } from "components";

const Landing = () => {
    return (
        <PageWrapper>
            <Container>

                <TextContainer>
                    <LandingText/>
                </TextContainer>

            </Container>
        </PageWrapper>
    )
}

export default Landing;