console.log('hello world');
var x = 'hello world';
console.log(x); 
var y = 2;
var z = y * 12;
console.log(z);

var this_is_a_decimal = 3.2;
var okay_cool = this_is_a_decimal * 2;
console.log(okay_cool);

var demo_list = [5, 12, 32, 89, 100];
var fruit_list = ["apple", "banana", "tomatoes"];
console.log(fruit_list);

console.log(fruit_list[2]);

var car = {
  make: 'BMW',
  year: 2001
};

console.log(car);
console.log(car['year']);
console.log(car.year);

var person = {
  id: 125675786,
  name: 'Raksha',
  interest: ['painting', 'sleeping', 'exploring']
};

console.log(person);

var multiply = function(x, y) {
  return x * y;
};

console.log(multiply(2, 3));

var result = multiply(3, 6);
console.log(result);

var heading_element = document.querySelector('h1');
console.log(heading_element);

$('.heading').on("mouseenter", function(){ alert("hello");})

$(".example-btn").on("click", function(){alert('this button was pressed');})
	var btnClickHandler=function(e){
		var el=e.target;
		$(e.target).html('hello')
	}

	var handleReservation =function(){
		console.log('i just clicked the button');
		 var firstNameEl= $(".first-name");
		 var numOfPeopleEl=$(".num-of-people");

		 console.log(firstNameEl);
		 console.log(numOfPeopleEl);

		 var firstNameElValue = firstNameEl.val();
		 var numOfPeopleValue = numOfPeopleEl.val();

		 console.log(firstNameElValue)
		 console.log(numOfPeopleValue)


    var firstNameOutputEl=$(".first-name-output .result");
    var numOfPeopleEl=$(".num-of-people-output .result");

		
  firstNameOutputEl.html(firstNameElValue);
  numOfPplOutputEl.html(numOfPeopleValue);

		var outputEl= $('.outputs');
		var bgColorOpacity = numOfPeopleValue/100;
		var bgColorOpacity ="RGB(173.216.230,"+bgColorOpacity +")";
		outputEl.css({backgroundcolor})

		

	}


    $('#submit-res').on("change", handleReservation)
	$('.res-input').on("change", handleReservation)