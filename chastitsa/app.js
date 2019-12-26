particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 200
        }
      },
      "color": {
        "value": "random", //random // #FFFFFF
      },
      "shape": {
        "type": "circle", // circle edge triangle polygon star 
        "stroke": {
          "width": 1,
          "color": "#42aaff"
        },
        "polygon": {
          "nb_sides": 8
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 50,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 30,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 100,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 60,
        "direction": "top", // none top top-right right bottom-right bottom bottom-left left top-left
        "random": true,
        "straight": true,
        "out_mode": "bounce", // out bounce
        "attract": {
          "enable": true,
          "rotateX": 1600,
          "rotateY": 1200
        }
      }
    },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse" //grab bubble repulse
      },
      "onclick": {
        "enable": true,
        "mode": "bubble" // push remove bubble repulse
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 100,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 300,
        "size": 4,
        "duration": 0.3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  }
  }

);