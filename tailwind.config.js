/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1170px",
      },
    },
    extend: {
      spacing:{
        '238':'238px',
        '270':'270px',
        '280':'280px',
        '294':'294px',
        '305':'305px',
        '315':'315px',
        '333':'333px',
        '370':'370px',
        '390':'390px',
        '475':'475px',
        '570':'570px',
        '720':'720px',
        '770':'770px',
        '792':'792px',
        '954':'954px',
        '970':'970px',
      },
      fontSize: {
        '2xl': '22px',
        "3xl": "24px",
        "3.5xl": "26px",
        "4xl": "30px",
        "4.5xl":"32px",
        "5xl": "36px",
        "5.5xl":"40px",
        "6xl": "48px",
        "6.5xl":"52px",
        "7xl": "60px",
        "8xl": "70px",
        "9xl": "100px",
      },
      lineHeight: {
        '8': '30px',
        '9': '32px',
        '10': '34px',
        '11': '36px',
        '12': '40px',
        '13': '46px',
        '14': '50px',
        '15': '54px',
        '16': '58px',
        '17': '60px',
        '18': '70px',
        '19': '80px',
        '20':'90px',
      },
      fontFamily: {
        'PlusJakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'body': ['Satoshi', 'sans-serif'],
        'body1':['Inter', 'sans-serif']
        
      },
      colors: {
        primaryColor: '#101011',
        secondaryColor: '#4D4D53',
        bg: '#F8F8F9',
        PurplyBlue:'#6557FF',
        OrangyRed: '#FFF2EF',
        orangy: '#F8522E',
        border:'#E4E4E4',
        borderIcon:'#CCCCCC',
        divided:'#C9C9C9'
      },
      backgroundImage: {
        gradient:'linear-gradient(107.83deg, #6557FF 0%, #AA3FFF 33%, #FCAA4A 66%, #F8522E 100%)',
      },
      boxShadow: {
        shadow:"20px 20px 100px 0px #00000012 ",
      },
      borderRadius: {
        '100': '100px',
        '30':'30px',
        '40':'40px',
        '25':'25px',
        '20':'20px',
        '120':'10px',
      },
      animation: {
        "loop-scroll": "loop-scroll 40s linear infinite",
        "loop-scroll2": "loop-scroll2 40s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "loop-scroll2": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
}

