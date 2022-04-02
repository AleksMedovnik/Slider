'use strict'
// Slider-carousel
const slides = document.getElementById('slides');
const slide = slides.querySelectorAll('.slider__slide');
const slideTime = 2000;
const arrowPrev = document.getElementById('arrow-prev');
const arrowNext = document.getElementById('arrow-next');
const toggleRadio = document.getElementById('toggle-radio');
const toggleInput = toggleRadio.querySelectorAll('input');
const slidesMin = document.getElementById('slides-min');
const slideMin = slidesMin.querySelectorAll('.slider__item');

let currentSlide = 0;
let slideInterval;

continueSlideInterval();
slides.addEventListener('mouseover', stopSlide);
slides.addEventListener('mouseout', continueSlideInterval);
arrowNext.addEventListener('click', showNextSlide);
arrowPrev.addEventListener('click', showPreviousSlide);
toggleRadio.addEventListener('input', toggleSlide);
slidesMin.addEventListener('click', toggleMinSlide);


function nextSlide() {
	slideReset();
	currentSlide = (currentSlide + 1) % slide.length;
	slideSet();
}

function continueSlideInterval() {
	slideInterval = setInterval(nextSlide, slideTime);
}

function slideReset() {
	slide[currentSlide].classList.remove('slider__slide_showing');
	slideMin[currentSlide].classList.remove('slider__item_showing');
}

function slideSet() {
	slide[currentSlide].classList.add('slider__slide_showing');
	toggleInput[currentSlide].checked = true;
	slideMin[currentSlide].classList.add('slider__item_showing');
}

function stopSlide() {
	clearInterval(slideInterval);
}

function showNextSlide() {
	stopSlide();
	nextSlide();
}

function showPreviousSlide() {
	stopSlide();
	slideReset();
	currentSlide = (currentSlide == 0) ? slide.length - 1 : currentSlide - 1;
	slideSet();
}

function toggleSlide(event) {
	stopSlide();
	slideReset();
	currentSlide = event.target.value;
	slideSet();
}

function toggleMinSlide(event) {
	if (event.target.tagName === 'IMG') {
		stopSlide();
		slideReset();
		currentSlide = event.target.dataset.id;
		slideSet();
	}
}