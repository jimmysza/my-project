module.exports = {
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx,html}",
    "./src/pages_other/**/*.html" // Asegura que Tailwind escanee esta carpeta
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
