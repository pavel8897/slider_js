let position = 0;
const slidesToShow = 3;
const slidesToScroll = 2;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = itemWidth * slidesToScroll;

items.forEach((item) => {
	item.style.minWidth = `${itemWidth}px`;
});

btnPrev.addEventListener('click', () => {
	const itemsLeft = Math.abs(position) / itemWidth;

	position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
	setPosition();
	checkBtn();
});

btnNext.addEventListener('click', () => {
	const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
	
	position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
	setPosition();
	checkBtn();
});

const setPosition = () => {
	track.style.transform = `translateX(${position}px)`;
}

checkBtn = () => {
	btnPrev.disabled = position === 0;
	btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtn();