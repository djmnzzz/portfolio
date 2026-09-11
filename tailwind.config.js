/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    900: '#0b0f19',
                    800: '#111827',
                    700: '#1f2937',
                },
                wine: {
                    500: '#be123c',
                    600: '#9f1239',
                    700: '#881337',
                },
                accent: {
                    blue: '#2563eb',
                    cyan: '#38bdf8',
                }
            }
        },
    },
    plugins: [],
}