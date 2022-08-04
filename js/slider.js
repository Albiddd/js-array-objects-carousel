// console.log('slider')
const slides = [
	{
		url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
		title: 'Svezia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Perù',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
		title: 'Chile',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Argentina',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
		title: 'Colombia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
]

let currentIndex = 0
const wrapperEl = document.querySelector('.slides-wrapper')
let thumb = document.querySelector('.nav-thumb')


slides.forEach((slideEl, i) => {
	if(i === currentIndex){
		wrapperEl.innerHTML += `
			<li class="slide active">
				<img src="${slideEl.url}" alt="">
				<div class="slide__content">
					<h3 class="slide__title">${slideEl.title}</h3>
					<p class="slide__description">${slideEl.description}</p>
				</div>
			</li>
			`
		thumb.innerHTML += `<div class="col-thumb">
			<img src="${slideEl.url}" class="thumb thumb-active" id="thumb-${i}" alt="">
			</div>`
	}	else{
		wrapperEl.innerHTML += `
			<li class="slide">
				<img src="${slideEl.url}" alt="">
				<div class="slide__content">
					<h3 class="slide__title">${slideEl.title}</h3>
					<p class="slide__description">${slideEl.description}</p>
				</div>
			</li>
			`
		thumb.innerHTML += `<div class="col-thumb">
			<img src="${slideEl.url}" class="thumb" id="thumb-${i}" alt="">
			</div>`
	}
	
})
const slideElements = document.querySelectorAll ('.slide')

// console.log(slideElements)

let thumbElements = document.querySelectorAll('.thumb')

console.log(thumbElements)

const nextArrowEl = document.querySelector(".arrow-next")
const prevArrowEl = document.querySelector(".arrow-prev")
prevArrowEl.addEventListener('click', prevSlide)
nextArrowEl.addEventListener('click', nextSlide)

// nextElement.addEventListener('mouseleave', restartInterval);



function nextSlide(){
    //togliere la classe active dalla slide attiva
	slideElements[currentIndex].classList.remove('active')	
	thumbElements[currentIndex].classList.remove('thumb-active')	
		
	currentIndex++
	if (currentIndex > slideElements.length-1){
		currentIndex = 0
	}
	
	slideElements[currentIndex].classList.add('active')
	thumbElements[currentIndex].classList.add('thumb-active')
}

function prevSlide(){
    //togliere la classe active dalla slide attiva
    slideElements[currentIndex].classList.remove('active')
	thumbElements[currentIndex].classList.remove('thumb-active')
	currentIndex--
	if(currentIndex < 0){
		currentIndex = slideElements.length-1
	}
    slideElements[currentIndex].classList.add('active')
	thumbElements[currentIndex].classList.add('thumb-active')
}

//AUTOPLAY INTERVAL

let autoplay = setInterval(nextSlide, 3000)
let slider = document.querySelector('.slider')
slider.addEventListener('mouseenter', stopAutoPlay)
slider.addEventListener('mouseleave', restartAutoPlay);


function stopAutoPlay(){
	clearInterval(autoplay)
}
function restartAutoPlay() {
	autoplay = setInterval(nextSlide, 3000);   
}





document.getElementById('thumb-0').addEventListener('click', function(){	
	slideElements[currentIndex].classList.remove('active')
	thumbElements[currentIndex].classList.remove('thumb-active')
	currentIndex = 0
	slideElements[currentIndex].classList.add('active')
	thumbElements[currentIndex].classList.add('thumb-active')
})

document.getElementById('thumb-1').addEventListener('click', function(){	
	slideElements[currentIndex].classList.remove('active')
	thumbElements[currentIndex].classList.remove('thumb-active')
	currentIndex = 1
	slideElements[currentIndex].classList.add('active')
	thumbElements[currentIndex].classList.add('thumb-active')
})

document.getElementById('thumb-2').addEventListener('click', function(){	
	slideElements[currentIndex].classList.remove('active')
	thumbElements[currentIndex].classList.remove('thumb-active')
	currentIndex = 2
	slideElements[currentIndex].classList.add('active')
	thumbElements[currentIndex].classList.add('thumb-active')
})

document.getElementById('thumb-3').addEventListener('click', function(){	
	slideElements[currentIndex].classList.remove('active')
	thumbElements[currentIndex].classList.remove('thumb-active')
	currentIndex = 3
	slideElements[currentIndex].classList.add('active')
	thumbElements[currentIndex].classList.add('thumb-active')
})

document.getElementById('thumb-4').addEventListener('click', function(){	
	slideElements[currentIndex].classList.remove('active')
	thumbElements[currentIndex].classList.remove('thumb-active')
	currentIndex = 4
	slideElements[currentIndex].classList.add('active')
	thumbElements[currentIndex].classList.add('thumb-active')
})



