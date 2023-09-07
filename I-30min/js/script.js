// document.body.onload = function () {
//     nbr = 3;
//     p = 0; 
//     item = document.getElementsByClassName("item");

//     for (i=1; i<=nbr; i++){
//         div = document.createElement("div");
//         div.className="photo";
//         div.style.backgroundImage = "url('../images/cars/+"i"+png')";
//     }
// }




let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {

    let i;
    let slides = document.getElementsByClassName("slides");

    if (n > slides.length) {slideIndex = 1}

    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {

      slides[i].style.display = "none";

    }
    slides[slideIndex-1].style.display = "block";
}
