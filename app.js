// app js

const form = document.getElementById("form");
let timeInArray = document.querySelectorAll('[name="time-in-out"]');
let lunchArray = document.querySelectorAll('[name="lunch"]');
let totalArray = document.querySelectorAll('[name="total"]');
let dateArray = document.querySelectorAll('[name="date"]');
//const periodEnding = document.querySelector("[name='period-ending']");
const totalHoursArray = document.querySelectorAll('[name="total-hours"]');
const daysInPeriod = document.querySelectorAll('[name="period-days"]');
const gif = document.querySelector('.gif');
const genosBox = document.querySelector('.check');
const totoro = document.querySelector('.totoro');

const gifArray = ['gifs/mercury.gif', 'gifs/mars.gif', 'gifs/aqua.gif', 'gifs/moon.gif'];
const genosGif = 'gifs/genos.gif';

// create new date object
date = new Date();

let currentDay; // used to determine what cells to use and then increment the date?

currentDay = parseInt(date.getDay()); // returns a number, eg, Wednesday = 3
console.log(currentDay);

/*** TODO: GET ENDING DAY AND GET STARTING DAY ***/

let newDateArray = Array.from(dateArray);

let random = function() {
	const min = 0;
	const max = 4;
	let num = Math.floor(Math.random() * (max - min) + min);
	return num;
}


form.addEventListener("submit", function(evt) {

	evt.preventDefault();

	gif.src = genosBox.checked ? genosGif : gifArray[random()];
	gif.style.transform = 'scale(1)';
	gif.style.opacity = '1';
	gif.style.display = 'block';

	newDateArray.forEach(function(ele) {
	momentDate = moment().format('MMM.   , YYYY');
	ele.value = momentDate;
	});


	let timeIn = evt.target[3].value;
	let lunch = evt.target[4].value;
	let perDay = evt.target[5].value;
	let periodDays = evt.target[1].value;

	function getArray(nodelist, entry) {
		let arr = Array.from(nodelist);
		/*for(let i = 1; i < currentDay; i++) {
			arr.shift();
		}*/

		let arrLength = arr.length;

		// if second half of the month pop and not shift

		for(let x = parseInt(periodDays); x < arrLength; x++) {
			arr.pop();
		}

		arr.forEach(function(ele) {
			ele.value = entry;
		});

	}

	getArray(timeInArray, timeIn);
	getArray(lunchArray, lunch);
	getArray(totalArray, perDay);

	let totalHours;

	totalHours = perDay * periodDays;

	totalHoursArray[0].value = totalHours;

	setTimeout(() => {
		gif.style.transform = 'scale(0)';
		gif.style.opacity = '0';
	}, 1650);
});


function peeky() {
	if ((innerHeight > 800 && pageYOffset > 100) || (innerHeight < 700 && pageYOffset > 200)) {
	totoro.style.opacity = 1;
	totoro.style.transform = "translateY(125px)";
	}
	else {
		totoro.style.transform = "translateY(300px)";
		totoro.style.opacity = 0;
	}
}




