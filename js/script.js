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
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
})
window.onscroll = function() {navBg()};
function navBg() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav").classList.add("navbar-dark");
        document.getElementById("nav").classList.add("bg-dark");
        document.getElementById("nav-bg").classList.add("clr-dark");
    } else {
        document.getElementById("nav").classList.remove("navbar-dark");
        document.getElementById("nav").classList.remove("bg-dark");
        document.getElementById("nav-bg").classList.remove("clr-dark");
    }
}
$('.navbar-toggler').click(function(){
if (!$('#top-nav').hasClass('show')) {
	// alert('zzz');
	$('#nav-bg, #nav').css({
		'background-color': '#343a40'
	});
} else {
	$('#nav-bg, #nav').css({
		'background-color': 'transparent'
	});
}
});

});