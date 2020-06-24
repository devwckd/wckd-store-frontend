import React from "react";

import { Bottom, MoreContainer, ProductContainer, ProductsContainer, Spacer, TitleContainer, Top } from "./styles";
import { Center, HotProduct } from "components";

const HotProducts = () => {
    return (
        <>

            <TitleContainer>
                <Top>
                    Alguns de nossos
                </Top>
                <Bottom>
                    produtos mais vendidos!
                </Bottom>
            </TitleContainer>

            <ProductsContainer>

                <ProductContainer>
                    <HotProduct spaceTop="15px"/>
                </ProductContainer>
                <Spacer/>
                <ProductContainer>
                    <HotProduct/>
                </ProductContainer>
                <Spacer/>
                <ProductContainer>
                    <HotProduct spaceTop="15px"/>
                </ProductContainer>

            </ProductsContainer>

            <MoreContainer>
                <Center>
                    E muito mais...
                </Center>
            </MoreContainer>
        </>
    )
};

export default HotProducts;