(function () {
  var html = '\
  <nav class="navbar">\
    <a href="index.html" class="navbar-brand">\
      <img src="./uploads/Logo-final-e41I.png" alt="Logo Paul Lamouret">\
      <span class="navbar-brand-name">Paul Lamouret</span>\
    </a>\
    <ul class="navbar-menu">\
      <li><a href="index.html">Accueil</a></li>\
      <li><a href="about.html">\u00C0 propos</a></li>\
      <li><a href="projects.html">Projets</a></li>\
      <li><a href="contact.html">Contact</a></li>\
    </ul>\
    <button class="hamburger" id="hamburger" aria-label="Menu">\
      <span></span><span></span><span></span>\
    </button>\
  </nav>\
  <div class="mobile-menu" id="mobile-menu">\
    <a href="index.html">Accueil</a>\
    <a href="about.html">\u00C0 propos</a>\
    <a href="projects.html">Projets</a>\
    <a href="contact.html">Contact</a>\
  </div>';

  document.body.insertAdjacentHTML('afterbegin', html);

  // ===== LIEN ACTIF =====
  var page = window.location.pathname.split('/').pop() || 'index.html';
  if (!page) page = 'index.html';
  // Les pages détail projet sont rattachées à "Projets"
  if (page === 'project-detail.html') page = 'projects.html';
  // games.html est rattachée à "Projets" aussi
  if (page === 'games.html') page = 'projects.html';

  document.querySelectorAll('.navbar-menu a, .mobile-menu a').forEach(function (link) {
    if (link.getAttribute('href') === page) {
      link.classList.add('active');
    }
  });

  // ===== HAMBURGER =====
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
  }
})();
