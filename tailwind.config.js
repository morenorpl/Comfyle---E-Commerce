/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    screens:{
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    container:{
      center: true,
      padding: '1rem'
    },
    extend: {

      scrollbar: ['hidden'], // Custom scrollbar-hide utility

      fontFamily:{
        poppins: "'Poppins', serif",
        roboto: "'Roboto', serif",
        climatecrisis: " 'Climate Crisis', serif",
        raleway: " 'Raleway', serif"
      },
      colors:{
        
        'primary-g' : '#CDFAD5',
        'primary-p' : '#CB9DF0',
        'primary-b' : '#B4E4FF',
        'primary-r' : '#FF8080',
        'primary-pi' : '#F7C8E0',
        'primary-y' : '#FFF4A5',
        'primary-white' : '#FEFDF8',
        'primary-black' : '#25262B',
        
      },
      backgroundImage:{
        
        'rainbow-fade': `linear-gradient(to top, 
            rgba(254, 253, 248, 0), 
            rgba(254, 253, 248, 0.3) 20%, 
            rgba(254, 253, 248, 0.5) 40%, 
            rgba(254, 253, 248, 0.8) 60%, 
            rgba(254, 253, 248, 1) 100%), 
                         
            linear-gradient(to right, #F7C8E0, #CDFAD5, #EAD0FF, #B4E4FF, #FFCF96)`
        
      },

      
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        yaw: {
          '0%, 100%': { transform: 'translateX(-5%); animation-timing-function: cubic-bezier(5,0,1,1)' },
          '50%': { transform: 'translateX(0%); animation-timing-function: cubic-bezier(5,0,1,1)' },
        },
        slowspin: {
          '100%': { transform: 'rotate(360deg)' },
        }
        
      },
      animation: {
        scroll: 'scroll  9s linear infinite',
        yaw: 'yaw 5s ease-in-out infinite',
        slowspin: 'slowspin 8s linear infinite',
      },
    },
  },
  variants:{
    extend:{
      display: ['group-hover'],
      visibility: ['group-hover']
    },
  },
  plugins: [],
  corePlugins: {
    scrollbar: false, },// Disable default scrollbar styling if needed
}

