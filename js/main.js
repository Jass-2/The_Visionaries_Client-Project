
// Import modules
import { setupMobileMenu } from './modules/hamburger.js';
import { setupBattlefieldTabs } from './modules/slider.js';
import { setupDonation } from './modules/donation.js';
import { setupVictoriaSlider } from './modules/victoria.js';
import { setupTimelineSlider } from './modules/timeline.js';
import { initializePage } from './modules/news.js';


// import { setupTransparentHeader } from './modules/transparentHeader.js';

// Initialize on DOM content loaded

  // Set up mobile menu
  setupMobileMenu();
  
  // Set up battlefield tabs if they exist
  setupBattlefieldTabs();

  // Set up logo switch on scroll

   setupDonation();

   setupVictoriaSlider();

   setupTimelineSlider();

   initializePage();
  // Set up popup for donation
  // createPopup();
  // Set up transparent header
  // setupTransparentHeader();
