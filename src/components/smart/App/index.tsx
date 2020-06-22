import React from 'react';
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./styles";
import Routes from "../../../routes";
import {DefaultTheme} from "../../../theme";

function App() {
    return (
        <ThemeProvider theme={DefaultTheme}>
            <GlobalStyles/>
            <Routes/>
        </ThemeProvider>
    );
}

export default App;
