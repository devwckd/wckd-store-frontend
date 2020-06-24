import styled from "styled-components";
import { ThemeProps } from "theme";
import { Link } from "react-router-dom";

import hotExample from "assets/hot-example.jpg";

export const Container = styled.div`
  width: 100%;
  min-height: 100px;
  background: rgb(30, 30, 30);
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, .05);
  transition: .2s ease;
  
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, .05);
  }
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

export const Details = styled.div`
  margin: 20px 0;
  display: flex;
`;

export const NameContainer = styled.div<ThemeProps<HTMLDivElement>>`
  color: ${props => props.theme.color.landing.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  flex: 0 1 170px;
`;

export const PriceContainer = styled.div<ThemeProps<HTMLDivElement>>`
  flex: 1 0 auto;
  text-align: right;
  color: ${props => props.theme.color.landing.text.primary};
  font-weight: 800;
`;

export const InfoButton = styled(Link)<ThemeProps<HTMLDivElement>>`
  color: ${props => props.theme.color.landing.text.secondary};
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: .2s ease;
  
  &:hover {
    filter: brightness(.8);
  }
`;