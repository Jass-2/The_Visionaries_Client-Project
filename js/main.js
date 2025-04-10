
// Import modules
import { setupMobileMenu } from './modules/hamburger.js';
import { logoAnimation } from './modules/logo.js';

// import { setupBattlefieldTabs } from './modules/slider.js';
import { setupDonation } from './modules/donation.js';
import { heroAnimation, scrollAnimations, lenis } from "./modules/animations.js";
import { setupBattlefieldSlider, setupLettersSlider } from './modules/history.js';
import { setupVoicesSlider, setupMemorialWallSlider } from './modules/memorial-slider.js';

import { setupTypewriter } from './modules/typewriter.js';




import { setupVictoriaSlider } from './modules/victoria.js';
import { setupTimelineSlider } from './modules/timeline.js';
import { initializePage } from './modules/news.js';

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { initLettersApp } from './modules/letters.js';
import './modules/contactForm.js';
import { initTimelineApp } from './modules/timelineFetch.js';
import { initWallApp } from './modules/memorial-wall.js';



   setupMobileMenu();

   logoAnimation();

   setupDonation();

   setupVictoriaSlider();

   setupTimelineSlider();
   initTimelineApp();

   initializePage();
   setupBattlefieldSlider();
  
   setupLettersSlider();

   initLettersApp(createApp);
 
      // Set up memorial wall slider functionality
   setupVoicesSlider();
   initWallApp();

   setupTypewriter();

   

   setupMemorialWallSlider();

  // GSAP 

  heroAnimation();
  scrollAnimations();
  lenis ();


