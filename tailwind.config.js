/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			montserrat: [
  				'Montserrat',
  				'sans-serif'
  			]
  		},
  		colors: {
  			defaultBg: '#F6F6F6',
  			themeBlack: '#333',
  			sidebarIconColor: '#CFD7ED',
  			primaryColor: '#696EFF',
  			primaryLight: '#E6E6FF'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

