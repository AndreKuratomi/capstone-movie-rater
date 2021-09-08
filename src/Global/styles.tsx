import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    red: {
      500: "rgba(193, 27, 27, 1)",
      800: "rgba(69, 8, 8, 1)",
    },
    fontColor: {
      white100: "rgba(255, 255, 255, 1)",
      pinkLight: "C6AFC2",
      black800: "#131313",
    },
    gray: {
      500: "rgba(91, 91, 91, 0.67)",
    },
    black: {
      transparent500: "rgba(0, 0, 0, 0.5)",
      transparent800: "rgba(0, 0, 0, 0.51)",
    },
    brown: {
      dark: "rgba(29, 22, 22, 0.8)",
    },
    fonts: {
      rounded1C: "font-family: 'M PLUS Rounded 1c', sans-serif;",
      ptMono: "font-family: 'PT Mono', monospace;",
      inder: "Inder, sans-serif",
    },
  },
});
