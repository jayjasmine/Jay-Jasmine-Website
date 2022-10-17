//Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-menu__link");

//Hamburger Functions
hamburger.addEventListener("click", mobileMenu);
navLink.forEach(l => l.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// animated Section
const elements = document.querySelectorAll('.animated')

// element callback function
const elementObserverCallback = (elementsToWatch, elementObserver) => {
  elementsToWatch.forEach(elementToWatch => {
    if(elementToWatch.isIntersecting){
      elementToWatch.target.classList.add('fadeInBottom');
      // elementOberserver.unobserve(elementToWatch.target);
    }

  })
}

//element options
const elementObserverOptions = {
  // threshold: .8
};
//element observer


//element obsever 
const elementObserver = new IntersectionObserver(elementObserverCallback, elementObserverOptions);

//element observer on elements
elements.forEach(element => {
  elementObserver.observe(element);
})