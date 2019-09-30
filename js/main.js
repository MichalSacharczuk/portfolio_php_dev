addEventListener('load', function () {
	

	function lightingLetters() {
		
		var $lls = $('.lighting-letters');

		var letters = $lls.text().trim().split('');

		$lls.html('');
		$lls.show();

		$(letters).each(function () {
			// console.log(this);
			var letter = this;
			var letterSpan = '<span class="lighting-letter">' + letter + '</span>';
			$lls.append(letterSpan);
		});

		var $ll = $('.lighting-letter');
		var time = 0;
		var count = 0;
		var timeRange = 50;
		var maxSpeed = timeRange;
		var intervalTime = 50;
		var timeoutToHide = 300 / intervalTime;

		$ll.each(function () {
			this.timeToShow = Math.round( Math.random() * timeRange );
			this.speed = Math.round( Math.random() * 5 );
			// console.log(this.timeToShow);
		});
		
		var maxSpeedCount;

		var interval = setInterval(function () {

			console.log('interval running...');
			
			maxSpeedCount = 0;

			$ll.each(function () {
				if ( this.timeToShow == time ) {
					$(this).addClass('l-show');
				}
				else if (  this.timeToShow == Number(time - timeoutToHide) 
						|| this.timeToShow == Number(time + timeRange - timeoutToHide) ) {
					$(this).removeClass('l-show');
				}
				this.speed++;

				if ( this.speed > maxSpeed ) {
					$(this).addClass('l-show');
					maxSpeedCount++;
				}
			});

			time++;
			count++;
			if ( time > timeRange - 1 ) time = 0;
			// if ( count > 30 ) clearInterval(interval);
			if ( maxSpeedCount == $ll.length ) {
				clearInterval(interval);
				console.log('interval stopped');
			}
		}, intervalTime);

	}


	lightingLetters();

})