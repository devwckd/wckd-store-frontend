import React from "react";

import {Container} from "../../layout/grid";
import {IoMdListBox} from "react-icons/all";
import {BigText, Button, ColoredText, PageWrapper, SmallText, TextContainer} from "./styles";

import LandingNavbar from "../../components/dumb/LandingNavbar";

const Landing = () => {
    return (
        <PageWrapper>
            <Container>

                <LandingNavbar/>

                <TextContainer>

                    <ColoredText>
                        wckd - loja de plugins
                    </ColoredText>

                    <BigText>
                        Plugins de qualidade<br/>
                        com suporte!
                    </BigText>

                    <SmallText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
                        Enim, iure, ut. Eveniet, exercitationem, expedita. Sequi.
                    </SmallText>

                    <Button to="">
                        Ver o catálogo <IoMdListBox style={{verticalAlign: "bottom"}} size="16"/>
                    </Button>

                </TextContainer>

            </Container>
        </PageWrapper>
    )
}

export default Landing;