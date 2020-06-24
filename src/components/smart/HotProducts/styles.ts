import styled from "styled-components";
import { ThemeProps } from "theme";

export const ProductsContainer = styled.div`
  display: flex;
`;

export const ProductContainer = styled.div`
  flex: 0 0 calc(33.3333% - 16.6666666667px);
`;

export const Spacer = styled.div`
  flex: 0 0 25px;
`;

export const TitleContainer = styled.div<ThemeProps<HTMLDivElement>>`
  margin: 50px 0;
  text-align: center;
  color: ${props => props.theme.color.landing.text.primary};
  font-size: 2rem;
`;


export const Top = styled.span`
  display: block;
  font-weight: 400;
`;

export const Bottom = styled.span`
  display: block;
  font-weight: bold;
  line-height: 1.2;
`;

export const MoreContainer = styled.div<ThemeProps<HTMLDivElement>>`
  padding: 20px 0;
  color: ${props => props.theme.color.landing.text.primary};
  font-size: 18px;
`;