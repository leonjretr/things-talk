/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",],
    theme: {
        extend: {
            margin: {
                '0.2': '0.125rem',
                '0.25': '0.175rem',
                '0.3': '0.2rem'
            },
            fontFamily: {
                poppins: [
                    'Poppins'
                ],
                inter: [
                    'Inter'
                ],
                nunito: [
                    'Nunito'
                ],
                philo: [
                    'Philo'
                ],
                quicksand: [
                    'Quicksand'
                ]
            },
            colors: {
                brandWalnut: '#5d3a00',
                brandCoffee: '#684e32',
                brandOlive: '#9b8816',
                brandTangerine: '#f98948',
                brandLightgold: '#f9ea9a',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            spacing: {
                '88': '22rem',
                '110': '28rem',
                '120': '32rem',
                '130': '36rem',
                '140': '40rem',
                '150': '44rem',
                '160': '48rem',
                '170': '52rem',
                '0.25': '0.0625rem'
            },
            screens: {
                mob1: '385px',
                mob2: '450px',
                mob3: '540px'
            },
            fontSize: {
                xxs: '0.5rem',
                xss: '0.625rem'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            lineHeight: {
                "2": "0.5rem",
                "1": "0.325rem",
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
}

