module.exports = {
  email: "tomasdetuacademia@gmail.com",

  socialMedia: [
    {
      name: "github",
      url: "https://github.com/tomas-vasquez",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/-tomas-vasquez-",
    },
    {
      name: "wathsapp",
      url: "https://api.whatsapp.com/send?phone=59160008862",
    },
  ],

  navLinks: [
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Experience",
      url: "/#jobs",
    },
    {
      name: "Work",
      url: "/#projects",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
  ],

  tracks: [
    {
      song: "Four-Seasons-Winter-LInv",
      artist: "Vivaldi",
      url: "Vivaldi-Four-Seasons-Winter-LInv.mp3",
    },
    {
      song: "Four-Seasons-Winter-LInv2",
      artist: "Vivaldi",
      url: "Vivaldi-Four-Seasons-Winter-LInv.mp3",
    },
  ],

  colors: {
    green: "#03a9f4",
    navy: "#020c1b",
    darkNavy: "#020c1b",
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
