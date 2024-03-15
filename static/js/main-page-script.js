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
document.addEventListener('DOMContentLoaded', function() {
   // Initialize Swiper
   var swiper = new Swiper('.home-slider', {
     // Optional parameters
     direction: 'horizontal',
     loop: true,
     speed: 1000,
     autoplay: {
       delay: 5000,
       disableOnInteraction: false,
     },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
   });
 });