import React from "react";

export interface Theme {

    size: {
        container: string;
    }

    color: {
        main: string;
        landing: {
            background: string;
            content: string;
            text: {
                primary: string;
                secondary: string;
            }
        }
    }

}

export interface ThemeProps<T> extends React.DetailedHTMLProps<React.HTMLAttributes<T>, T>{
    theme: Theme
}

export {default as DefaultTheme} from "./default";
