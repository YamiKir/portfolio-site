// src/styles/fonts/googleSansCode.ts
import localFont from "next/font/local";

export const googleSansCode = localFont({
  src: [
    {
      path: "./Google_Sans_Code/static/GoogleSansCode-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Google_Sans_Code/static/GoogleSansCode-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Google_Sans_Code/static/GoogleSansCode-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});
