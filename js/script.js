//get elements from DOM
const bannerImg = document.getElementById('banner-images');
const bannerDots = document.getElementById('dots');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const slides = [
	{
		"image":"slide1.jpg",
		"title":"Impressions tous formats ",
		"subtitle":"en boutique et en ligne"
	},
	{
		"image":"slide2.jpg",
		"title":"Tirages haute définition grand format ",
		"subtitle":"pour vos bureaux et events"
	},
	{
		"image":"slide3.jpg",
		"title":"Grand choix de couleurs ",
		"subtitle":"de CMJN aux pantones"
	},
	{
		"image":"slide4.jpg",
		"title":"Autocollants ",
		"subtitle":"avec découpe laser sur mesure"
	}
];

//create images and their respective text
function createImages(){
	for (let i = 0; i < slides.length; i++) {

		//create <div> and append it to #banner-images
		const div = document.createElement("div");
		div.classList.add('image')
		bannerImg.appendChild(div);

		//create <img>, image source & alt, and append it to the above <div>
		const img = document.createElement("img");
		img.src = `./assets/images/slideshow/${slides[i].image}`;
		img.alt = "Banner Print-it"
		div.appendChild(img);
		
		//create <p> and append it to above <div>
		const p = document.createElement("p");
		div.appendChild(p);

		//create title text and append it to the above <p>
		const ptxt = document.createTextNode(slides[i].title);
		p.appendChild(ptxt);

		//create <span> and append it to the above <p>
		const span = document.createElement("span");
		p.appendChild(span);

		//create subtitle text and append it to the above <span>
		const spantxt = document.createTextNode(slides[i].subtitle);
		span.appendChild(spantxt);
	}
}

//initialize imageIndex variable
let imageIndex = 0;

//image slide (percentage)
function slideImages() {
	bannerImg.style.transform = `translateX(-${imageIndex * 100}%)`;
}

//create dots
for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	dot.addEventListener('click', () => {
		updateImageIndex(i);
		dot.style.backgroundColor = "white";
		dot.style.opacity = "1";
	});
	bannerDots.appendChild(dot);
}

//current image
function updateImageIndex(newIndex) {
	imageIndex = newIndex;
	if (imageIndex < 0) {
		imageIndex = slides.length - 1;
	} else if (
		imageIndex >= slides.length) {
		imageIndex = 0;
	}
	slideImages();
	updateActiveDot();
}

//current dot
function updateActiveDot() {
	const dots = bannerDots.querySelectorAll('.dot');
	dots.forEach((dot, index) => {
		if (index === imageIndex) {
			dot.style.backgroundColor = "white";
			dot.style.opacity = "1";
		} else {
			dot.style.backgroundColor = "transparent";
			dot.style.opacity = "0.7";
		}
	});
}

arrowLeft.addEventListener('click', () => {
	updateImageIndex(imageIndex - 1);
});

arrowRight.addEventListener('click', () => {
	updateImageIndex(imageIndex + 1);
});

createImages()