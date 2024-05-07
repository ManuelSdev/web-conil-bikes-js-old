/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: ['class'],
   content: [
      './pages/**/*.{js,jsx}',
      './components/**/*.{js,jsx}',
      './app/**/*.{js,jsx}',
      './src/**/*.{js,jsx}',
   ],
   theme: {
      container: {
         center: true,
         padding: '2rem',
         screens: {
            '2xl': '1400px',
         },
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
               foreground: 'hsl(var(--primary-foreground))',
            },
            secondary: {
               DEFAULT: 'hsl(var(--secondary))',
               foreground: 'hsl(var(--secondary-foreground))',
            },
            destructive: {
               DEFAULT: 'hsl(var(--destructive))',
               foreground: 'hsl(var(--destructive-foreground))',
            },
            muted: {
               DEFAULT: 'hsl(var(--muted))',
               foreground: 'hsl(var(--muted-foreground))',
            },
            accent: {
               DEFAULT: 'hsl(var(--accent))',
               foreground: 'hsl(var(--accent-foreground))',
            },
            popover: {
               DEFAULT: 'hsl(var(--popover))',
               foreground: 'hsl(var(--popover-foreground))',
            },
            card: {
               DEFAULT: 'hsl(var(--card))',
               foreground: 'hsl(var(--card-foreground))',
            },
            /** PROPIOS */
            greenCorp: {
               // DEFAULT: 'hsl(var(--green-corp))',
               DEFAULT: 'hsl(var(--green-corp), <alpha-value>)',
               foreground: '#FF7F27',
            },
            'dark-100': {
               DEFAULT: 'hsl(var(--dark-100))',
            },
            'dark-200': {
               DEFAULT: 'hsl(var(--dark-200))',
            },
            'dark-300': {
               DEFAULT: 'hsl(var(--dark-300))',
            },
            'dark-400': {
               DEFAULT: 'hsl(var(--dark-400))',
            },
            'dark-500': {
               DEFAULT: 'hsl(var(--dark-500))',
            },
         },
         borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
         },
         headerHeight: {
            lg: 'var(--header-height)',
            md: 'calc(var(--header-heights) - 2rem)',
         },

         height: {
            fatTopAppBar: 'var(--topAppBar-height)',
            slimTopAppBar: 'calc(var(--topAppBar-height) - 2rem)',
            fatBarScreen: 'calc(100vh - var(--topAppBar-height))',
            slimBarScreen: 'calc(100vh - calc(var(--topAppBar-height) - 2rem))',
         },
         padding: {
            fatTopAppBar: 'var(--topAppBar-height)',
            slimTopAppBar: 'calc(var(--topAppBar-height) - 2rem)',
         },
         margin: {
            fatTopAppBar: 'var(--topAppBar-height)',
            slimTopAppBar: 'calc(var(--topAppBar-height) - 2rem)',
         },
         keyframes: {
            'accordion-down': {
               from: { height: 0 },
               to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
               from: { height: 'var(--radix-accordion-content-height)' },
               to: { height: 0 },
            },
            progress: {
               '0%': { transform: ' translateX(0) scaleX(0)' },
               '40%': { transform: 'translateX(0) scaleX(0.4)' },
               '100%': { transform: 'translateX(100%) scaleX(0.5)' },
            },
            'spin-me': {
               '0%': {
                  '-webkit-transform': 'rotateZ(0deg)',
                  transform: 'rotateZ(0deg)',
               },
               '100%': {
                  '-webkit-transform': 'rotateZ(360deg)',
                  transform: 'rotateZ(360deg)',
               },
            },
            'page-loaded': {
               '0%': { opacity: 1 },
               '100%': { opacity: 0 },
            },
            'page-loadeddd': {
               '0%': { top: '0%' },
               '100%': { top: '100%' },
            },
            'page-loadeddd': {
               from: { transform: 'translateY(0%)' },
               to: { transform: 'translateY(100%) ', visibility: 'hidden' },
            },
            'page-test': {
               '0%': { visibility: 'visible' },
               '100%': { visibility: 'hidden' },
            },
         },
         transformOrigin: {
            'left-right': '0% 50%',
         },
         animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
            'progress': 'progress 1s infinite linear',
            'spin-me': 'spin-me 2s ease-in-out infinite',
            'spin-slow': 'spin 3s linear infinite',
            'page-loaded': 'page-loaded .5s linear',
            'page-test': 'page-test 0.1s linear 0.6s',
         },
         backgroundImage: {
            'home-main': "url('/images/home/main.jpg')",
         },
      },
   },
   plugins: [require('tailwindcss-animate')],
}
