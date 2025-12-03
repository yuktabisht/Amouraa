//loader

const loader = document.getElementById('loader');
  const video = document.querySelector('#loader video');

  let videoEnded = false;
  let pageLoaded = false;

  // When video finishes
  video.addEventListener('ended', function() {
    videoEnded = true;
    checkDone();
  });

  // When page fully loads
  window.addEventListener('load', function() {
    pageLoaded = true;
    checkDone();
  });

  // If video fails to autoplay, force it to play
  video.play().catch(() => {
    // Some browsers block autoplay, so force it muted
    video.muted = true;
    video.play();
  });

  // When both are done, hide loader
  function checkDone() {
    if (videoEnded && pageLoaded) {
      loader.classList.add('fade-out');
    }
  }



//application
  const appointmentModal = document.getElementById('appointmentModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const appointmentForm = document.getElementById('appointmentForm');
  const confirmationMessage = document.getElementById('confirmationMessage');

  function openAppointmentModal() {
    appointmentModal.classList.add('active');
    confirmationMessage.style.display = 'none';
    appointmentForm.style.display = 'block';
    appointmentForm.reset();
  }

  modalCloseBtn.addEventListener('click', () => {
    appointmentModal.classList.remove('active');
  });

  appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const phone = appointmentForm.phone.value.trim();
    if (!/^\d{10}$/.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      appointmentForm.phone.focus();
      return;
    }

    appointmentForm.style.display = 'none';
    confirmationMessage.style.display = 'block';
  });




//car thing

let lastScrollTop = window.scrollY;

const car = document.getElementById("scrollCar");
const carText = document.getElementById("carText");
const carTextContent = carText.querySelector("p");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Increase multiplier to reach 65vw faster
  const offset = (scrollY - 600 * window.innerHeight / 100) / window.innerHeight;
  const move = Math.min(Math.max(offset * 70, 0), 50); // faster: multiplier changed from 20 → 45

  car.style.transform = `translateX(${move}vw)`;
carText.style.transform = `translateX(${move}vw)`;


  // Scroll direction check for text
  const threshold = 65 * 0.4; // 90% of 65vw = 58.5vw

if (move > threshold) {
  carTextContent.innerHTML = "BOOK <br> YOUR <br> APPOINTMENT";
} else {
  carTextContent.innerHTML = "LUXURY <br> AWAITS <br> YOU";
}
  lastScrollTop = scrollY <= 0 ? 0 : scrollY;
});






//our product buttons starts
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
//our product buttons ends

//our product heading starts
document.addEventListener('DOMContentLoaded', 
    function(){
      new Typed('.entry', {
        strings: ["Our Products", "Our Products", "Our Products", "Our Products"],
        typeSpeed: 50,
		  backspeed: 50,
		  loop:true,
      });
  });
//our product heading ends


//panaromic view

const scrollTexts = document.querySelectorAll(".scroll-text");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  
  scrollTexts.forEach((el, i) => {
    const direction = parseInt(el.dataset.direction);
    const offset = scrollY * 0.05 * direction; // adjust multiplier for subtlety
    el.style.transform = `translateX(${offset}px)`;
  });
});



// panaroma image//

const container = document.querySelector('.panorama-container');
const image = document.querySelector('.panorama-image');
const indicator = document.querySelector('.panorama-indicator');

container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const percent = mouseX / rect.width;

  const imageWidth = image.offsetWidth;
  const containerWidth = container.offsetWidth;

  const maxTranslate = imageWidth - containerWidth;
  const translateX = -percent * maxTranslate;

  image.style.transform = `translateX(${translateX}px)`;

  // Move the indicator in sync
  indicator.style.left = `${percent * 100}%`;
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



//1st slide


const wrapper = document.querySelector(".slider-wrapper");
const slide2 = document.getElementById("slide2");
const hSlider = document.getElementById("hSlider");
const totalSlides = hSlider?.children.length || 0;
let currentHSlide = 0;

function scrollToSlide2() {
  document.querySelector('.slider-wrapper').style.transform = 'translateY(-100vh)';
}

function scrollToSlide1() {
  wrapper.style.transform = "translateY(0)";
}

function updateHorizontal() {
  hSlider.style.transform = `translateX(-${currentHSlide * 100}vw)`;
}

document.addEventListener("keydown", (e) => {
  const inView = slide2.getBoundingClientRect().top < window.innerHeight / 2;

  if (inView) {
    if (e.key === "ArrowRight" && currentHSlide < totalSlides - 1) {
      currentHSlide++;
      updateHorizontal();
    } else if (e.key === "ArrowLeft" && currentHSlide > 0) {
      currentHSlide--;
      updateHorizontal();
    } else if (e.key === "ArrowUp") {
      scrollToSlide1();
    }
  }
});

window.addEventListener("wheel", (e) => {
  const inView = slide2.getBoundingClientRect().top < window.innerHeight / 2;
  if (e.deltaY < 0 && inView) {
    scrollToSlide1();
  }
});

document.getElementById("leftBtn").addEventListener("click", () => {
  if (currentHSlide > 0) {
    currentHSlide--;
    updateHorizontal();
  }
});

document.getElementById("rightBtn").addEventListener("click", () => {
  if (currentHSlide < totalSlides - 1) {
    currentHSlide++;
    updateHorizontal();
  }
});
