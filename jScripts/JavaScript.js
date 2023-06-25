var imageIndex = 1;
showImages(imageIndex);


function plusSlides(n) {
    showImages(imageIndex += n);
}


function currentSlide(n) {
    showImages(imageIndex = n);
}

function showImages(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { imageIndex = 1 }
    if (n < 1) { imageIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[imageIndex - 1].style.display = "block";
    dots[imageIndex - 1].className += " active";
    captionText.innerHTML = dots[imageIndex - 1].alt;
}