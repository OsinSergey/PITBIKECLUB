document.addEventListener("DOMContentLoaded", function () {

	const buttonMenu = document.querySelector('.header_navbar'),
		closeMenu = document.querySelector('.close-btn'),
		navMenu = document.querySelector('.menu-btn');


	navMenu.addEventListener('click', toggleMenu);
	closeMenu.addEventListener('click', toggleClose);

	function toggleMenu() {
		buttonMenu.classList.toggle('header_navbar-active');
		navMenu.style.display = 'none';
		closeMenu.style.display = 'block';

	};
	function toggleClose() {
		buttonMenu.classList.toggle('header_navbar-active');
		navMenu.style.display = 'block';
		closeMenu.style.display = 'none';

	};


	


	var mySwiper = new Swiper('.swiper-container', {
		speed: 400,
		spaceBetween: 10,
		
    
		loop: true,
		navigation: {
			nextEl: '.advantage_slider__link-right',
			prevEl: '.advantage_slider__link-left',
		},
		autoplay: {
			delay: 4000,
		},
	});
	var mySwiper2 = new Swiper('.shop_pitbike_slider', {
		speed: 400,
		spaceBetween: 10,
		loop: true,

		pagination: {
			el: '.pagination',
			type: 'bullets',
			bulletClass: 'shop_pitbike_bullet',
			bulletActiveClass: 'bullet_active',
			clickable: true,

		},
		navigation: {
			nextEl: '.link-right',
			prevEl: '.link-left',
		},
		autoplay: {
			delay: 31000,
		},
	});
	var mySwiper3 = new Swiper('.reviews_silider_carusel', {
		slidesPerView: 3,
		spaceBetween: 30,
		//	slidesPerGroup: 3,
		speed: 400,
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 0,


			},
			750: {
				slidesPerView: 2,
				spaceBetween: 10,
				slidesPerGroup: 2,

			},
			1040: {
				slidesPerView: 3,
				spaceBetween: 30,
			}
		},
		pagination: {
			el: '.reviews_silider_carusel__pagination',
			type: 'bullets',
			bulletClass: 'reviews_silider_carusel_bullet',
			bulletActiveClass: 'bullet_active_reviews',
			clickable: true,
			progressbarOpposite: true,
		},
		navigation: {
			nextEl: '.right-next',
			prevEl: '.left-prev',

		},
		autoplay: {
			delay: 15000,
		},
	});

});