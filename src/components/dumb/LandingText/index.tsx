import React from "react";
import { IoMdListBox } from "react-icons/all";
import { Strings } from "config";

import { Center } from "components";

import { BigText, Button, ColoredText, SmallText } from "./styles";

const LandingText = () => {
    return (
        <Center vertical>

            <ColoredText>
                {Strings.landing.header.title}
            </ColoredText>

            <BigText>
                {Strings.landing.header.bigText}
            </BigText>

            <SmallText>
                {Strings.landing.header.smallText}
            </SmallText>

            <Button to="">
                {Strings.landing.header.button} <IoMdListBox style={{verticalAlign: "bottom"}} size="16"/>
            </Button>

        </Center>
    )
};

export default LandingText;