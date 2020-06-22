import styled from "styled-components";
import {ThemeProps} from "../theme";

export const Container = styled.div<ThemeProps<HTMLDivElement>>`
  max-width: ${props => props.theme.size.container};
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
`