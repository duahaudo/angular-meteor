angular
	.module('common.filter')
	.filter('timeCounter', function() {
		return function(time) {
			var milisecondToSecond = 1000,
				milisecondToMinute = milisecondToSecond * 60,
				milisecondToHour = milisecondToMinute * 60,
				milisecondToDay = milisecondToHour * 24,
				milisecond = new Date().getTime() - new Date(time).getTime(),
				
				day = Math.floor(milisecond / milisecondToDay),
				hour = Math.floor((milisecond -  day * milisecondToDay) / milisecondToHour),
				minute = Math.floor((milisecond -  day * milisecondToDay - hour * milisecondToHour) / milisecondToMinute),
				second = Math.floor((milisecond - day * milisecondToDay - hour * milisecondToHour - minute * milisecondToMinute) / milisecondToSecond),
				result = '';
			
			result += day > 0 ? day + ' day' + (day > 1 ? 's ' : ' ') : '';
			result += hour > 0 ? hour + ' hour' + (hour > 1 ? 's ' : ' ') : '';
			result += minute > 0 ? minute + ' minute' + (minute > 1 ? 's ' : ' ') : '';
			result += second > 0 ? second + ' second' + (second > 1 ? 's' : '') : '';
			
			return !!result ? result + ' ago.' : 'now';
		};
	});