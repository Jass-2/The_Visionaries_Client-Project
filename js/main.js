
// Import modules
import { setupMobileMenu } from './modules/hamburger.js';
import { setupBattlefieldTabs } from './modules/slider.js';
import { setupDonation } from './modules/donation.js';
// import { createPopup } from './modules/popup.js';

// import { setupTransparentHeader } from './modules/transparentHeader.js';
import { heroAnimation, scrollAnimations, lenis } from "./modules/animations.js";


  // Set up mobile menu
  setupMobileMenu();

  // GSAP 

  heroAnimation();
  scrollAnimations();
  lenis ();
  
  // Set up battlefield tabs if they exist
  setupBattlefieldTabs();


  // Set up logo switch on scroll

   setupDonation();

  // Set up popup for donation
  // createPopup();
  // Set up transparent header
  // setupTransparentHeader();

