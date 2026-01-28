/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '1rem',
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                    '2xl': '1400px', // Max width set to 1400px
                },
            },
            screens: {
                'xs': '320px', // Extra small devices
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
            },
            colors: {
                primary: {
                    50: '#e6f4f7',
                    100: '#c2e5ec',
                    200: '#9ad5e0',
                    300: '#72c5d4',
                    400: '#54b9cb',
                    500: '#36adc2',
                    600: '#006B8F',
                    700: '#005570',
                    800: '#004459',
                    900: '#003342',
                },
                secondary: {
                    50: '#f5f5f6',
                    100: '#e8e9ea',
                    200: '#d1d3d5',
                    300: '#b9bdc0',
                    400: '#a2a7ab',
                    500: '#8b9196',
                    600: '#6b7278',
                    700: '#3D4246',
                    800: '#2d3033',
                    900: '#1d1f21',
                },
                accent: {
                    50: '#fff7ed',
                    100: '#ffedd5',
                    200: '#fed7aa',
                    300: '#fdba74',
                    400: '#fb923c',
                    500: '#f97316',
                    600: '#ea580c',
                    700: '#c2410c',
                    800: '#9a3412',
                    900: '#7c2d12',
                },
                danger: {
                    50: '#fde8e9',
                    100: '#fac5c7',
                    200: '#f79ea1',
                    300: '#f4777b',
                    400: '#f1595f',
                    500: '#ef3b43',
                    600: '#E31E24',
                    700: '#C41A1F',
                    800: '#A5161A',
                    900: '#861215',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'slide-in-left': 'slideInLeft 0.6s ease-out',
                'slide-in-right': 'slideInRight 0.6s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideInLeft: {
                    '0%': { transform: 'translateX(-30px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slideInRight: {
                    '0%': { transform: 'translateX(30px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
