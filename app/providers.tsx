"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme, Container } from "@chakra-ui/react";
import { Open_Sans } from "next/font/google";

const headingFont = Open_Sans({
  weight: ["800"],
  subsets: ["latin"],
});

const textFont = Open_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

const theme = extendTheme({
  fonts: {
    heading: headingFont.style.fontFamily,
    body: textFont.style.fontFamily,
  },
  /**
   * Branding colors
   */
  colors: {
    pink: {
      900: "#891b55",
      800: "#af1e65",
      700: "#d41370",
    },
    gray: {
      900: "#212529",
      800: "#495057",
      700: "#5f6368",
      600: "#646c74",
      500: "#49505780",
      400: "#ced4da",
      300: "#dddddd",
      200: "#f1f3f5",
      100: "#f8f9fa",
      50: "#ffffffe6",
    },
  },
  breakpoints: {
    sm: "20em",
    md: "48em",
    lg: "60em",
    xl: "75em",
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Container maxW={["20em", "40em", "40em", "80em"]}>
          {children}
        </Container>
      </ChakraProvider>
    </CacheProvider>
  );
}
