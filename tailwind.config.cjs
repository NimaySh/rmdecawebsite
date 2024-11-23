import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--aw-color-primary)',
          dark: 'var(--aw-color-primary-dark)',
        },
        secondary: {
          DEFAULT: 'var(--aw-color-secondary)',
          dark: 'var(--aw-color-secondary-dark)',
        },
        accent: {
          DEFAULT: 'var(--aw-color-accent)',
          dark: 'var(--aw-color-accent-dark)',
        },
      },
      textColor: {
        default: {
          light: 'var(--aw-color-text-default)',
          dark: 'var(--aw-color-text-default-dark)',
        },
        muted: {
          light: 'var(--aw-color-text-muted)',
          dark: 'var(--aw-color-text-muted-dark)',
        },
      },
      backgroundColor: {
        primary: {
          light: 'var(--aw-bg-primary)',
          dark: 'var(--aw-bg-primary-dark)',
        },
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typographyPlugin],
};
