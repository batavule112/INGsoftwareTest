$( document ).ready(function() {
var mySwiper = new Swiper ('.swiper-container', {
    spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
})
window.onload = function() {navBg()};
window.onscroll = function() {navBg()};
function navBg() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $('#nav').addClass("navbar-dark");
        $('#nav').addClass("bg-dark");
        $('#nav-bg').addClass("clr-dark");
    } else {
        $('#nav').removeClass("navbar-dark");
        $('#nav').removeClass("bg-dark");
        $('#nav-bg').removeClass("clr-dark");
    }
}
$('.navbar-toggler').click(function(){
if (!$('#top-nav').hasClass('show')) {
	$('#nav-bg, #nav').css({
		'background-color': '#343a40'
	});
} else {
	$('#nav-bg, #nav').css({
		'background-color': 'transparent'
	});
}
});
$('.navbar-link').click(function(){
  if ($('.navbar-link').hasClass('active')) {
    $('.navbar-link').removeClass('active');
    $(this).addClass('active');
  }
});
// moglo se resiti sa currentTarget(klasa) + "dodatak" sa 1 event handlom, ali drugom prilikom
$('.home').click(function(){
$("html, body").animate({
  scrollTop: $('.jumbotron').offset().top
}, 1000)
});
$('.services').click(function(){
$("html, body").animate({
  scrollTop: $('.mid').offset().top
}, 1000)
});
$('.about').click(function(){
$("html, body").animate({
  scrollTop: $('.about-us-section').offset().top
}, 1000)
});
$('.contact').click(function(){
$("html, body").animate({
  scrollTop: $('.green-area').offset().top
}, 1000)
});

});