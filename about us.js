// JavaScript Document


//moving text
const scrollTexts = document.querySelectorAll(".scroll-text");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  
  scrollTexts.forEach((el, i) => {
    const direction = parseInt(el.dataset.direction);
    const offset = scrollY * 0.06 * direction; // adjust multiplier for subtlety
    el.style.transform = `translateX(${offset}px)`;
  });
});


//slider 1 section


const slide_s = document.querySelectorAll('.slide_s');
const topText = document.getElementById('topText');
const middleText = document.getElementById('middleText');
const bottomText = document.getElementById('bottomText');

const topTexts = [
  "THE LIFT LEADS TO THE OPEN TERRACE OF THE STYLOBATE. ITS AREA IS LARGER THAN A TENNIS COURT, BUT IT IS DEDICATED TO SOCIALISING AND CONTEMPLATION.",
	
  "THE MARBLE, NOBLE BRASS AND NATURAL WOOD FINISHES SET A HIGH AESTHETIC STANDARD FOR A building OF THIS CALIBRE.",
	
  "SPECIALISTS FROM HAAST HAVE USED METAL DETAILS, COPPER AND BRASS COLOURS, TO CREATE A LOBBY FULL OF RELAXATION AND HOMELINESS",
	
  "THE ENTRANCE TO THE RESIDENTIAL PART OF THE BUILDINGS IS THROUGH AUTOMATIC SLIDING DOORS OF A SPACIOUS ENTRANCE HALL WITH A GRAND LOBBY.",
	
  "INTELLIGENT AND WEIGHTLESS, ENITEO ARCHITECTURE HAS BECOME AN EPIGRAPH FOR THE DESIGN OF PUBLIC SPACES." ];

const middleTexts = [
  "Designer lobby",
  "Play zone",
  "Private lobbies",
  "Stroller room",
  "Pet washing room"
];

const bottomTexts = [
  "1/5",
  "2/5",
  "3/5",
  "4/5",
  "5/5"
];

let current = 0;

function showSlide_s(index) {
  slide_s.forEach((slide_s, i) => {
    slide_s.classList.toggle('active', i === index);
  });

  topText.textContent = topTexts[index];
  middleText.textContent = middleTexts[index];
  bottomText.textContent = bottomTexts[index];
}

document.getElementById('nextBtn').addEventListener('click', () => {
  current = (current + 1) % slide_s.length;
  showSlide_s(current);
});

document.getElementById('prevBtn').addEventListener('click', () => {
  current = (current - 1 + slide_s.length) % slide_s.length;
  showSlide_s(current);
});

showSlide_s(current);


//apartment text

  document.addEventListener('DOMContentLoaded', () => {
    const text10 = document.querySelector('.text-10');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of element is visible
      }
    );

    observer.observe(text10);
  });

//last slider starts

const track = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide');
  const slideWidth = slides[0].offsetWidth + 90; // include the 90px gap
  let index = 0;
  let intervalId;

  function moveSlide() {
    index++;
    if (index >= slides.length / 2) {
      index = 0;
    }
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  function startSlider() {
    intervalId = setInterval(moveSlide, 2000); // faster: every 2 seconds
  }

  function stopSlider() {
    clearInterval(intervalId);
  }

  // Start autoplay
  startSlider();

  // Pause on hover
  slides.forEach(slide => {
    slide.addEventListener('mouseenter', stopSlider);
    slide.addEventListener('mouseleave', startSlider);
  });



//image 6 and 7 ke liye parallax

document.querySelectorAll('.parallax-container').forEach(container => {
  const image = container.querySelector('.parallax-hover');
  const intensity = parseFloat(container.dataset.intensity) || 10; // default 10 if not set

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * intensity;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * intensity;

    image.style.transform = `scale(1.03) rotateX(${-y}deg) rotateY(${x}deg)`;
  });

  container.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
  });
});

//images zoom parallax

window.addEventListener('scroll', () => {
  const container = document.querySelector('.about-image1');
  if (!container) return;

  const img = container.querySelector('img');
  const scrollY = window.scrollY;

  // Zoom calculation: max scale 1.1, adjust zoomSpeed as needed
  const maxZoom = 1.1;
  const zoomSpeed = 0.0005;
  const scale = 1 + Math.min(scrollY * zoomSpeed, maxZoom - 1);

  img.style.transform = `scale(${scale})`;
});


//double-coloured section

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  const text1 = document.querySelector('.double-coloured-1');
  const text2 = document.querySelector('.double-coloured-2');

  if (text1) {
    text1.style.transform = `translateY(${scrollY * 0.07}px)`;
  }

  if (text2) {
    text2.style.transform = `translateY(${scrollY * 0.07}px)`; 
  }
});

//hover wala text parallax
const text = document.querySelector('.text-9');

text.addEventListener('mousemove', (e) => {
  const rect = text.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
  const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;

  text.style.transform = `scale(1.03) rotateX(${-y}deg) rotateY(${x}deg)`;
});

text.addEventListener('mouseleave', () => {
  text.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
});


//up wala button
  window.addEventListener("scroll", function () {
    const upBtn = document.getElementById("up-btn");
    if (window.scrollY > 300) {
      upBtn.style.display = "block";
    } else {
      upBtn.style.display = "none";
    }
  });


