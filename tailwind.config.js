/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#177082",
                "accent": "#A2FF00",
                "background-light": "#f9fafb",
                "background-dark": "#121e21",
                "surface-dark": "#1A2629",
            },
            fontFamily: {
                "display": ["Epilogue", "sans-serif"],
                "body": ["Manrope", "sans-serif"],
            },
            borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "full": "9999px" },
            spacing: {
                "128": "32rem",
                "144": "36rem",
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'marquee': 'marquee 30s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            }
        },
    },
    plugins: [],
}
