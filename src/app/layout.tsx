import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { lightBlue } from "@mui/material/colors";
import * as React from "react";

export const metadata = {
  title: "Next.js App Router + Material UI v5",
  description: "Next.js App Router + Material UI v5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppBar
            position="fixed"
            sx={{
              bgcolor: lightBlue[100],
              border: "3px solid #000",
              color: "#000",
              boxShadow: "8px 8px 0 0 #000",
              mr: 0.5,
              borderRadius: 3,
            }}
            elevation={0}
          >
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                {0} pending todos
              </Typography>
            </Toolbar>
          </AppBar>
          <Box
            component="main"
            sx={{
              bgcolor: "background.default",
              height: "100vh",
            }}
          >
            <Box
              sx={{
                mt: {
                  xs: 8,
                  sm: 9,
                },
                p: 3,
              }}
            >
              {children}
            </Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
