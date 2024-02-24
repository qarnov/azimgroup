var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var index = 0;
var slideInterval = setInterval(nextSlide, 30000); // Auto slide change interval: 30 seconds

function prevSlide(n){
  index += n;
  changeSlide();
}

function nextSlide(){
  index++;
  changeSlide();
}

function changeSlide(){  
  if(index > slides.length - 1)
    index = 0;
  if(index < 0)
    index = slides.length - 1;
    
  for(let i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  
  slides[index].style.display = "block";
  dots[index].classList.add("active");
  
  // Show caption in center
  var caption = slides[index].querySelector('.caption');
  if (caption) {
    caption.style.top = (slides[index].offsetHeight - caption.offsetHeight) / 2 + 'px';
    caption.style.left = (slides[index].offsetWidth - caption.offsetWidth) / 2 + 'px';
  }
}

// Event listeners for controls
document.getElementById("left-arrow").addEventListener("click", function() {
  prevSlide(-1);
  clearInterval(slideInterval); // Reset interval on manual control
  slideInterval = setInterval(nextSlide, 30000); // Restart interval
});

document.getElementById("right-arrow").addEventListener("click", function() {
  nextSlide(1);
  clearInterval(slideInterval); // Reset interval on manual control
  slideInterval = setInterval(nextSlide, 30000); // Restart interval
});

// Initial slide change
changeSlide();
