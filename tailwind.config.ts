//const theme = require("./src/config/theme.json");

const fonts = {
  "font_family": {
    "primary": "open sans",
    "primary_type": "sans-serif",
    "secondary": "Oswald",
    "secondary_type": "sans-serif"
  },
  "font_size": {
    "base": "16",
    "scale": "1.250"
  }
}


let font_base = Number(fonts.font_size.base.replace("px", ""));
let font_scale = Number(fonts.font_size.scale);
let h6 = font_base / font_base;
let h5 = h6 * font_scale;
let h4 = h5 * font_scale;
let h3 = h4 * font_scale;
let h2 = h3 * font_scale;
let h1 = h2 * font_scale;
let fontPrimary, fontPrimaryType, fontSecondary, fontSecondaryType;

// Here is where this setup pulls out font weight etc.
// but it does not seem to do anything with it. We may want
// to add this in the nexjs way ~MP
if (fonts.font_family.primary) {
  fontPrimary = fonts.font_family.primary
    .replace(/\+/g, " ")
    .replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");
  fontPrimaryType = fonts.font_family.primary_type;
}
if (fonts.font_family.secondary) {
  fontSecondary = fonts.font_family.secondary
    .replace(/\+/g, " ")
    .replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");
  fontSecondaryType = fonts.font_family.secondary_type;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,  // !important
  content: [
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/content/**/*.{md,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  // safelist: [{ pattern: /^swiper-/ }],
  
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        // NOTE! The names below resolve to classes, which in turn
        // are referenced in our css. If removed you see "class does
        // not exist" errors.

        text: "#444444", // ==> Class "text-text"
        light: "#717171", // "text-white"
        dark:  "#040404", // "text-dark"
        primary: "#b19777", //"border-primary"
    //  secondary: "",
        body: "#fff", // "bg-body"
        border: "#eaeaea", // "border-border"
        "theme-light": "#b19777", // "bg-theme-light"
    //  "theme-dark": "",        
      },
      fontSize: {
        base: font_base + "px",
        h1: h1 + "rem",
        "h1-sm": h1 * 0.8 + "rem",
        h2: h2 + "rem",
        "h2-sm": h2 * 0.8 + "rem",
        h3: h3 + "rem",
        "h3-sm": h3 * 0.8 + "rem",
        h4: h4 + "rem",
        h5: h5 + "rem",
        h6: h6 + "rem",
      },
      fontFamily: {
        primary: [fontPrimary, fontPrimaryType],
        secondary: [fontSecondary, fontSecondaryType],
      },
    },
  },
  // Add the plugins in if/when needed
  plugins: [
       require("@tailwindcss/typography"), // "prose***" classes
    // require("@tailwindcss/forms"),
    // require("tailwind-bootstrap-grid")({
    //   generateContainer: false,
    //   gridGutterWidth: "2rem",
    //   gridGutters: {
    //     1: "0.25rem",
    //     2: "0.5rem",
    //     3: "1rem",
    //     4: "1.5rem",
    //     5: "3rem",
    //   },
    // }),
  ],
};
