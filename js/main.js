import { setupMobileMenu } from './modules/hamburger.js';
import { setupBattlefieldTabs } from './modules/slider.js';
import { heroAnimation, scrollAnimations, lenis } from "./modules/animations.js";

document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
  setupBattlefieldTabs();
  heroAnimation();
  scrollAnimations();
  lenis ();
});
