/**
 * Sets up the donation form functionality
 */
import { createPopup } from './popup.js';

export function setupDonation() {
  // Find donation amount buttons
  const donationButtons = document.querySelectorAll('.donation-amount-btn');
  const customAmountInput = document.querySelector('.donation-custom-amount input');
  const donateButton = document.querySelector('.donation-btn');
  
  // Set default amount
  let selectedAmount = '$0';
  
  // Add click handlers to donation buttons
  if (donationButtons.length > 0) {
    donationButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        donationButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get amount from button text
        selectedAmount = `$${this.textContent.replace('$', '')}`;
        
        // Set the selected amount in the custom input field
        if (customAmountInput) {
          customAmountInput.value = selectedAmount;
        }
      });
    });
  }
  
  // Handle custom amount input
  if (customAmountInput) {
    customAmountInput.addEventListener('input', function() {
      // Remove active class from all buttons when typing custom amount
      donationButtons.forEach(btn => btn.classList.remove('active'));
      
      // Update selected amount
      selectedAmount = `$${this.value}`;
    });
  }
  
  // Handle donate button click
  if (donateButton) {
    donateButton.addEventListener('click', function() {
      if (selectedAmount) {
        // Create thank you popup
        const popupContent = `
          <div class="thank-you-popup">
            <h3>Thank You!</h3>
            <p>Your donation of ${selectedAmount} CAD is greatly appreciated.</p>
            <p>Your generosity helps us maintain the memorial and continue our important work.</p>
          </div>
        `;
        
        const popup = createPopup(popupContent, 'donation-thank-you');
        popup.show();
      } else {
        alert("Please select or enter a donation amount.");
      }
    });
  }
}
