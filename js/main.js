addEventListener('load', function () {
	

	function lightingLetters() {
		
		var $lls = $('.lighting-letters');

		var letters = $lls.text().trim().split('');

		$lls.html('');
		$lls.show();

		$(letters).each(function () {
			var letter = this;
			var letterSpan = '<span class="lighting-letter">' + letter + '</span>';
			$lls.append(letterSpan);
		});

		var $ll = $('.lighting-letter');

		var intervalTime = 10;
		var minStartInterval = 80;
		var minEndInterval = Math.floor( minStartInterval / 1.1 );
		var time = minStartInterval - 1;
		var lettersVisible = 0;

		$ll = $( shuffleArray($ll) );

		$ll.each(function (index) {
			// this.interval = Math.floor( Math.random() * 30 ) + minStartInterval;
			this.interval = minStartInterval + index * 2;
		});

		var interval = setInterval(function () {

			console.log( 'interval running... (' + time + ')' );
			
			$ll.each(function () {

				if ( time % this.interval == 0 ) {
					$(this).addClass('l-show');

					if ( this.interval <= minEndInterval ) {
						this.interval = 0;
						lettersVisible++;
					}
				}
				else if ( (time > this.interval) && ((time - Math.round(this.interval / 5)) % this.interval == 0) ) {
					$(this).removeClass('l-show');
					this.interval = Math.floor(this.interval / 2);
				}
			});

			time++;

			if ( lettersVisible >= $ll.length || time > intervalTime * 100 ) {
				clearInterval(interval);
				console.log( 'interval cleared' );
			}

		}, intervalTime);
	}


	function shuffleArray(array) {
		
		var tempArray = array;
		var newArray = [];

		while ( tempArray.length > 0 ) {
			
			var randomIndex = Math.floor( Math.random() * tempArray.length );
			newArray.push( tempArray[randomIndex] );
			tempArray.splice(randomIndex, 1);
		}
		// console.log( newArray );
		return newArray;
	}


	lightingLetters();

})