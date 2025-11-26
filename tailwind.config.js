/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'deep-charcoal': '#0f0f0f',
                'electric-blue': '#2563eb', // Example, will refine
                'electric-purple': '#7c3aed', // Example, will refine
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
