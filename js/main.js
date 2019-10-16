addEventListener('load', function () {


	$.getScript('js/lightingLetters.js', function () {
		
		console.log('lightingLetters loaded');

		$ll = $('.lighting-letters');
		lightingLetters( $ll );
		$('.navbar-brand').click( lightingLetters );
	});


})