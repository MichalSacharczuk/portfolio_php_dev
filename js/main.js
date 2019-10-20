addEventListener('load', function () {


	$.getScript('js/lightingLetters.js', function () {
		
		console.log('lightingLetters loaded');

		$ll = $('.lighting-letters');
		lightingLetters( $ll );
		$('.navbar-brand').click( lightingLetters );
	})

	$('#cv-click').click(function () {
		$('#cv-toggle').slideToggle('fast');
	})
})