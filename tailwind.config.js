/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bpcc: {
          navy: {
            DEFAULT: "#0B1120", // Deep Navy (Backgrounds)
            light: "#1E293B",   // Lighter Navy (Cards/Footers)
          },
          gold: {
            DEFAULT: "#D97706", // Standard Gold (Accents)
            light: "#F59E0B",   // Hover states
            muted: "#92400E",   // Darker gold for text
          },
          cream: "#F8FAFC",     // Off-white background (Premium Paper feel)
          grey: "#64748B",      // Secondary text (Slate)
        },
      },
      fontFamily: {
        // We will set these variables in layout.tsx
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(180deg, #0B1120 0%, #1E293B 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
      }
    },
  },
  plugins: [],
};