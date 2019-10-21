addEventListener('load', function () {

	var animateSpeed = 500;

	$.getScript('js/lightingLetters.js', function () {
		
		console.log('lightingLetters loaded');

		$ll = $('.lighting-letters');
		lightingLetters( $ll );
		$('.navbar-brand').click( function () {
			setTimeout(function () {
				lightingLetters( $ll )
			}, animateSpeed - 100)
		} );
	})


	function toggleCV() {

		$('#cv-click').click(function () {
			$('#cv-toggle').toggleClass('cv-full-width');
		})
	}


	function scrollToSection() {

		var navHeight = 60;
		var $navbarToggler = $('.navbar-toggler');
		
		$('.scroll-to').click(function () {

			if ( !$navbarToggler.hasClass('collapsed') ) {
				$navbarToggler.click();
			}
			
			var href = $(this).attr('href');

			var sectionTop = $(href).offset().top - navHeight;

			$('html, body').animate({scrollTop: sectionTop}, animateSpeed);
		})
	}


	toggleCV();
	scrollToSection();

})