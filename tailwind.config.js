import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
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
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
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
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
        fontFamily: {
            anton: ['"Anton"', 'sans-serif'],
        },
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: 0
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: 0
  				}
  			},
            shine: {
                '0%': { transform: 'translateX(-100%)' },
                '100%': { transform: 'translateX(100%)' }
            },
            float: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-20px)' }
            },
            'fiber-move-down': {
                '0%': { transform: 'translateY(-100vh)', opacity: '0' },
                '10%': { opacity: '1' },
                '90%': { opacity: '1' },
                '100%': { transform: 'translateY(100vh)', opacity: '0' }
            },
            'fiber-move-up': {
                '0%': { transform: 'translateY(100vh)', opacity: '0' },
                '10%': { opacity: '1' },
                '90%': { opacity: '1' },
                '100%': { transform: 'translateY(-100vh)', opacity: '0' }
            },
            'fiber-move-right': {
                '0%': { transform: 'translateX(-100vw)', opacity: '0' },
                '10%': { opacity: '1' },
                '90%': { opacity: '1' },
                '100%': { transform: 'translateX(100vw)', opacity: '0' }
            },
            'fiber-move-left': {
                '0%': { transform: 'translateX(100vw)', opacity: '0' },
                '10%': { opacity: '1' },
                '90%': { opacity: '1' },
                '100%': { transform: 'translateX(-100vw)', opacity: '0' }
            }
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
            'shine': 'shine 1.5s ease-in-out infinite',
            'float': 'float 6s ease-in-out infinite',
            'fiber-move-down': 'fiber-move-down var(--fiber-duration, 5s) linear infinite',
            'fiber-move-up': 'fiber-move-up var(--fiber-duration, 5s) linear infinite',
            'fiber-move-right': 'fiber-move-right var(--fiber-duration, 5s) linear infinite',
            'fiber-move-left': 'fiber-move-left var(--fiber-duration, 5s) linear infinite'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
}
