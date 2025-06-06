/** @type {import('tailwindcss').Config} */
import nativewindPreset from "nativewind/preset";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [nativewindPreset],
  theme: {
    extend: {
      colors: {
        retorno: "#FF641999",
        primeiraconsulta: "#BFB5FF",
        vacinacao: "#AAE1FF",
        checkup: "#9CFF95",
        historico: "#F0F0F0",
        btfiltro: "#F0F0F0",
        verdebarra: "#50E678",
      },

      fontFamily: {
        sf: ['"SF Pro Display"', "sans-serif"],
        barlowThin: ["Barlow_100Thin"],
        barlowLight: ["Barlow_300Light"],
        barlowRegular: ["Barlow_400Regular"],
        barlowMedium: ["Barlow_500Medium"],
        barlowSemiBold: ["Barlow_600SemiBold"],
        barlowBold: ["Barlow_700Bold"],
        barlowExtraBold: ["Barlow_800ExtraBold"],
        barlowBlack: ["Barlow_900Black"],
      },
    },
  },
  plugins: [],
};
