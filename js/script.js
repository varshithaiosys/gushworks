$(document).ready(function(){
const header = document.getElementById("header");

let lastScroll = 0;
window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;
    // After first fold
    if (currentScroll > window.innerHeight) {
        header.classList.add("sticky");
        // Scrolling down
        if (currentScroll > lastScroll) {
            header.classList.remove("hide-sticky");
        }
        // Scrolling up
        else {
            header.classList.add("hide-sticky");
        }
    } else {

        header.classList.remove("sticky");
        header.classList.remove("hide-sticky");

    }
    lastScroll = currentScroll;
});


const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

openMenu.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  document.body.style.overflow = "auto";
});

/* banner slider starts from here  */

  $('.image-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: '<div class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></div>',
  });

  // THUMB CLICK → change slide
  $('.thumb-slider img').on('click', function(){
    var index = $(this).data('index');
    $('.image-slider').slick('slickGoTo', index);
  });

  // ACTIVE STATE SYNC
  $('.image-slider').on('afterChange', function(event, slick, currentSlide){
    $('.thumb-slider img').removeClass('active');
    $('.thumb-slider img').eq(currentSlide).addClass('active');
  });

  /* banner slider ends here  */

  /*--- versatile application slider starts from here ---*/
  
  $('.center-sliders').slick({
    centerMode: true,
        centerPadding: '323px',
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: false,
    arrows: true,
     prevArrow: '<div class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></div>',
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,

     responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 2,
                centerPadding: '200px',
                arrows: true
            }
        },

        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                centerPadding: '120px',
                arrows: true
            }
        },

        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '120px',
                arrows: true
            }
        },

        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '30px',
                arrows: true
            }
        }
    ]

});

/*---- versatile Applications ends here --*/

/*--- sponser sliders sstarts from here ---*/

$('.sponser-imgs-box').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 3
      }
    }
  ]
});

});

/*--- sponser sliders ends here ---*/

/*--- stepper code starts from here ----*/


  // Step Data Model Arrays
const stepsData = [
    {
        title: "High-Grade Raw Material Selection",
        desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
        bullets: ["PE100 grade material", "Optimal molecular weight distribution"],
        img: "images/fishing.png"
    },
    {
        title: "Precision Extrusion Processing",
        desc: "State of the art melt extrusion machinery components optimize internal thermodynamic composition profiles safely.",
        bullets: ["Controlled melting temperatures", "Homogeneous composite blending"],
        img: "images/fishing.png"
    },
    {
        title: "High-Grade Raw Material Selection",
        desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
        bullets: ["PE100 grade material", "Optimal molecular weight distribution"],
        img: "images/fishing.png"
    },
    {
        title: "Precision Extrusion Processing",
        desc: "State of the art melt extrusion machinery components optimize internal thermodynamic composition profiles safely.",
        bullets: ["Controlled melting temperatures", "Homogeneous composite blending"],
        img: "images/fishing.png"
    },
    {
        title: "High-Grade Raw Material Selection",
        desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
        bullets: ["PE100 grade material", "Optimal molecular weight distribution"],
        img: "images/fishing.png"
    },
    {
        title: "Precision Extrusion Processing",
        desc: "State of the art melt extrusion machinery components optimize internal thermodynamic composition profiles safely.",
        bullets: ["Controlled melting temperatures", "Homogeneous composite blending"],
        img: "images/fishing.png"
    },
    {
        title: "High-Grade Raw Material Selection",
        desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
        bullets: ["PE100 grade material", "Optimal molecular weight distribution"],
        img: "images/fishing.png"
    },
    {
        title: "Precision Extrusion Processing",
        desc: "State of the art melt extrusion machinery components optimize internal thermodynamic composition profiles safely.",
        bullets: ["Controlled melting temperatures", "Homogeneous composite blending"],
        img: "images/fishing.png"
    }
    // Add additional phase indices objects (3-8) here matching design configurations
];

let currentIdx = 0;

// Element Selectors
const titleEl = document.querySelector('.content-title');
const descEl = document.querySelector('.content-desc');
const bulletList = document.querySelector('.bullet-list');
const imageEl = document.querySelector('.display-img');
const badgeNum = document.getElementById('current-step-num');
const timelineButtons = document.querySelectorAll('.step-btn');

function updateUI(index) {
    const data = stepsData[index];
    if(!data) return;

    // Update Content
    titleEl.textContent = data.title;
    descEl.textContent = data.desc;
    imageEl.src = data.img;
    badgeNum.textContent = index + 1;

    // Rebuild Bullets
    bulletList.innerHTML = '';
    data.bullets.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        bulletList.appendChild(li);
    });

    // Toggle Desktop Navigation Bar Styles
    timelineButtons.forEach((btn, idx) => {
        if(idx === index) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Navigation event triggers
function nextStep() {
    if (currentIdx < stepsData.length - 1) {
        currentIdx++;
        updateUI(currentIdx);
    }
}

function prevStep() {
    if (currentIdx > 0) {
        currentIdx--;
        updateUI(currentIdx);
    }
}

// Bind Click Listeners to Navigation Arrows and Buttons
document.getElementById('next-btn').addEventListener('click', nextStep);
document.getElementById('prev-btn').addEventListener('click', prevStep);
document.getElementById('footer-next-btn').addEventListener('click', nextStep);
document.getElementById('footer-prev-btn').addEventListener('click', prevStep);

// Bind Desktop Horizontal Steps Click Layout
timelineButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if(index < stepsData.length) { 
            currentIdx = index;
            updateUI(currentIdx);
        }
    });
});


/*--- stepper code ends here -----*/

