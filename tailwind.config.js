/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animated";
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light", "dark"],
  },

  theme: {
    
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["playfair-bold", "serif"],
    },
    extend: {
      animation: {
        rotate: "rotate 10s linear infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
      },

      plugins: [],

      backgroundImage: {
        "footer-pattern": "url('/src/assets/footer-pattern.png')",
        "footer-wheel": "url('/src/assets/icon-wheel.png')",
        "footer-boat": "url('/src/assets/icon-big-boat.png')",
        "slider-image": "url('/src/assets/slider1.jpg')",
        "slider-image1": "url('/src/assets/slider2.jpg')",
        "slider-image2": "url('/src/assets/slider3.jpg')",
        decks: "url('/src/assets/bgImage/WhatsApp Image 2025-02-10 at 4.31.06 AM (2).jpeg')",

        "about-image": "url('/src/assets/about-bg.png')",
        "video-image": "url('/src/assets/bg-video1.jpg')",
        "pattern-boat": "url('/src/assets/pattern-boat.png')",
        "pattern-box": "url('/src/assets/pattern-box.png')",
        "pattern-contact": "url('/src/assets/bg-contact1.jpg')",
        // "contact-bg": "url('/src/assets/bg-contact1-2.jpg')",
        "contact-bg": "url('/src/assets/bgImage/bgImage6.jpeg')",

        "ocean-queen": 'url("/src/assets/bgImage/WhatsApp Image 2025-02-10 at 4.31.02 AM (1).jpeg")',
        "food": 'url("/src/assets/menu.jpg")',
        "buffet": 'url("/src/assets/Foodmenu/buffet.svg")',


      },
      fontFamily: {
        allison: ["Allison", "serif"],
        "playfair-regular": ["playfair-regular", "serif"],
        "playfair-bold": ["playfair-bold", "serif"],
        "poppins-bold": ["poppins-bold", "sans-serif"],
        "poppins-reg": ["poppins-regular", "sans-serif"],
      },
    },

    
  },
  plugins: [animate, daisyui],

  
  
};
