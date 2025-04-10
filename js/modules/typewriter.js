
/**
 * Typewriter effect for the home page
 * Creates a typing and erasing animation for the given element
 */

export function setupTypewriter() {
  const typewriterElement = document.getElementById('typewriter-text');
  
  // If the element doesn't exist, exit the function
  if (!typewriterElement) return;
  
  // The phrases we want to display
  const phrases = [
    'Who we are?',
    'Brother in Arms',
    'What we working on?',
    'Honoring Bravery'
  ];
  
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100; // Base typing speed in milliseconds
  
  function type() {
    // Get the current phrase
    const currentPhrase = phrases[currentPhraseIndex];
    
    // Set typing speed based on whether we're typing or deleting
    if (isDeleting) {
      typingSpeed = 50; // Faster when deleting
    } else {
      // Slower when typing, random variance for natural feel
      typingSpeed = 150 + Math.random() * 100;
    }
    
    // If deleting, remove characters
    if (isDeleting) {
      // Slice the current phrase up to the current character index
      typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
      currentCharIndex--;
      
      // If we've deleted everything, move to the next phrase
      if (currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        
        // Pause before starting to type the next phrase
        typingSpeed = 900;
      }
    }
    // If typing, add characters
    else {
      // Slice the current phrase up to the current character index
      typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
      currentCharIndex++;
      
      // If we've typed the entire phrase, start deleting after a pause
      if (currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        
        // Pause before starting to delete
        typingSpeed = 2000;
      }
    }
    
    // Schedule the next update
    setTimeout(type, typingSpeed);
  }
  
  // Start the typewriter effect
  type();
}