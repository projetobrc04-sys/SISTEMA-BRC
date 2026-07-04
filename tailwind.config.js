/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brcBlack: "#050505",
        brcSurface: "#0E0E0E",
        brcSurface2: "#151515",
        brcGraphite: "#1E1E1E",
        brcBorder: "#2B2B2B",
        brcWhite: "#FFFFFF",
        brcOffWhite: "#F5F2EA",
        brcMuted: "#A3A3A3",
        brcChampagne: "#D6B56D",
        brcChampagneSoft: "#E7D3A0",
        brcSuccess: "#22C55E",
        brcWarning: "#F59E0B",
        brcDanger: "#EF4444",
        brcInfo: "#94A3B8",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
