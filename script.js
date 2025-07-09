let slideIndex = 0;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
  console.log("current slide "+ n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
function detectDesktopOnMobile(){
  const message = document.getElementById('desktopModeMessage');
  const isMobileDevice = window.innerWidth <= 900;
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobileBrowser = /android|iphone|ipad|ipod|blackberry|windows phone/g.test(userAgent);
  if (isMobileDevice && !mobi|android|iphone/i.test(userAgent) || (isMobileBrowser && window.innerWidth > screen.width * 0.9)){
    message.style.display = 'block';
  } else {
    message.style.display = 'none';
  }
}
window.addEventListener('load', detectDesktopOnMobile);
window.addEventListener('resize', detectDesktopOnMobile);