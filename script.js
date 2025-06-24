function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
document.getElementById('mode-toggle').onclick = () => {
  document.body.classList.toggle('light-mode');
  const icon = document.getElementById('mode-toggle');
  icon.textContent = document.body.classList.contains('light-mode') ? '🌞' : '🌙';
};


function sendMessage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert("Message sent! (Note: You need to set up backend to actually send it)");
    document.getElementById("contact-form").reset();
    return false; // prevent page reload
  }

  return false;
}
document.querySelector("form").addEventListener("submit", function () {
  alert("Thanks! Your message has been sent.");
});
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff" /* Color of the particles */
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2, /* Speed of particles */
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" /* "grab", "repulse", "bubble" */
      },
      "onclick": {
        "enable": true,
        "mode": "push" /* "push", "remove", "bubble" */
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
function getDarkParticlesConfig() {
    return {
        "particles": {
            "number": {
                "value": 60,  // Reduced from 80
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00f0ff"  // Using your accent color
            },
            "size": {
                "value": 2,  // Reduced from 3
                "random": true,
                "anim": {
                    "enable": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00f0ff",  // Using your accent color
                "opacity": 0.3,  // Reduced opacity
                "width": 1
            },
            // ... rest of your config
        }
    };
}

function getLightParticlesConfig() {
    return {
        "particles": {
            "number": {
                "value": 60,  // Reduced from 80
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#4a00e0"  // Using light mode accent color
            },
            "size": {
                "value": 2,  // Reduced from 3
                "random": true,
                "anim": {
                    "enable": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#4a00e0",  // Using light mode accent color
                "opacity": 0.3,  // Reduced opacity
                "width": 1
            },
            // ... rest of your config
        }
    };
}
document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('mode-toggle');
    const icon = modeToggle.querySelector('i');
    
    // Initialize theme from localStorage or prefer-color-scheme
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        
        if (savedTheme === 'light' || (!savedTheme && prefersLight)) {
            document.body.classList.add('light-mode');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            particlesJS('particles-js', getLightParticlesConfig());
        } else {
            document.body.classList.remove('light-mode');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            particlesJS('particles-js', getDarkParticlesConfig());
        }
    }
    
    // Toggle theme
    modeToggle.addEventListener('click', function() {
        const isLight = document.body.classList.toggle('light-mode');
        
        if (isLight) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
            particlesJS('particles-js', getLightParticlesConfig());
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark');
            particlesJS('particles-js', getDarkParticlesConfig());
        }
    });
    
    // Initialize
    initTheme();
});
// Initialize particles and theme
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const modeToggle = document.getElementById('mode-toggle');
    const icon = modeToggle.querySelector('i');
    
    // Function to set theme and particles
    function setTheme(isLightMode) {
        if (isLightMode) {
            document.body.classList.add('light-mode');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            particlesJS('particles-js', getLightParticlesConfig());
        } else {
            document.body.classList.remove('light-mode');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            particlesJS('particles-js', getDarkParticlesConfig());
        }
    }
    
    // Check for saved theme preference
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        
        if (savedTheme === 'light' || (!savedTheme && prefersLight)) {
            setTheme(true);
        } else {
            setTheme(false);
        }
    }
    
    // Toggle theme on button click
    modeToggle.addEventListener('click', function() {
        const isLight = !document.body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        setTheme(isLight);
    });
    
    // Initialize theme and particles
    initTheme();
    particlesJS('particles-js', 
        document.body.classList.contains('light-mode') ? 
        getLightParticlesConfig() : getDarkParticlesConfig()
    );
});

// Particle configurations
function getDarkParticlesConfig() {
    return {
        "particles": {
            "number": {
                "value": 60,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00f0ff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false
            },
            "size": {
                "value": 2,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00f0ff",
                "opacity": 0.3,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    };
}

function getLightParticlesConfig() {
    return {
        "particles": {
            "number": {
                "value": 60,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#4a00e0"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false
            },
            "size": {
                "value": 2,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#4a00e0",
                "opacity": 0.3,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    };
}

// Scroll to top button functionality
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  menuToggle.addEventListener('click', function() {
    mobileNav.classList.toggle('active');
  });
});
