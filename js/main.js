$( document ).ready()

$('.fade').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
  });
  //=======================================accordion_menu===============================================
  $(function() {
    let Accordion = function(el, multiple) {
      this.el = el || {};
      // more then one submenu open?
      this.multiple = multiple || false;
      
      let dropdownlink = this.el.find('.dropdownlink');
      dropdownlink.on('click',
                      { el: this.el, multiple: this.multiple },
                      this.dropdown);
    };
    
    Accordion.prototype.dropdown = function(e) {
      let $el = e.data.el,
          $this = $(this),
          //this is the ul.submenuItems
          $next = $this.next();
      
      $next.slideToggle();
      $this.parent().toggleClass('open');
      
      if(!e.data.multiple) {
        //show only one menu at the same time
        $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
      }
    }
    
    let accordion = new Accordion($('.accordion-menu'), false);
  })
  //============================================///================Burger==========================///================
  function burgerMenu(selector){
    let menu = $(selector);
    let button = menu.find(".burger-menu_button");
    let links = menu.find(".burger_menu__link");
    let overlay = menu.find (".burger-menu_overlay");
    
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
   // ==============================================================Scroll_nav===============================
   $(window).scroll(function () {
		if ($(window).scrollTop() >= 1024) {
			$(".burger-menu").css({
				'display': 'none'
			});	
		}
		else 
		{
		$(".burger-menu").css({
			'display': 'block'
		});
		};
  });
  // -------------------------For ScrollArrow_nav-------------------------------------------
  let allArrow = document.querySelectorAll(".arrowGen");
  for (let i = 0; i < allArrow.length; i++) {
    allArrow[i].onclick = function (event) {
      event.preventDefault();
      let blockID = this.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  for (let i = 0; i < allArrow.length; i++) {
    allArrow[i].ontouchstart = function (event) {
      event.preventDefault();
      let blockID = this.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }