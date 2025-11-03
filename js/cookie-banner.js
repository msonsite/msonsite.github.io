// ============================================
// GDPR Cookie Banner Functionality
// ============================================

/**
 * Cookie Consent Management
 * Compliant with Belgian GDPR (AVG) and DPA rulings
 */
(function() {
  'use strict';
  
  const COOKIE_CONSENT_KEY = 'cookie_consent';
  const COOKIE_CONSENT_EXPIRY_DAYS = 365;
  
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-accept');
  const declineBtn = document.getElementById('cookie-decline');
  
  // Check if user has already made a choice
  function getCookieConsent() {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consent) {
      try {
        const data = JSON.parse(consent);
        // Check if consent is still valid (not expired)
        if (data.timestamp && (Date.now() - data.timestamp) < (COOKIE_CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000)) {
          return data;
        }
      } catch (e) {
        console.error('Error parsing cookie consent:', e);
      }
    }
    return null;
  }
  
  // Save cookie consent choice
  function saveCookieConsent(accepted) {
    const consent = {
      accepted: accepted,
      timestamp: Date.now(),
      date: new Date().toISOString()
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    
    // Hide banner
    banner.classList.add('hidden');
    
    // Load or block non-essential scripts based on consent
    if (accepted) {
      loadNonEssentialScripts();
    } else {
      blockNonEssentialScripts();
    }
  }
  
  // Load non-essential scripts (analytics, marketing, etc.)
  function loadNonEssentialScripts() {
    console.log('[GDPR] Loading non-essential scripts with user consent');
    
    // Non-essential scripts that require consent would be loaded here
    // Examples: Cloudflare Analytics, Google Analytics, Facebook Pixel, etc.
    // 
    // Note: Essential services (GitHub Pages, Cloudflare CDN, Font Awesome via Cloudflare CDN, 
    // Tailwind CSS via Fastly CDN) are already loaded and do not require consent
    // 
    // Example structure for analytics:
    // if (typeof cloudflare !== 'undefined') {
    //   // Initialize Cloudflare Analytics
    // }
  }
  
  // Block non-essential scripts
  function blockNonEssentialScripts() {
    console.log('[GDPR] Non-essential scripts blocked per user choice');
    
    // Ensure analytics and tracking scripts are not loaded
    // This ensures compliance when user declines
  }
  
  // Initialize cookie banner on page load
  function initCookieBanner() {
    const consent = getCookieConsent();
    
    if (!consent) {
      // No consent found - show banner
      banner.classList.remove('hidden');
    } else {
      // Consent exists - apply previous choice
      if (consent.accepted) {
        loadNonEssentialScripts();
      } else {
        blockNonEssentialScripts();
      }
    }
  }
  
  // Event listeners
  if (acceptBtn) {
    acceptBtn.addEventListener('click', function() {
      saveCookieConsent(true);
    });
  }
  
  if (declineBtn) {
    declineBtn.addEventListener('click', function() {
      saveCookieConsent(false);
    });
  }
  
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCookieBanner);
  } else {
    initCookieBanner();
  }
  
  // Expose consent status for external scripts (optional)
  window.getCookieConsent = function() {
    return getCookieConsent();
  };
})();
