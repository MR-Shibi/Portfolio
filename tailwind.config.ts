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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      sm: "375px", // Mobile
      md: "768px", // Tablet
      lg: "1024px", // Desktop small
      xl: "1440px", // Desktop
      "2xl": "1600px",
    },
    extend: {
      fontFamily: {
        heading: ["Poppins", "JetBrains Mono", "monospace"],
        body: ["Inter", "Open Sans", "sans-serif"],
      },
      colors: {
        // Portfolio-specific color scheme
        portfolio: {
          black: "#000000",
          "dark-grey": "#111111",
          "lighter-black": "#1a1a1a",
          red: "#ff0000",
          "red-glow": "#ff3333",
          white: "#ffffff",
          "light-grey": "#f5f5f5",
        },
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
      spacing: {
        "8": "2rem", // 32px - 8pt base spacing
        "16": "4rem", // 64px - 8pt * 2
        "24": "6rem", // 96px - 8pt * 3
        "32": "8rem", // 128px - 8pt * 4
      },
      borderRadius: {
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
        "red-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(255, 0, 0, 0.3)",
          },
          "50%": {
            boxShadow:
              "0 0 40px rgba(255, 0, 0, 0.6), 0 0 60px rgba(255, 0, 0, 0.4)",
          },
        },
        "gradient-shift": {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        "fade-in-up": {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "red-glow": "red-glow 2s ease-in-out infinite",
        "gradient-shift": "gradient-shift 4s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        float: "float 3s ease-in-out infinite",
      },
      backgroundImage: {
        "red-gradient":
          "radial-gradient(ellipse at center, rgba(255, 0, 0, 0.3) 0%, rgba(255, 0, 0, 0.1) 50%, transparent 70%)",
        "red-glow-gradient":
          "linear-gradient(-45deg, #000000, #1a0000, #330000, #1a0000, #000000)",
      },
      backgroundSize: {
        "400%": "400% 400%",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
