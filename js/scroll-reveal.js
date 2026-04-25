/**
 * SCROLL REVEAL & PARALLAX ANIMATIONS
 * Motion design minimaliste & luxe
 * Utilise Intersection Observer pour les animations au scroll
 */

(function() {
  'use strict';

  // ===== FADE-IN au SCROLL (Scroll Reveal) =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Ajouter la classe visible pour déclencher l'animation
        entry.target.classList.add('visible');
        // Arrêter l'observation une fois visible (performance)
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observer tous les éléments .fade-in
  const fadeInElements = document.querySelectorAll('.fade-in');
  fadeInElements.forEach(el => {
    observer.observe(el);
  });

  // ===== PARALLAX LÉGER =====
  // Elements avec data-parallax s'animent au scroll
  let parallaxElements = document.querySelectorAll('[data-parallax]');

  if (parallaxElements.length > 0) {
    let ticking = false;

    function updateParallax() {
      const scrollY = window.scrollY || window.pageYOffset;

      parallaxElements.forEach(el => {
        // Parallax subtle : 2% du scroll
        const offset = scrollY * 0.02;
        el.style.transform = `translateY(${offset}px)`;
      });

      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    });
  }

  // ===== RESPECT prefers-reduced-motion =====
  // Si l'utilisateur a activé "Réduire les animations"
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Désactiver les animations
    document.body.classList.add('reduce-motion');
    fadeInElements.forEach(el => {
      el.classList.add('visible'); // Montrer immédiatement
    });
  }

})();
