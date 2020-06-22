import React from "react";
import logoImage from "../../../assets/white-logo.png";

import {Container, Logo, SearchBar} from "./styles";


const LandingNavbar = () => {
    return (
        <Container>
            <Logo src={logoImage}/>

            <>
                <SearchBar type="text" placeholder="Pesquisar..."/>
            </>
        </Container>
    );
}

export default LandingNavbar;