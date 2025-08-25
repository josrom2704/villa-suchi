import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Mexican-Salvadoran Fusion Color Palette
        // Rojo Chile México (Primary Red)
        terracotta: {
          50: "hsl(var(--terracotta-50))",
          100: "hsl(var(--terracotta-100))",
          200: "hsl(var(--terracotta-200))",
          300: "hsl(var(--terracotta-300))",
          400: "hsl(var(--terracotta-400))",
          500: "hsl(var(--terracotta-500))", // #D12525
          600: "hsl(var(--terracotta-600))",
          700: "hsl(var(--terracotta-700))",
          800: "hsl(var(--terracotta-800))",
          900: "hsl(var(--terracotta-900))",
        },
        // Verde Selva Tropical (Emerald Green)
        emerald: {
          50: "hsl(var(--emerald-50))",
          100: "hsl(var(--emerald-100))",
          200: "hsl(var(--emerald-200))",
          300: "hsl(var(--emerald-300))",
          400: "hsl(var(--emerald-400))",
          500: "hsl(var(--emerald-500))", // #4CAF50
          600: "hsl(var(--emerald-600))",
          700: "hsl(var(--emerald-700))",
          800: "hsl(var(--emerald-800))",
          900: "hsl(var(--emerald-900))",
        },
        // Blanco Algodón (Cotton White)
        cream: {
          50: "hsl(var(--cream-50))",
          100: "hsl(var(--cream-100))",
          200: "hsl(var(--cream-200))",
          300: "hsl(var(--cream-300))",
          400: "hsl(var(--cream-400))",
          500: "hsl(var(--cream-500))", // #F5F5DC
          600: "hsl(var(--cream-600))",
          700: "hsl(var(--cream-700))",
          800: "hsl(var(--cream-800))",
          900: "hsl(var(--cream-900))",
        },
        // Amarillo Sol Azteca (Aztec Sun Yellow)
        gold: {
          50: "hsl(var(--gold-50))",
          100: "hsl(var(--gold-100))",
          200: "hsl(var(--gold-200))",
          300: "hsl(var(--gold-300))",
          400: "hsl(var(--gold-400))",
          500: "hsl(var(--gold-500))", // #F7B500
          600: "hsl(var(--gold-600))",
          700: "hsl(var(--gold-700))",
          800: "hsl(var(--gold-800))",
          900: "hsl(var(--gold-900))",
        },
        // Azul Índigo El Salvador
        indigo: {
          50: "hsl(var(--indigo-50))",
          100: "hsl(var(--indigo-100))",
          200: "hsl(var(--indigo-200))",
          300: "hsl(var(--indigo-300))",
          400: "hsl(var(--indigo-400))",
          500: "hsl(var(--indigo-500))", // #334D5C
          600: "hsl(var(--indigo-600))",
          700: "hsl(var(--indigo-700))",
          800: "hsl(var(--indigo-800))",
          900: "hsl(var(--indigo-900))",
        },
        // Naranja Cempasúchil México
        orange: {
          50: "hsl(var(--orange-50))",
          100: "hsl(var(--orange-100))",
          200: "hsl(var(--orange-200))",
          300: "hsl(var(--orange-300))",
          400: "hsl(var(--orange-400))",
          500: "hsl(var(--orange-500))", // #FF8C00
          600: "hsl(var(--orange-600))",
          700: "hsl(var(--orange-700))",
          800: "hsl(var(--orange-800))",
          900: "hsl(var(--orange-900))",
        },
        // Tierra Cocida (Baked Earth)
        earth: {
          50: "hsl(var(--earth-50))",
          100: "hsl(var(--earth-100))",
          200: "hsl(var(--earth-200))",
          300: "hsl(var(--earth-300))",
          400: "hsl(var(--earth-400))",
          500: "hsl(var(--earth-500))", // #A0522D
          600: "hsl(var(--earth-600))",
          700: "hsl(var(--earth-700))",
          800: "hsl(var(--earth-800))",
          900: "hsl(var(--earth-900))",
        },
        // Café Oscuro El Salvador
        coffee: {
          50: "hsl(var(--coffee-50))",
          100: "hsl(var(--coffee-100))",
          200: "hsl(var(--coffee-200))",
          300: "hsl(var(--coffee-300))",
          400: "hsl(var(--coffee-400))",
          500: "hsl(var(--coffee-500))", // #5C4033
          600: "hsl(var(--coffee-600))",
          700: "hsl(var(--coffee-700))",
          800: "hsl(var(--coffee-800))",
          900: "hsl(var(--coffee-900))",
        },
        // Rosa Buganvilla (Bougainvillea Pink)
        pink: {
          50: "hsl(var(--pink-50))",
          100: "hsl(var(--pink-100))",
          200: "hsl(var(--pink-200))",
          300: "hsl(var(--pink-300))",
          400: "hsl(var(--pink-400))",
          500: "hsl(var(--pink-500))", // #E4717A
          600: "hsl(var(--pink-600))",
          700: "hsl(var(--pink-700))",
          800: "hsl(var(--pink-800))",
          900: "hsl(var(--pink-900))",
        },
        // Turquesa Océano Pacífico (Pacific Ocean Turquoise)
        turquoise: {
          50: "hsl(var(--turquoise-50))",
          100: "hsl(var(--turquoise-100))",
          200: "hsl(var(--turquoise-200))",
          300: "hsl(var(--turquoise-300))",
          400: "hsl(var(--turquoise-400))",
          500: "hsl(var(--turquoise-500))", // #40E0D0
          600: "hsl(var(--turquoise-600))",
          700: "hsl(var(--turquoise-700))",
          800: "hsl(var(--turquoise-800))",
          900: "hsl(var(--turquoise-900))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "pulse-soft": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.8",
          },
        },
        "mexican-wave": {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
          },
          "33%": {
            transform: "translateY(-5px) rotate(2deg)",
          },
          "66%": {
            transform: "translateY(5px) rotate(-2deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.8s ease-out",
        "pulse-soft": "pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "mexican-wave": "mexican-wave 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
