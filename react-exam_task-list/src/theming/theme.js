import { createTheme } from "@mui/material";
import { blueGrey, red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            light: blueGrey[300],
            main: blueGrey[600],
            dark: blueGrey[700],
        },
        secondary: {
            light: '#EFD09E',
            main: '#D4AA7D',
            dark: '#a1815f',
        },
        error: {
            main: red[600],
        },

    },


});

export default theme;
