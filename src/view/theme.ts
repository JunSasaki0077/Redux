import { createTheme } from "@mui/material";
import { blue, blueGrey } from "@mui/material/colors";

export const FLEXIBLE_MAX_WIDTH  = 1366;
export const FLEXIBLE_MIN_WIDTH  = 1025;

const theme = createTheme({
palette: {
    primary: blue,
    secondary:blueGrey
},
components: {
    MuiCssBaseline: {
        styleOverrides: {
            body: {
                minWidth: `${FLEXIBLE_MIN_WIDTH}px`,
                color: "#333333",
                backgroundColor: blueGrey[50],
            },
        },
    },
    MuiButton: {
        styleOverrides:  {
            root: {
                textTransform: "none"
            },
        },
    },
},
});

export default theme;