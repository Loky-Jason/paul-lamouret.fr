/**
 * BANNIÈRE DE CONSENTEMENT — Portfolio Paul Lamouret
 * ──────────────────────────────────────────────────
 * Conforme RGPD / CNIL — fonctionne avec Google Consent Mode v2.
 *
 * Le tag GA est chargé sur chaque page avec analytics_storage = 'denied'
 * par défaut (voir le <head> des pages HTML). Cette bannière met à jour
 * le consentement APRÈS un choix explicite de l'utilisateur :
 *   — « Accepter » → gtag('consent','update', { analytics_storage:'granted' })
 *   — « Refuser »  → on conserve l'état 'denied' (rien n'est collecté)
 *
 * Le choix est mémorisé dans localStorage ('cookieConsent') pour ne plus
 * réafficher la bannière lors des visites suivantes.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'cookieConsent';

  // Lecture défensive de localStorage (mode privé / cookies bloqués)
  function getChoice() {
    try { return localStorage.getItem(STORAGE_KEY); }
    catch (e) { return null; }
  }
  function setChoice(value) {
    try { localStorage.setItem(STORAGE_KEY, value); }
    catch (e) { /* silencieux : ne pas bloquer l'utilisateur */ }
  }

  // Met à jour Google Consent Mode si gtag est disponible
  function updateConsent(granted) {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'analytics_storage': granted ? 'granted' : 'denied'
      });
    }
  }

  // Si un choix existe déjà → ne rien afficher (le <head> a déjà restauré l'état)
  if (getChoice()) { return; }

  // ===== CONSTRUCTION DE LA BANNIÈRE =====
  var banner = document.createElement('div');
  banner.className = 'consent-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-live', 'polite');
  banner.setAttribute('aria-label', 'Gestion des cookies');
  banner.innerHTML =
    '<div class="consent-inner">' +
      '<div class="consent-copy">' +
        '<span class="consent-eyebrow">Confidentialité</span>' +
        '<p class="consent-text">Ce site utilise des cookies de mesure d’audience (Google Analytics) ' +
        'pour comprendre la navigation et améliorer votre expérience. ' +
        'Aucune donnée n’est collectée sans votre accord.</p>' +
      '</div>' +
      '<div class="consent-actions">' +
        '<button type="button" class="consent-btn consent-btn-refuse" id="consent-refuse">Refuser</button>' +
        '<button type="button" class="consent-btn consent-btn-accept" id="consent-accept">Accepter</button>' +
      '</div>' +
    '</div>';

  document.body.appendChild(banner);

  // Affichage avec une légère temporisation (transition d'entrée)
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { banner.classList.add('visible'); });
  });

  // Retire la bannière du DOM après l'animation de sortie
  function dismiss() {
    banner.classList.remove('visible');
    banner.addEventListener('transitionend', function handler() {
      banner.removeEventListener('transitionend', handler);
      if (banner.parentNode) { banner.parentNode.removeChild(banner); }
    });
  }

  document.getElementById('consent-accept').addEventListener('click', function () {
    setChoice('granted');
    updateConsent(true);
    dismiss();
  });

  document.getElementById('consent-refuse').addEventListener('click', function () {
    setChoice('denied');
    updateConsent(false);
    dismiss();
  });
})();
