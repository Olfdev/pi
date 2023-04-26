//initialize imageIndex variable
let imageIndex = 0;

//get elements from DOM
const bannerImg = document.getElementById('banner-images');
const bannerDots = document.getElementById('dots');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const slides = [
	{
		"image":"slide1.jpg",
		"title":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"title":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"title":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.jpg",
		"title":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

//create images and their respective text
function createImages(){
	for (let i = 0; i < slides.length; i++) {
		
		//create <div> and append it to #banner-images
		const div = document.createElement("div");
		div.classList.add('image');
		bannerImg.appendChild(div);

		//create <img>, image source & alt, and append it to the above <div>
		const img = document.createElement("img");
		img.src = `./assets/images/slideshow/${slides[i].image}`;
		img.alt = "Banner Print-it";
		div.appendChild(img);
		
		//create <p> and append it to above <div>
		const p = document.createElement("p");
		div.appendChild(p);
		p.innerHTML = slides[i].title;
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
		updateImageIndex(0);
	}
}

//image slide (percentage)
function slideImages() {
	bannerImg.style.transform = `translateX(-${imageIndex * 100}%)`;
}

//current image
function updateImageIndex(newIndex) {
	imageIndex = newIndex;
	if (imageIndex < 0){
		imageIndex = slides.length - 1;
	}else if (imageIndex >= slides.length){
		imageIndex = 0;
	}
	slideImages();
	updateActiveDot();
}

//current dot
function updateActiveDot() {
	const dots = bannerDots.querySelectorAll('.dot');
	dots.forEach((dot, index) => {
		if (index === imageIndex){
			dot.style.backgroundColor = "white";
			dot.style.opacity = "1";
		}else{
			dot.style.backgroundColor = null;
			dot.style.opacity = null;
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