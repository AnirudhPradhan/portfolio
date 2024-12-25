"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});
// Slider functionality
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const sliderContainer = document.querySelector('.slider-container');
let autoSlideInterval;

// Function to show the next slide
function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  const offset = -currentIndex * 100;
  sliderContainer.style.transform = `translateX(${offset}%)`;
}

// Function to start auto-scrolling
function startAutoScroll() {
  autoSlideInterval = setInterval(showNextSlide, 3000);
}

// Function to stop auto-scrolling
function stopAutoScroll() {
  clearInterval(autoSlideInterval);
}

// Automatically change slides every 3 seconds
startAutoScroll();

// Stop auto-scrolling when the mouse enters the image
sliderContainer.addEventListener('mouseenter', stopAutoScroll);

// Start auto-scrolling when the mouse leaves the image
sliderContainer.addEventListener('mouseleave', startAutoScroll);


// JavaScript to scroll testimonials on mouse scroll
const testimonialsList = document.querySelector('.testimonials-list');
let scrollTimeout;

testimonialsList.addEventListener('wheel', function(e) {
  // Prevent default scroll behavior
  e.preventDefault();

  // Clear the previous timeout to ensure smooth scrolling
  clearTimeout(scrollTimeout);

  // Check the scroll direction
  const isScrollingDown = e.deltaY > 0;

  // Scroll the testimonials container based on direction
  scrollTimeout = setTimeout(() => {
    if (isScrollingDown) {
      testimonialsList.scrollBy({ left: 300, behavior: 'smooth' }); // Scroll to the right (next testimonial)
    } else {
      testimonialsList.scrollBy({ left: -300, behavior: 'smooth' }); // Scroll to the left (previous testimonial)
    }
  }, 100);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};
const clientsList = document.querySelector('.clients-list');

clientsList.addEventListener('wheel', function(e) {
  // Prevent default scroll behavior
  e.preventDefault();

  // Scroll the container horizontally based on scroll direction
  if (e.deltaY > 0) {
    clientsList.scrollBy({ left: 300, behavior: 'smooth' }); // Scroll to the right
  } else {
    clientsList.scrollBy({ left: -300, behavior: 'smooth' }); // Scroll to the left
  }
});

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// Event listener for form submission
form.addEventListener("submit", function (event) {
  FormData.forEach((value, key) => {
    console.log(key, value);
  });
  // event.preventDefault(); // Prevent default form submission

  // // Collect form data
  // const formData = new FormData(form);

  // // Convert formData to JSON object
  // const formDataJson = {};
  // formData.forEach((value, key) => {
  //     formDataJson[key] = value;
  // });

  // // Example endpoint URL
  // const apiUrl = 'https://example.com/api/submit';

  // // Example POST request with fetch
  // fetch(apiUrl, {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formDataJson),
  // })
  // .then(response => {
  //     if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  // })
  // .then(data => {
  //     console.log('Success:', data);
  //     // Optionally handle success response here
  // })
  // .catch(error => {
  //     console.error('Error:', error);
  //     // Optionally handle error here
  // });
});

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}