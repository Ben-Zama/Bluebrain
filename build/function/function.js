/* Hamburger and Sidebar */

var hamburger = document.getElementById("hamburger")
var sidebar = document.getElementById("sidebar")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  sidebar.classList.toggle("-left-full")
  sidebar.classList.toggle("left-0")
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

/* Modal close function */

document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById("modal")
  var modalclose = document.getElementById("modalclose")

  modalclose.addEventListener("click", () => {
    modal.classList.add("top-full")
    modal.classList.remove("top-0")
  })

  // Team carousel

    const teamCarousel = document.querySelector('.team-carousel')
    const slides = document.querySelectorAll('.team-carousel .team-person')
    const dots = document.querySelectorAll('.team-dots-container .team-dot')  
    let currentIndex = 0
    let autoScrollInterval;

    if (window.innerWidth < 700) {
      function updateCarousel(index) {
        const slideWidth = slides[0].offsetWidth + 20; // Slide width + gap
        const offset = slideWidth * index;
  
        teamCarousel.scrollTo({
          left: offset,
          behavior: 'smooth',
        });
  
  
        dots.forEach(dot => dot.classList.remove('team-dot-active'));
        dots[index].classList.add('team-dot-active');
  
        currentIndex = index;
  
      }
      function autoScroll() {
        autoScrollInterval = setInterval(() => {
          let newIndex = (currentIndex + 1) % slides.length;
  
          updateCarousel(newIndex)
        }, 5000);
      }
  
      function resetAutoScroll() {
        clearInterval(autoScrollInterval);
        autoScroll();
      }
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          updateCarousel(index);
          resetAutoScroll();
        })
      })
  
      autoScroll();
    }

  // Pastwork desktop manual navigation

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
