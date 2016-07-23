$(document).ready(function(){
	var countTo = prompt('Please enter the number you\'d like to count to.');
	while (isNaN(countTo) || (countTo%1 != 0)){
		alert('please enter a whole number');
		countTo = prompt('Please enter the number you\'d like to count to.');
	}
	countTo = parseInt(countTo);
	function fizzBuzz(endNumber){
		for (var counter = 1; counter <= endNumber; counter ++){
			if ((counter%5 === 0)&(counter%3 === 0)){
				$('body').append('<p>"FizzBuzz"</p>');
			}
			else if (counter%5 === 0){
				$('body').append('<p>"Buzz"</p>');
			}
			else if (counter%3 === 0){
				$('body').append('<p>"Fizz"</p>');
			}else{
				$('body').append('<p>' +counter +'</p>');
			};
		};
	};
	fizzBuzz(countTo);
});