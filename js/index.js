//Navigation bar effects on scroll
document.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky" , window.scrollY > 0);
});

//Services section - Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnMoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnMoreBtns.forEach(function(learnMoreBtn , i){
    learnMoreBtn.addEventListener("click",function(){
        modal(i);
    });
});

modalCloseBtns.forEach(function(modalCloseBtn){
    modalCloseBtn.addEventListener("click",function(){
        serviceModals.forEach(function(modalView){
            modalView.classList.remove("active");
        });
    });
});

//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach(function(imgCard , i){
    imgCard.addEventListener("click",function(){
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach(function(portfolioCloseBtn){
    portfolioCloseBtn.addEventListener("click",function(){
        portfolioModals.forEach(function(portfolioModalView){
            portfolioModalView.classList.remove("active");
        });
    });
});

//Our clients - Swiper
var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//Website dark/light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = function(){ document.body.classList.contains("dark-theme") ? "dark" : "light"; }
    

const getCurrentIcon = function(){ themeBtn.body.classList.contains("sun") ? "sun" : "moon"; }
    
const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

document.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;    
});

//Navigation menu items active on page scroll
document.addEventListener("scroll",function(){
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;             //set the page in verticle direction

    sections.forEach(function(current){
        let sectionHeight = current.offsetHeight;  // returns the viewable height of an element (in pixels), including padding, border and scrollbar, but not the margin.
                                                   //It reads only id.

        let sectionTop = current.offsetTop - 50;  //return the height in pixels from the top
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
      
});

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", function(){
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", function(){
    navigation.classList.remove("active");
});

navItems.forEach(function(navItem){
    navItem.addEventListener("click", function(){
        navigation.classList.remove("active");
    });
});

//Scroll reveal animations
//Common reveal options to create reveal animations
ScrollReveal({ 
    // reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
 });

//Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 500, origin: 'left' });    
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 600, origin: 'right' });    
ScrollReveal().reveal('.home .info .btn', { delay: 700, origin: 'bottom' });    
ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 500, origin: 'left', interval: 200 });       
ScrollReveal().reveal('.home-img, .about-img', { delay: 500, origin: 'bottom' });    
ScrollReveal().reveal('.about .description, .contact-right', { delay: 600, origin: 'right' });    
ScrollReveal().reveal('.about .professional-list li', { delay: 500, origin: 'right', interval:200 });    
ScrollReveal().reveal('.skills-description, .services-description, .contact-card, .client-swiper, .contact-left h2', 
{ delay: 700, origin: 'left' });    
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card', 
{ delay: 800, origin: 'bottom', interval: 200 });    
ScrollReveal().reveal('footer .group', { delay: 500, origin: 'top', interval: 200 });
    