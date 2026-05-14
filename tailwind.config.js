/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': 'var(--color-brand-primary)',
        'brand-secondary': 'var(--color-brand-secondary)',
        'brand-third': 'var(--color-brand-third)',
        'brand-accent': 'var(--color-brand-accent)',
        'bg-main': 'var(--color-bg-main)',
        'bg-card': 'var(--color-bg-card)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        'text-focus': 'var(--color-text-focus)',
        'border-primary': 'var(--color-border-primary)',
        'border-muted': 'var(--color-border-muted)',
      }
    }
  }
}
