// Global Variables
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const questions = document.querySelectorAll(".question");
const menuItems = document.querySelectorAll(".menu-item");
const logo = document.getElementById('logo');


// Event Listeners

menuButton.addEventListener('click', () => {
  menu.classList.toggle('visible'); // Toggle Menu
  logo.classList.toggle('fixed');  // Toggle fixed logo in Menu
});

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        menu.classList.toggle('visible'); // Toggle Menu when Menu Item is clicked
    })
})

document.addEventListener('click', (event) => {
    if (menu.classList.contains('visible') && isClickOutsideMenu(event)) {
      menu.classList.remove('visible'); // Close menu when clicking outside
      logo.classList.remove('fixed');  // Reset logo position
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

//Helper Functions

// Function to check if click is outside the menu
function isClickOutsideMenu(event) {
    return !menu.contains(event.target) && event.target !== menuButton;
  }

