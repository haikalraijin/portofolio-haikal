// 1. Navbar Scroll Effect (Transparan ke Solid)
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// 2. Mobile Menu Toggle (Hamburger)
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 3. Efek Animasi Typing
const words = ["DATA CENTER TECHNICIAN", "IT ENTHUSIAST", "NETWORK ENGINEER"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing-text");

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = 100;

    if (isDeleting) {
        typingSpeed /= 2; // Hapus lebih cepat
    }

    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 2000; // Jeda saat kata selesai diketik
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Pindah ke kata berikutnya
        typingSpeed = 500; // Jeda sebelum mengetik kata baru
    }

    setTimeout(type, typingSpeed);
}

// Mulai efek typing ketika halaman siap
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000);
});

// 4. Background Animasi Partikel (Galaksi & Interaksi Mouse)
if (document.getElementById('particles-js')) {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#a855f7", /* Warna ungu tema kamu */
                "opacity": 0.3,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1.5,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "grab" }, /* Efek saat mouse mendekat */
                "onclick": { "enable": true, "mode": "push" }, /* Efek saat di-klik */
                "resize": true
            },
            "modes": {
                "grab": { "distance": 180, "line_linked": { "opacity": 0.8 } },
                "push": { "particles_nb": 4 } /* Tambah bintang saat diklik */
            }
        },
        "retina_detect": true
    });
}

// 5. Fitur Toggle Menu Sosmed di About Me
const btnMore = document.getElementById('btn-more-about');
const socialLinks = document.getElementById('social-links');

if(btnMore && socialLinks) {
    btnMore.addEventListener('click', () => {
        // Menambah/menghapus class 'show' setiap kali diklik
        socialLinks.classList.toggle('show');
    });
}