/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        // Add other custom colors as needed
      },
      textColor: {
        secondary: 'var(--aw-color-secondary)',
      },
    },
  },
  plugins: [],
}
