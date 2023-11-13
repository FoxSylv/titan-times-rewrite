module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            screens: {
                "xs": "480px",
                "xxs": "360px"
            },
            fontFamily: {
                minecraft: ["Minecraft", "sans-serif"],
                header: ["Inter", "sans-serif"]
            }
        }
    }
}

