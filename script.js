document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        navList.classList.toggle('active');
        const bars = mobileMenu.querySelectorAll('.bar');
            if (mobileMenu.classList.contains('active')) {
         bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
             bars[2].style.transform = 'none';
            }
        });
    }
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById("scrollProgress").style.width = scrollPercent + "%";
  });
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
        if (navList.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                navList.classList.remove('active');
                const bars = mobileMenu.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
        if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, 
                    behavior: 'smooth'
                });
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
    const animateTexts = () => {
        const texts = document.querySelectorAll('.text-animation-container .text');
        let currentIndex = 0;
        texts.forEach(text => {
            text.style.opacity = '0';
            text.style.transform = 'translateY(20px)';
        });
        if (texts.length > 0) {
            texts[0].style.opacity = '1';
            texts[0].style.transform = 'translateY(0)';
        }
        setInterval(() => {  
            texts[currentIndex].style.opacity = '0';
            texts[currentIndex].style.transform = 'translateY(-20px)';
             currentIndex = (currentIndex + 1) % texts.length;
        setTimeout(() => {
                texts[currentIndex].style.opacity = '1';
                texts[currentIndex].style.transform = 'translateY(0)';
            }, 500);
        }, 3000);
    };
    animateTexts();    
    const sections = document.querySelectorAll('section');
      const highlightNavOnScroll = () => {
        let scrollPosition = window.scrollY + 100;
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id'); 
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    window.addEventListener('scroll', highlightNavOnScroll);
    const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
             const formData = new FormData(contactForm);
            const formDataObj = {};
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });
            formStatus.textContent = 'Sending...';
            formStatus.className = '';
            setTimeout(() => {
          console.log('Form submitted:', formDataObj);
                formStatus.textContent = 'Message sent successfully!';
                formStatus.classList.add('success');
                contactForm.reset();
                 setTimeout(() => {
                    formStatus.textContent = '';
                    formStatus.className = '';
                }, 3000);
            }, 1500);
        });
    }
     const animateOnScroll = () => {
        const elements = document.querySelectorAll('.timeline-card, .project-card, .experience-card, .contact-form');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 50) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    const elementsToAnimate = document.querySelectorAll('.timeline-card, .project-card, .experience-card, .contact-form');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    
    animateOnScroll();
    
    window.addEventListener('scroll', animateOnScroll);
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navList = document.querySelector('.nav-list');
        navList.classList.remove('active'); 
    });
});