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
document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');
    if (modeToggle) { // Check if the button exists before adding listener
        modeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            // Optional: Save preference to localStorage
            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
        });
        // Optional: Apply saved theme on load
        if (localStorage.getItem('theme') === 'light') {
            document.body.classList.add('light-mode');
        }
    }

    // ... (rest of your JavaScript for scroll-to-top button) ...
});
document.addEventListener('DOMContentLoaded', () => {
    // --- Mode Toggle Button Logic ---
    const modeToggle = document.getElementById('mode-toggle');
    if (modeToggle) { // Check if the button exists before adding listener
        modeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            // Optional: Save preference to localStorage so it remembers user's choice
            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
                // Change icon to sun when in light mode
                modeToggle.querySelector('i').classList.remove('fa-moon');
                modeToggle.querySelector('i').classList.add('fa-sun');
            } else {
                localStorage.setItem('theme', 'dark');
                // Change icon to moon when in dark mode
                modeToggle.querySelector('i').classList.remove('fa-sun');
                modeToggle.querySelector('i').classList.add('fa-moon');
            }
        });

        // Optional: Apply saved theme on page load
        if (localStorage.getItem('theme') === 'light') {
            document.body.classList.add('light-mode');
            // Ensure icon is sun if loaded in light mode
            modeToggle.querySelector('i').classList.remove('fa-moon');
            modeToggle.querySelector('i').classList.add('fa-sun');
        } else {
            // Ensure icon is moon if loaded in dark mode (or no preference saved)
            modeToggle.querySelector('i').classList.remove('fa-sun');
            modeToggle.querySelector('i').classList.add('fa-moon');
        }
    }

    // --- Scroll To Top Button Logic ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (scrollToTopBtn) { // Check if the button exists
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { // Show button after scrolling 300px down
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        // Scroll to top when button is clicked
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Smooth scroll effect
            });
        });
    }
});