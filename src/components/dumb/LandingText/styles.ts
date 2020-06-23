import styled from "styled-components";
import { ThemeProps } from "theme";
import { Link } from "react-router-dom";


export const ColoredText = styled.span<ThemeProps<HTMLSpanElement>>`
  color: ${props => props.theme.color.main};
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 2px;
`;

export const BigText = styled.span<ThemeProps<HTMLSpanElement>>`
  color: ${props => props.theme.color.landing.text.primary};
  font-weight: 800;
  font-size: 4rem;
  line-height: 1.1;
  margin: 15px auto;
  max-width: 700px;
`;

export const SmallText = styled.span<ThemeProps<HTMLSpanElement>>`
  color: ${props => props.theme.color.landing.text.secondary};
  font-weight: 500;
  font-size: 1.17em;
  line-height: 1.2;
  margin: 0 auto;
  max-width: 500px;
`;

export const Button = styled(Link)<ThemeProps<Link>>`
  text-decoration: none;
  font-weight: 500;
  color: ${props => props.theme.color.landing.text.primary};
  margin: 35px auto 0;
  padding: 20px 35px;
  background: ${props => props.theme.color.main};
  letter-spacing: 1px;
  width: fit-content;
  border-radius: 30px;
  transition: .2s ease;
  
  &:hover {
    filter: brightness(.85);
  }
`