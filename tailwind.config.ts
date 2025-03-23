
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#3A3A3A', // Warmed up dark grey
					foreground: '#F5F5F5', // Soft off-white
					light: '#4A4A4A',
					dark: '#2C2C2C'
				},
				secondary: {
					DEFAULT: '#534b52',
					foreground: '#F5F5F5',
					light: '#635b62',
					dark: '#433b42'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: '#1D3557', // Deep blue accent
					foreground: '#F5F5F5',
					dark: '#15253E',
					light: '#264573'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				light: '#F5F5F5', // Soft off-white
				dark: '#2C2C2C', // Darker charcoal
				bluegray: '#534b52',
				cream: '#e0ddcf',
				offwhite: '#F5F5F5',
				charcoal: '#3A3A3A', // Warmed up dark grey
				highlight: '#D4A373', // Elegant gold accent
				success: '#4a7c59',
				warning: '#d68c45',
				info: '#004AAD', // Deep blue
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'slide-in': {
					from: { transform: 'translateY(20px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-in-right': {
					from: { transform: 'translateX(20px)', opacity: '0' },
					to: { transform: 'translateX(0)', opacity: '1' }
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'scale-subtle': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.03)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.4s ease-out forwards',
				'slide-in': 'slide-in 0.4s ease-out forwards',
				'slide-in-right': 'slide-in-right 0.4s ease-out forwards',
				'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'scale-subtle': 'scale-subtle 2s ease-in-out infinite'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
			},
			boxShadow: {
				'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
				'subtle': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
				'elevation': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
				'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
				'card-hover': '0 8px 16px rgba(0, 0, 0, 0.12)',
				'button': '0 2px 4px rgba(0, 0, 0, 0.1)',
				'button-hover': '0 4px 8px rgba(0, 0, 0, 0.15)',
			},
			letterSpacing: {
				'wider': '0.05em',
				'widest': '0.1em',
			},
			textShadow: {
				'sm': '0 1px 2px rgba(0, 0, 0, 0.1)',
				'md': '0 2px 4px rgba(0, 0, 0, 0.1)',
				'lg': '0 4px 8px rgba(0, 0, 0, 0.1)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
