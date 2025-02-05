// Global Variables
const menuButton = document.getElementById('menu-button');
const heroButton = document.getElementById('hero-button')
const menu = document.getElementById('menu');
const questions = document.querySelectorAll(".question");
const menuItems = document.querySelectorAll(".menu-item");
const logo = document.getElementById('logo');
const formControls = document.querySelectorAll(".form-control");
const errorMessages = document.querySelectorAll('.error-message');


// Event Listeners

menuButton.addEventListener('click', () => {
  menu.classList.toggle('visible'); // Toggle Menu
  logo.classList.toggle('fixed'); // Toggle fixed position of Logo
});


menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        menu.classList.toggle('visible'); // Toggle Menu when Menu Item is clicked
        logo.classList.toggle('fixed'); // Toggle fixed position of Logo when Menu Item is clicked
    })
})

heroButton.addEventListener("click", () => {
  this.classList.add("active");
})

document.addEventListener('click', (event) => {
    if (menu.classList.contains('visible') && isClickOutsideMenu(event)) {
      menu.classList.remove('visible'); // Close menu when clicking outside
      logo.classList.remove('fixed'); // Remove fixed logo when clicked outside
    }
  });

questions.forEach((question) => {
    question.addEventListener("click", () => {
        const faqToggle = question.querySelector(".faq-toggle"); // Find the .faq-toggle inside the .question div
        const answer = question.nextElementSibling; // Find the corresponding .answer element

        if (answer.style.display === "none" || answer.style.display === "") {
            answer.style.display = "block"; // Show the answer
            faqToggle.innerHTML = '<i class="fa-solid fa-minus"></i>';   // Change toggle to "-"
        } else {
            answer.style.display = "none"; // Hide the answer
            faqToggle.innerHTML = '<i class="fa-solid fa-plus"></i>';   // Change toggle back to "+"
        }
    });
});


formControls.forEach((formControl, index) => {
  formControl.addEventListener('invalid', (event) => {
    event.preventDefault();

    const input = event.target;

    input.classList.add('error')

    errorMessages.forEach((errorMessage, errorIndex) => {
      if (errorIndex === index) {
        errorMessage.textContent = getCustomMessage(input); // Custom message
        errorMessage.style.display = 'block'; // Show the error message
      }
    });
  });

  // Listen for changes or input corrections
  formControl.addEventListener('input', (event) => {
    const input = event.target;

    if (input.validity.valid) {
      // Hide error message and remove error class if the input is valid
      const errorMessage = errorMessages[index];
      errorMessage.style.display = 'none'; // Hide error message
      input.classList.remove('error'); // Remove error class from input field
    }
  });
});



//Helper Functions

// Function to check if click is outside the menu
  
function isClickOutsideMenu(event) {
      return !menu.contains(event.target) && event.target !== menuButton;
    }

// Get custom error message

function getCustomMessage(input) {
  if (input.id === "first-name") return "First name is required.";
  if (input.id === "last-name") return "Last name is required.";
  if (input.id === "email") return "Please enter a valid business email.";
  if (input.id === "company-type") return "Please select a company type.";
  if (input.id === "hear-about") return "Please let us know how you heard about us.";
  return "This field is required.";
}