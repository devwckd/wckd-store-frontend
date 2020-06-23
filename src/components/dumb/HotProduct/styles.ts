import styled from "styled-components";
import { ThemeProps } from "theme";

import hotExample from "assets/hot-example.jpg";

export const Container = styled.div`
  width: 100%;
  min-height: 300px;
  background: rgb(30, 30, 30);
  border-radius: 5px;
`;

export const Padding = styled.div`
  padding: 20px;
`;


export const Title = styled.div<ThemeProps<HTMLDivElement>>`
  margin: 20px 0;
  text-align: center;
  color: ${props => props.theme.color.landing.text.primary};
  font-weight: 500;
`;

export const Colored = styled.span<ThemeProps<HTMLSpanElement>>`
  color: ${props => props.theme.color.main};
`;

export const Author = styled.span<ThemeProps<HTMLSpanElement>>`
  color: ${props => props.theme.color.landing.text.secondary};
  font-size: 12px;
`;

export const Image = styled.div`
  width: 100%;
  padding-top: 50%;
  background: url(${hotExample}) center center;
  background-size: cover;
  border-radius: 5px;
`;