import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: '#6B21A8', // Roxo principal
          blue: '#2563EB',   // Azul vibrante
          yellow: '#EAB308', // Amarelo mágico
          cyan: '#06B6D4',   // Cyan neon
        },
        secondary: {
          purple: '#9333EA', // Roxo mais claro
          blue: '#3B82F6',   // Azul mais claro
          yellow: '#FCD34D', // Amarelo mais claro
          cyan: '#22D3EE',   // Cyan mais claro
        },
        background: '#1E1B4B', // Fundo escuro roxo
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.primary.cyan), 0 0 20px theme(colors.primary.cyan)',
        'magic': '0 0 15px theme(colors.primary.purple)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}

export default config 