console.log("index.js is loaded");

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("skillcontent"); 
  if (n < 1) { slideIndex = slides.length; }
  else if(n > slides.length) {slideIndex = 1; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  console.log(slideIndex);
  slides[slideIndex - 1].style.display = "block";
}