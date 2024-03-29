/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{svelte,html}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dracula"],
  }
}

