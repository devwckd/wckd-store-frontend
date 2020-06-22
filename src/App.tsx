import React from 'react';
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./layout/globalStyles";
import Routes from "./routes";
import {DefaultTheme} from "./layout/theme";

function App() {
    return (
        <ThemeProvider theme={DefaultTheme}>
            <GlobalStyles/>
            <Routes/>
        </ThemeProvider>
    );
}

export default App;
