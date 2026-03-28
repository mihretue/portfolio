/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      // Color palette - unified design system
      colors: {
        primary: {
          50: '#EEF3FC',
          100: '#D9E4F8',
          200: '#B8CCF2',
          300: '#8AAEEA',
          400: '#6A92E3',
          500: '#4570d8', // Base primary accent (blue)
          600: '#3A5FB8',
          700: '#2F4E98',
          800: '#243D78',
          900: '#1A2D5A',
        },
        secondary: {
          50: '#F5F4FB',
          100: '#E8E5F5',
          200: '#D1CCEB',
          300: '#B5ACDC',
          400: '#9388C9',
          500: '#211b5b', // Base secondary accent (deep purple/navy)
          600: '#1B164C',
          700: '#16123D',
          800: '#110E2E',
          900: '#0C0A1F',
        },
        accent: {
          50: '#EEF3FC',
          100: '#D9E4F8',
          200: '#B8CCF2',
          300: '#8AAEEA',
          400: '#6A92E3',
          500: '#4570d8', // Base accent (matches primary blue)
          600: '#3A5FB8',
          700: '#2F4E98',
          800: '#243D78',
          900: '#1A2D5A',
        },
        neutral: {
          50: '#eaedfc', // Light lavender background
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937', // Base dark
          900: '#111827',
        },
      },
      // Typography tokens
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
        bold: '700',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.05em',
        widest: '0.1em',
      },
      // Spacing scale tokens
      spacing: {
        xs: '0.5rem',   // 8px
        sm: '1rem',     // 16px
        md: '1.5rem',   // 24px
        lg: '2rem',     // 32px
        xl: '3rem',     // 48px
        '2xl': '4rem',  // 64px
        '3xl': '6rem',  // 96px
      },
      // Shadow tokens for elevation
      boxShadow: {
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        button: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'button-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
      },
      // Border radius tokens
      borderRadius: {
        sm: '0.5rem',   // 8px
        md: '0.75rem',  // 12px
        lg: '1rem',     // 16px
        xl: '1.5rem',   // 24px
        '2xl': '2rem',  // 32px
      },
      // Transition duration tokens
      transitionDuration: {
        fast: '150ms',
        base: '300ms',
        slow: '500ms',
      },
    },
  },
  plugins: [],
};

