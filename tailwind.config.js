/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Mesh Gradient / Aurora Theme - Navy Blue, Purple, Cyan
        'dark-green': '#0a1f14',        // Deeper, richer base
        'medium-green': '#1a3d2e',      // Balanced mid-tone
        'light-green': '#2d5a47',        // Subtle highlight
        'accent-green': '#34d399',       // #34d399 - More vibrant, better contrast (WCAG AA)
        'accent-cyan': '#22d3ee',        // #22d3ee - Modern cyan accent
        'accent-emerald': '#10b981',     // #10b981 - Emerald for depth
        // New Aurora Theme Colors
        'aurora-blue': '#3b82f6',       // #3b82f6 - Electric Blue
        'aurora-purple': '#8b5cf6',      // #8b5cf6 - Electric Purple
        'aurora-cyan': '#06b6d4',       // #06b6d4 - Bright Cyan
        'aurora-deep-blue': '#1e3a8a',   // #1e3a8a - Deep Navy Blue
        'border-green': '#ffffff',
        // Neutral grays with better contrast
        'neutral-50': '#fafafa',
        'neutral-100': '#f5f5f5',
        'neutral-200': '#e5e5e5',
        'neutral-300': '#d4d4d4',
        'neutral-400': '#a3a3a3',
        'neutral-500': '#737373',
        'neutral-600': '#525252',
        'neutral-700': '#404040',
        'neutral-800': '#262626',
        'neutral-900': '#171717',
        'neutral-950': '#0a0a0a',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'fade-in-scale': 'fade-in-scale 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'shimmer-sweep': 'shimmer-sweep 3s ease-in-out infinite',
        'float-premium': 'float-premium 8s ease-in-out infinite',
        'glow-pulse-premium': 'glow-pulse-premium 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(52, 211, 153, 0.4)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(52, 211, 153, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in-scale': {
          from: { opacity: '0', transform: 'scale(0.95) translateY(10px)' },
          to: { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        'shimmer-sweep': {
          '0%': { transform: 'translateX(-100%) translateY(-100%) rotate(45deg)' },
          '100%': { transform: 'translateX(200%) translateY(200%) rotate(45deg)' },
        },
        'float-premium': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-15px) translateX(5px)' },
          '66%': { transform: 'translateY(-8px) translateX(-5px)' },
        },
        'glow-pulse-premium': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.2), 0 0 60px rgba(6, 182, 212, 0.1)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.4), 0 0 90px rgba(6, 182, 212, 0.3)',
          },
        },
      },
    },
  },
  plugins: [],
}
