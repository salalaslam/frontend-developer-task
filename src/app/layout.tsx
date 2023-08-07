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
              {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
