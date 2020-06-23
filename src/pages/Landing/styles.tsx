import styled from "styled-components";
import { ThemeProps } from "theme";

import background from "assets/home-background.png";

export const PageWrapper = styled.div<ThemeProps<HTMLDivElement>>`
  width: 100%;
  min-height: 200vh;
  background: ${props => props.theme.color.landing.background} url(${background}) no-repeat;
  background-size: 100vw auto;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;
