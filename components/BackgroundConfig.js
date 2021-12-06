const BackgroundConfig={
    particles: {
      number: {
        value: 67,
        density: {
          enable: true,
          value_area: 801.7060304327614
        }
      },
      color: {
        value: "#e11616"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#d91717"
        },
        polygon: {
          nb_sides: 4
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.22885281607335908,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 10,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 144.30708547789706,
        color: "#de1515",
        opacity: 0.5371430403899501,
        width: 1.4430708547789706
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "repulse"
        },
        onclick: {
          enable: false,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 491.50849150849155,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 111.8881118881119,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  };

  export default BackgroundConfig