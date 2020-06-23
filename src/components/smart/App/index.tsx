import React from 'react';
import { ThemeProvider } from "styled-components";

import { DefaultTheme } from "theme";
import { GlobalStyles } from "./styles";

import { Routes } from "components";

function App() {
    return (
        <ThemeProvider theme={DefaultTheme}>
            <GlobalStyles/>
            <Routes/>
        </ThemeProvider>
    );
}

export default App;
