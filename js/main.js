
// Import modules
import { setupMobileMenu } from './modules/hamburger.js';
// import { setupBattlefieldTabs } from './modules/slider.js';
import { setupDonation } from './modules/donation.js';
import { heroAnimation, scrollAnimations, lenis } from "./modules/animations.js";
import { setupBattlefieldSlider, setupLettersSlider } from './modules/history.js';
import { setupVictoriaSlider } from './modules/victoria.js';
import { setupTimelineSlider } from './modules/timeline.js';
import { initializePage } from './modules/news.js';


   setupMobileMenu();

   setupDonation();

   setupVictoriaSlider();

   setupTimelineSlider();

   initializePage();
   setupBattlefieldSlider();
  
   setupLettersSlider();


  // GSAP 

  heroAnimation();
  scrollAnimations();
  lenis ();


