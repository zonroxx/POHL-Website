// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }

  // Set active navigation link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navItems = document.querySelectorAll('.nav-links a');

  navItems.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (navLinks && menuToggle) {
      if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove('active');
      }
    }
  });

  // Dark mode toggle
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;
  const icon = darkModeToggle.querySelector('i');

  // Check for saved dark mode preference
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }

  // Toggle dark mode
  darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');

    // Save preference
    localStorage.setItem('darkMode', isDark);

    // Toggle icon
    if (isDark) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });

  // Header and navbar scroll effect
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add('scrolled');
      // Make navbar sticky by adding position
      if (nav) {
        nav.style.position = 'sticky';
        nav.style.top = '0';
      }
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
  animatedElements.forEach(el => observer.observe(el));

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Button ripple effect enhancement
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function(e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        width: 20px;
        height: 20px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        pointer-events: none;
        animation: ripple 0.6s ease-out;
      `;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Card parallax effect (subtle)
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.willChange = 'transform';

    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (centerY - y) / 50;
      const rotateY = (x - centerX) / 50;

      this.style.transform = `translateY(-8px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) perspective(1000px) rotateX(0) rotateY(0)';
    });
  });

  // Parallax background effect
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxBg = document.querySelector('body::before');

    // Update CSS custom property for parallax
    document.documentElement.style.setProperty('--scroll-offset', scrolled * 0.3 + 'px');
  });

  // Signature diagonal section reveals
  const sections = document.querySelectorAll('main > *');
  const isMobileView = window.innerWidth < 768;
  const isSmallMobileView = window.innerWidth < 480;

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0) skewX(0)';
      }
    });
  }, {
    threshold: isSmallMobileView ? 0.05 : 0.1,
    rootMargin: isSmallMobileView ? '0px 0px 50px 0px' : '0px 0px -100px 0px'
  });

  sections.forEach((section, index) => {
    if (!section.classList.contains('hero-home')) {
      section.style.opacity = '0';

      // Reduce transform on mobile to prevent overflow
      const translateAmount = isSmallMobileView ? 20 : (isMobileView ? 30 : 50);
      const skewAmount = isSmallMobileView ? 0 : (isMobileView ? -1 : -2);

      section.style.transform = index % 2 === 0
        ? `translateX(-${translateAmount}px) skewX(${skewAmount}deg)`
        : `translateX(${translateAmount}px) skewX(${-skewAmount}deg)`;

      // Faster transition on mobile
      section.style.transition = isMobileView
        ? 'all 0.5s ease-out'
        : 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';

      sectionObserver.observe(section);
    }
  });
});

// Add ripple animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(20);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
