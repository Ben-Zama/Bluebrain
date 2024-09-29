/* Hamburger and Sidebar */

var hamburger = document.getElementById("hamburger")
var sidebar = document.getElementById("sidebar")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  sidebar.classList.toggle("-left-full")
  sidebar.classList.toggle("left-0")
  sidebar.classList.toggle("border-r-2")
})

/* Carousel */

document.addEventListener('DOMContentLoaded', function () {
  var carousel = document.getElementById("carousel-inner")
var items = document.querySelectorAll(".carousel-item")
var dotsContainer = document.getElementById("dots")
const totalItems = items.length
let currentIndex = 0
const intervalDuration = 5000
let interval

function createdots() {
  for (let i = 0; i < totalItems; i++) {
    const dot = document.createElement("div")
    dot.classList.add("dot")
    dot.addEventListener("click", () => goToSlide(i))
    dotsContainer.appendChild(dot)
  }
  updatedots()
}

function updatedots() {
  const dots = document.querySelectorAll(".dot")
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex)
  })
}

function moveToNextSlide() {
  currentIndex = (currentIndex + 1) % totalItems
  const offset = -currentIndex * 100
  carousel.style.transform = `translateX(${offset}%)`
  updatedots()
}

function goToSlide(index) {
  currentIndex = index
  const offset = -currentIndex * 100
  carousel.style.transform = `translateX(${offset}%)`
  updatedots()
  resetInterval()
}

function startInterval() {
  interval = setInterval(moveToNextSlide, intervalDuration)
}

function resetInterval() {
  clearInterval(interval)
  startInterval()
}

createdots()
startInterval()
})

/* Footer year */

document.getElementById("year").innerHTML = new Date().getFullYear()

/* Header hide on scroll */

/* const header = document.getElementById('header');
const targetElement = document.getElementById('intersection');

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Target element is in the viewport, show the header
      header.classList.add('header-hidden');
    } else {
      // Target element is out of the viewport, hide the header
      header.classList.remove('header-hidden');
    }
  });
};

const observer = new IntersectionObserver(observerCallback, {
  root: null, // Viewport
  threshold: 0.1 // Trigger when 10% of the element is visible
});

// Start observing the target element
observer.observe(targetElement);

var body = document.getElementById('body');
body.onscroll = function() {
    targetElement.style.display = 'block';
}
body.onscrollend = function() {
    targetElement.style.display = 'none'
} */

/* Modal close function */

document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById("modal")
  var modalclose = document.getElementById("modalclose")

  modalclose.addEventListener("click", () => {
    modal.classList.add("top-full")
    modal.classList.remove("top-0")
  })

  /* Pastwork desktop manual navigation */

  var moveleft = document.getElementById("pastwork-move-left")
  var moveright = document.getElementById("pastwork-move-right")
  var scrollcontainer = document.getElementById("sub-pastwork").scrollBy

  moveleft.addEventListener("click", () => {
    document.getElementById("sub-pastwork").scrollBy({
      left: -200,
      behavior: "smooth",
    })
  })
  moveright.addEventListener("click", () => {
    document.getElementById("sub-pastwork").scrollBy({
      left: 200,
      behavior: "smooth",
    })
  })
})

//team carousel

document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".team-carousel");

  carousels.forEach((carousel, index) => {
      const slides = carousel.children;
      const totalSlides = slides.length;
      let currentIndex = 0;
      const dotsContainer = document.querySelectorAll(".team-dots-container")[index];
      let autoScrollInterval;

      const createDots = () => {
          for (let i = 0; i < Math.ceil(totalSlides / getVisibleSlides()); i++) {
              const dot = document.createElement("span");
              dot.classList.add("team-dot");
              dot.dataset.index = i;
              dot.addEventListener("click", () => {
                  clearInterval(autoScrollInterval);  // Stop auto-scrolling on dot click
                  currentIndex = i * getVisibleSlides();
                  updateCarousel();
                  restartAutoScroll(); // Restart auto-scrolling after dot click
              });
              dotsContainer.appendChild(dot);
          }
          updateDots();
      };

      const updateDots = () => {
          const dots = dotsContainer.querySelectorAll(".team-dot");
          dots.forEach((dot, idx) => {
              if (idx === Math.floor(currentIndex / getVisibleSlides())) {
                  dot.classList.add("team-dot-active");
              } else {
                  dot.classList.remove("team-dot-active");
              }
          });
      };

      const getVisibleSlides = () => {
          const width = window.innerWidth;
          if (width >= 1200) return 3;  // Large screen: 3 slides
          if (width >= 768) return 2;   // Medium screen: 2 slides
          return 1;                      // Small screen: 1 slide
      };

      const updateCarousel = () => {
          const slideWidth = 100 / getVisibleSlides();
          carousel.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
          updateDots();
      };

      const autoScroll = () => {
          currentIndex = (currentIndex + 1) % totalSlides;
          if (currentIndex >= totalSlides - getVisibleSlides() + 1) currentIndex = 0;
          updateCarousel();
      };

      const startAutoScroll = () => {
          autoScrollInterval = setInterval(autoScroll, 3000);  // 3 seconds per slide
      };

      const restartAutoScroll = () => {
          clearInterval(autoScrollInterval);  // Clear the previous interval
          startAutoScroll();                  // Restart auto-scrolling
      };

      startAutoScroll(); // Start auto-scroll initially

      window.addEventListener("resize", () => {
          updateCarousel();  // Recalculate positions on resize
      });

      createDots();
  });
});

// Readmore

let aboutContentSubCont = document.getElementById("about-content-sub-cont")
let acscHeight = aboutContentSubCont.clientHeight

let aboutContentCont = document.getElementById("about-content-cont")
let accHeight = aboutContentCont.clientHeight

let readMore = true

let rdmr = document.getElementById("rdmr")
rdmr.addEventListener("click", () => {
  if (readMore) {
    aboutContentCont.style.height = `${acscHeight + "px"}`
    aboutContentCont.classList.remove("fade")
    rdmr.innerHTML = "Show less"
  } else {
    aboutContentCont.style.height = "200px"
    aboutContentCont.classList.add("fade")
    rdmr.innerHTML = "Read more"
  }
  readMore = !readMore
})

window.addEventListener("resize", function () {
  let realTimeHeightChild = aboutContentSubCont.clientHeight
  accHeight = aboutContentCont.clientHeight

  if (accHeight > 600) {
    aboutContentCont.style.height = `${realTimeHeightChild + "px"}`
  }
})
