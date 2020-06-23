import React from "react";

import { Header, PageWrapper } from "./styles";

import { Container, HotProducts, LandingText } from "components";

const Landing = () => {
    return (
        <PageWrapper>
            <Container>

                <Header>
                    <LandingText/>
                </Header>

                <HotProducts/>

            </Container>
        </PageWrapper>
    )
}

export default Landing;