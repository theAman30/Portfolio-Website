const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      navbar.classList.add(
        "backdrop-blur-lg",
        "bg-white/80",
        "dark:bg-[#0f172a]/80",
        "shadow-sm"
      );
    } else {
      navbar.classList.remove(
        "backdrop-blur-lg",
        "bg-white/80",
        "dark:bg-[#0f172a]/80",
        "shadow-sm"
      );
    }
  });


  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

//   particle.js 
        particlesJS("particles-js", {

            particles: {
                number: {
                    value: 150,
                    density: {
                        enable: true,
                        value_area: 900
                    }
                },

                color: {
                    value: "#ff7613"
                },

                shape: {
                    type: "circle"
                },

                opacity: {
                    value: 0.8,
                    random: true
                },

                size: {
                    value: 3,
                    random: true
                },

                line_linked: {
                    enable: true,
                    distance: 160,
                    color: "#ff7613",
                    opacity: 0.4,
                    width: 1
                },

                move: {
                    enable: true,
                    speed: 3.5,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out"
                }
            },

            interactivity: {
                detect_on: "canvas",

                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },

                modes: {
                    grab: {
                        distance: 200,
                        line_linked: {
                            opacity: 1
                        }
                    },

                    push: {
                        particles_nb: 5
                    }
                }
            },

            retina_detect: true
        });


var typed = new Typed(".typing-text", {
    strings: [
        "Frontend Developer",
        "Freelancer",
        "Graphic Designer",
        "Video Editor",
        "Frontend & Backend Systems"
    ],
    typeSpeed: 60,
    backSpeed: 35,
    backDelay: 1200,
    loop: true,
    smartBackspace: true,
    showCursor: true,
    cursorChar: "|"
});