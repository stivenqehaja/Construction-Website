// Handling the Menu Button appearance responsivity
document.addEventListener('DOMContentLoaded', function() {
   let navbar = document.querySelector('.header .navbar');
   let contactInfo = document.querySelector('.contact-info');
   let closeContactInfoBtn = document.querySelector('#close-contact-info');
   let menuButton = document.querySelector("#menu-btn");
   let infoButton = document.querySelector("#info-btn");
   
   menuButton.onclick = () => {
      navbar.classList.toggle('active');
   };

   infoButton.onclick = () => {
      contactInfo.classList.toggle('active');
   };

   closeContactInfoBtn.onclick = () => {
      contactInfo.classList.remove('active');
   };

   // Close contact-info if clicked outside of it
   window.addEventListener('click', function(event) {
      if (!contactInfo.contains(event.target) && !document.querySelector('#info-btn').contains(event.target)) {
         contactInfo.classList.remove('active');
      }
   });

   //Close the Hamburger menu on Smaller Resolution Media whenh clicking outside the navbar
   window.addEventListener('click', function(event) {
      if (!navbar.contains(event.target) && !menuButton.contains(event.target)) {
         navbar.classList.remove('active');
      }
   });

   window.onscroll = () => {
      navbar.classList.remove('active');
      contactInfo.classList.remove('active');
   };
});
// Swiper Animation Functionality
var swiper = new Swiper(".home-slider", {
   loop: true,
   grabCursor: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
         slidesPerView: 1
      },
      768: {
         slidesPerView: 2
      },
      991: {
         slidesPerView: 3
      },
   }
});

var swiper = new Swiper(".blogs-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
         slidesPerView: 1
      },
      768: {
         slidesPerView: 2
      },
      991: {
         slidesPerView: 3
      },
   }
});

var swiper = new Swiper(".logo-slider", {
   loop: true,
   grabCursor: true, 
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2
      },
      640: {
         slidesPerView: 3
      },
      768: {
         slidesPerView: 4
      },
      1000: {
         slidesPerView: 5
      },
   }
});

