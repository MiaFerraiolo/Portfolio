$(document).ready(function () {
  $(".contact-tiles").fadeIn();
});

$(document).ready(function () {
  $(".clickmenu").click(function () {
    $(".red, .orange, .yellow").toggleClass("spin");
    $("#mobile-navbar").fadeToggle();
    $("#mobile-navbar, .clickmenu, body").toggleClass("clicked");
  });
  $("#navbar .mini-menu").hover(function () {
    $(this).closest(".mini-menu").find(".link-wrapper").toggle();
    $(this).closest(".mini-menu").find(".menu-title").toggleClass("hover");
    $(this)
      .closest(".mini-menu")
      .find(".menu-title .fa")
      .toggleClass("fa-angle-down");
    $(this)
      .closest(".mini-menu")
      .find(".menu-title .fa")
      .toggleClass("fa-angle-up");
  });
});

$(function(){
  var fixHeader = $('.navigation').offset().top;
  $(window).scroll(function(){
    if( $(window).scrollTop() > fixHeader ) {
      $(".navigation").addClass("scroll");
    } else {
      $(".navigation").removeClass("scroll");
    } 
  });
});

$(function(){
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 400,
        gutter: 25 
    });
});

var slideIndex = 1;
showSlide(slideIndex);

function openLightbox() {
  document.getElementById('Lightbox').style.display = 'block';}

function closeLightbox() {
  document.getElementById('Lightbox').style.display = 'none';}

function changeSlide(n) {
  showSlide(slideIndex += n);}

function toSlide(n) {
  showSlide(slideIndex = n);}

function showSlide(n) {

  const slides = document.getElementsByClassName('slide');

  if (n > slides.length) {
    slideIndex = 1; 
  }
  
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }  
  slides[slideIndex - 1].style.display = 'block';
  modalPreviews[slideIndex - 1].className += ' active';
  $(document).ready(function () {

  $(".modal, .close").click(function () {
  document.getElementById('Lightbox').style.display = 'none';
  });
});
}