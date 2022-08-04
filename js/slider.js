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
const slideElements = []


const wrapperEl = document.querySelector('.slides-wrapper')

slides.forEach((slideEl, i) => {
	wrapperEl.innerHTML += `
	<li class="slide">
		<img src="${slideEl.url}" alt="">
		<div class="slide__content">
			<h3 class="slide__title">${slideEl.title}</h3>
			<p class="slide__description">${slideEl.description}</p>
		</div>
	</li>
	`	

	let activeImg = document.querySelector('.slide')
	if(i === currentIndex){
		activeImg.classList.add('active')
	}

	slideElements.push(activeImg)
})

// for(let key in slides){
// 	wrapperEl.innerHTML += `
// 	<li class="slide">
// 		<img src="${slides[key].url}" alt="">
// 		<div class="slide__content">
// 			<h3 class="slide__title">${slides[key].title}</h3>
// 			<p class="slide__description">${slides[key].description}</p>
// 		</div>
// 	</li>
// 	`	
// }
// let activeImg = document.querySelector('.slide')

// for(let i=0; i < slides.length; i++){
// 	if(i === currentIndex){
// 		activeImg.classList.add('active')
// 	}

// 	slideElements.push(activeImg)
// }


console.log(slideElements)

console.log(currentIndex)

const nextArrowEl = document.querySelector(".arrow-next")

nextArrowEl.addEventListener('click', function (){
    //togliere la classe active dalla slide attiva

	const slideActive = slideElements[currentIndex]
	slideActive.classList.remove('active')	
	
	currentIndex++
	if (currentIndex > slideElements.length-1){
		currentIndex = 0
	}
	
	let nextSlide = slideElements[currentIndex]
	nextSlide.classList.add('active')

})

const prevArrowEl = document.querySelector(".arrow-prev")

prevArrowEl.addEventListener('click', function (){
    //togliere la classe active dalla slide attiva
    const slideActive = slideElements[currentIndex]
    slideActive.classList.remove('active')
    currentIndex--
	if(currentIndex < 0){
		currentIndex = slideElements.length-1
	}
    const nextSlide = slideElements[currentIndex]
    nextSlide.classList.add('active')

})
