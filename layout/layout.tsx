import { createContext, FC, ReactNode, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Box,
  CssBaseline,
  PaletteMode,
  ScopedCssBaseline,
} from "@mui/material";
import { getDesignTokens } from "../styles/Palette/paletter";
import DrawerAppBar from "./navbar";

export interface LayoutInterface {
  children: ReactNode;
}

export const ColorModeContext = createContext({ toggleMode: () => {} });

const Layout: FC<LayoutInterface> = ({ children }): JSX.Element => {
  const [mode, setMode] = useState<PaletteMode>("light");
  const colorMode = useMemo(
    () => ({
      toggleMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DrawerAppBar>{children}</DrawerAppBar>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Layout;
