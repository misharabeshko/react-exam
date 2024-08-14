import { createTheme } from "@mui/material";
import { blueGrey, teal } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            light: blueGrey[300],
            main: blueGrey[600],
            dark: blueGrey[700],
        },
        secondary: {
            light: teal[200],
            main: teal[400],
            dark: teal[600],
        },
    },


});

export default theme;
