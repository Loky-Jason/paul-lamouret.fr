(function () {
  var html = '\
  <footer class="footer">\
    <div class="container">\
      <div class="footer-grid">\
        <div>\
          <span class="footer-eyebrow">\u00C0 propos</span>\
          <p class="footer-title">Pr\u00e9sentation</p>\
          <p class="footer-text">Directeur Cr\u00e9atif &amp; Chef de Projet bas\u00e9 \u00e0 Paris. Je cr\u00e9e des exp\u00e9riences digitales singuli\u00e8res \u2014 du luxury branding immersif aux mondes narratifs \u2014 aupr\u00e8s d\u2019une douzaine de contributeurs. Fondateur de The Project, collectif ind\u00e9pendant o\u00f9 l\u2019on donne vie \u00e0 des univers qui marquent.</p>\
        </div>\
        <div>\
          <p class="footer-social-title">R\u00e9seaux</p>\
          <div class="footer-social-links">\
            <a href="https://fr.linkedin.com/in/paul-lamouret-89ba94174" target="_blank" rel="noopener noreferrer" class="footer-social-link">\
              <i class="fab fa-linkedin-in"></i><span>LinkedIn</span>\
            </a>\
            <a href="https://www.artstation.com/kenji-ashirogy" target="_blank" rel="noopener noreferrer" class="footer-social-link">\
              <i class="fab fa-artstation"></i><span>Artstation</span>\
            </a>\
          </div>\
        </div>\
      </div>\
    </div>\
    <div class="footer-bottom">\
      <span>All\u00e9e de Bellevue \u2014 94170 Le Perreux-sur-Marne</span>\
      <span>06 65 65 88 62</span>\
      <span>\u00a9 Paul Lamouret \u2014 All Rights Reserved</span>\
    </div>\
  </footer>\
  <button id="back-to-top" aria-label="Retour en haut" title="Retour en haut">\
    <i class="fas fa-arrow-up"></i>\
  </button>';

  document.body.insertAdjacentHTML('beforeend', html);

  // ===== RETOUR EN HAUT =====
  var btn = document.getElementById('back-to-top');
  window.addEventListener('scroll', function () {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
