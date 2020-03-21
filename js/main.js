$( document ).ready()

$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
  });
  //============================================///================Burger==========================///================

function burgerMenu(selector){
  let menu = $(selector);
  let button = menu.find(".burger-menu_button");
  let links = menu.find(".burger_menu__link");
  let overlay = menu.find (".burger_menu__overlay");
  
  button.on("click", (e)=> {
    e.preventDefault();
    toggleMenu();
  });

    links.on("click", () => toggleMenu());
    overlay.on("click", () => toggleMenu());

  function toggleMenu(){
    menu.toggleClass("burger-menu_active");

    if (menu.hasClass("burger-menu_active")) {
      $("body").css("overflow", "hidden");
    } else{
      $("body").css("overflow", "visible");
    }
  }
}
burgerMenu(".burger-menu");