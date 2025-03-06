export function setupBattlefieldTabs() {
  const battlefieldTabs = document.querySelectorAll('.battlefield-tab');
  const battlefieldSlides = document.querySelectorAll('.battlefield-slide');

  function switchTab(tabIndex) {
    battlefieldTabs.forEach(tab => tab.classList.remove('active'));
    battlefieldSlides.forEach(slide => slide.classList.remove('active'));

    battlefieldTabs[tabIndex].classList.add('active');
    battlefieldSlides[tabIndex].classList.add('active');
  }

  if (battlefieldTabs.length > 0) {
    battlefieldTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        switchTab(index);
      });
    });

    switchTab(0); // Set first tab as active by default
  }
}
