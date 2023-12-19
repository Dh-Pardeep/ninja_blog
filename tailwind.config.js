/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontSize: {
      "xsm": "14px",
      "sm": "16px",
      "xmd": "18px",
      "md": "20px",
      "lg": "24px",
      "xl": "26px",
      "xxl": "36px",
      "2xl": "46px",
      "3xl": "48px",
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      Merriweather: ['Merriweather', "sans-serif"],
      Roboto: ['Roboto', "sans-serif"],
    },

    extend: {
      colors: {
        "heading": "#000638",
        "light_gray": "#605C59",
        "light_blue": "#283A61",
        "medium_gray": "#5F5F5F",
        "medium_gray_two": "#F5F5F5",
        "border_color": "#DDD",
        "opacity_white": "#DFE1E7",
        "gray_text": "#515151",
        "para_gray": "#434343",
        "para_light_gray": "#DFE6FF",
        "footer_light_gray": "#544B44",
        "copyright_color": "#3E3E3E",
        "table_color": "#303030",
        "table_color_para": "#4F4F4F",
      },
    },
  },
  plugins: [],
}
