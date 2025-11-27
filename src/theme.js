import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#2e7d32" },           // accentgroen
    secondary: { main: "#00b8d9" },         // fris blauwgroen
    text: { primary: "#213547", secondary: "#5b6b7b" },
    background: { default: "#f6f8fb", paper: "#ffffff" },
  },
  typography: {
    fontFamily: `system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif`,
    h2: { fontWeight: 800, letterSpacing: 0.2 },
    h4: { fontWeight: 700, letterSpacing: 0.2 },
    body1: { lineHeight: 1.7 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255,255,255,0.75)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          paddingInline: 14,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        },
      },
    },
  },
});
