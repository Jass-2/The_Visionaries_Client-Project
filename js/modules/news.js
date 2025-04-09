// Function to handle responsive navigation
function setupNavigation() {
  const navItems = document.querySelectorAll(".ne-nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Handle navigation clicks
      const text = this.textContent.trim();

      // Example navigation logic
      if (text === "About") {
        window.location.href = "about.html";
      } else if (text === "Memorial") {
        window.location.href = "memorial.html";
      } else if (text === "History") {
        window.location.href = "history.html";
      } else if (text === "News & Events") {
        window.location.href = "news-events.html";
      } else if (text === "Contact us") {
        window.location.href = "contact.html";
      }
    });
  });
}

// Function to handle donation button clicks
function setupDonationButtons() {
  const donationButtons = document.querySelectorAll(
    ".ne-donation-btn, .ne-donate-btn",
  );

  donationButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Handle donation button click
      window.location.href = "donation.html";
    });
  });
}

// Function to handle newsletter form submission
function setupNewsletterForm() {
  const newsletterForm = document.querySelector(".ne-newsletter-form");
  const newsletterInput = document.querySelector(".ne-newsletter-input");
  const newsletterBtn = document.querySelector(".ne-newsletter-btn");

  if (newsletterBtn) {
    newsletterBtn.addEventListener("click", function (e) {
      e.preventDefault();

      const email = newsletterInput.value.trim();

      if (email && isValidEmail(email)) {
        // Example: Submit the form or make an API call
        alert("Thank you for subscribing to our newsletter!");
        newsletterInput.value = "";
      } else {
        alert("Please enter a valid email address.");
      }
    });
  }
}

// Helper function to validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Initialize all functionality
export function initializePage() {
  setupNavigation();
  setupDonationButtons();
  setupNewsletterForm();
}
