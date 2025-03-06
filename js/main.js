import { setupMobileMenu } from './modules/hamburger.js';
import { setupBattlefieldTabs } from './modules/slider.js';

document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
  setupBattlefieldTabs();
});
