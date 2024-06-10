$(document).ready(function() {
  $(".nav > ul > li").mouseenter(function(){
    $(".submenu").stop().slideUp(); // Hide all other submenus
    $(this).find(".submenu").stop().slideDown(400); // Show the submenu of the current menu item
  });
  
  $(".nav > ul > li").mouseleave(function(){
    $(this).find(".submenu").stop().slideUp(400); // Hide the submenu when the mouse leaves the menu item
  });
  
  let currentIndex = 0;
  const slides = $('.slide-item');
  const slideCount = slides.length;
  
  function showSlide(index) {
    const newLeft = -index * 800 + 'px';
    $('.slide-cont').animate({ left: newLeft }, 200, function() {
      slides.removeClass('active');
      slides.eq(index).addClass('active');
    });
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    showSlide(currentIndex);
  }
  
  setInterval(nextSlide, 3000);

  slides.eq(currentIndex).addClass('active');
  
  $(".cont1 li.on").click(function(){
    $(".layer-pop").show();
    $(".popup").show();
});
$(".popup .butt").click(function(){
    $(".layer-pop").hide();
    $(".popup").hide(); 
});
});