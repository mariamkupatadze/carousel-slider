/* <div class="carousel-item" style="background-image:url('https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp'); background-repeat: no-repeat; background-size: cover;">
<div class="carousel-caption">
    <h1>SLIDE 5</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus corrupti distinctio, voluptatibus corporis laboriosam tempore doloremque eaque voluptate repellat dolore, vitae fugit explicabo</p>
</div>
</div> */

let users = [
   {
      imgURL:"https://wallpaperaccess.com/full/1131217.jpg",
      H1:"SLIDE 1",
      P: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus corrupti distinctio, voluptatibus corporis laboriosam tempore doloremque eaque voluptate repellat dolore, vitae fugit explicabo"
   },

   {
      imgURL:"https://i.ytimg.com/vi/LQCF4P1Wh6Q/maxresdefault.jpg",
      H1:"SLIDE 2",
      P: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus corrupti distinctio, voluptatibus corporis laboriosam tempore doloremque eaque voluptate repellat dolore, vitae fugit explicabo"
   },

   {
      imgURL:"https://wallpaperaccess.com/full/888201.jpg",
      H1:"SLIDE 3",
      P: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus corrupti distinctio, voluptatibus corporis laboriosam tempore doloremque eaque voluptate repellat dolore, vitae fugit explicabo"
   },

   {
      imgURL:"https://wallpapers.com/images/featured/2ygv7ssy2k0lxlzu.jpg",
      H1:"SLIDE 4",
      P: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus corrupti distinctio, voluptatibus corporis laboriosam tempore doloremque eaque voluptate repellat dolore, vitae fugit explicabo"
   },

   {
      imgURL:"https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp",
      H1:"SLIDE 5",
      P: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus corrupti distinctio, voluptatibus corporis laboriosam tempore doloremque eaque voluptate repellat dolore, vitae fugit explicabo"
   }
]

let carouselBox = document.querySelector(".carousel-box")

function cardFromObj(array) {
  
   for(i = 0; i < array.length; i++) {
     
      let div = document.createElement("div")
      div.classList.add("carousel-item")

      if(i == 0) {
         div.classList.add("active")
      }

      div.style.backgroundImage = 'url('+ array[i].imgURL + ')'
      div.style.backgroundRepeat = "no-repeat"
      div.style.backgroundSize = "cover"

      let div2 = document.createElement("div")
      div2.classList.add("carousel-caption")

      let h1 = document.createElement("h1")
      h1.innerText = array[i].H1

      let p = document.createElement("p")
      p.innerText = array[i].P
   
      div2.appendChild(h1)
      div2.appendChild(p)
      div.appendChild(div2)
      carouselBox.appendChild(div)
   }
}

cardFromObj(users);

let nextArrow = document.querySelector(".next")
let prevArrow = document.querySelector(".previous")
let carouselItem = document.querySelectorAll(".carousel-item")
let indicatorsDiv = document.querySelector(".indicators")

let activeIntervalBtn = document.querySelector(".auto")
let autoOn = document.querySelector(".autoOn")
let autoOff = document.querySelector(".autoOff")

IndicatorsGeneration(carouselItem);

let allIndicator = document.querySelectorAll(".indicator")


nextArrow.addEventListener("click", nextSlide)

prevArrow.addEventListener("click", previousSlide)

let isIntervalEnabled = false;
let autoInterval;

if(isIntervalEnabled){
   setInterval(nextSlide, 1000)
}

activeIntervalBtn.addEventListener("click", function() {

   isIntervalEnabled = !isIntervalEnabled;

   if(isIntervalEnabled){
      autoInterval = setInterval(nextSlide, 1000)
      autoOn.style.display = "inline-block";
      autoOff.style.display = "none";
   }else{
      clearInterval(autoInterval)
      autoOn.style.display = "none";
      autoOff.style.display = "inline-block";
   }

})

function IndicatorsGeneration(arrayName) {
   for(i = 0; i < arrayName.length; i++){
      let span = document.createElement("span")
      span.classList.add("indicator")
      span.setAttribute("id", i)

      span.addEventListener("click", function(){
         let itemID = Number(this.getAttribute("id"))
         let activeItem = document.querySelector(".carousel-item.active")
         let activeIndicator = document.querySelector(".indicator.active")
         
         activeIndicator.classList.remove("active")
         activeItem.classList.remove("active")
         
         carouselItem[itemID].classList.add("active")
         this.classList.add("active")
      })

      if(i == 0) {
         span.classList.add("active")
      }

      indicatorsDiv.appendChild(span)
   }
}

function nextSlide() {
   let activeItem = document.querySelector(".carousel-item.active")
   let activeIndicator = document.querySelector(".indicator.active")

   activeItem.classList.remove("active")
   activeIndicator.classList.remove("active")

   if(activeItem.nextElementSibling !== null) {
      activeItem.nextElementSibling.classList.add("active")
      activeIndicator.nextElementSibling.classList.add("active")
   }else {
      carouselItem[0].classList.add("active")
      allIndicator[0].classList.add("active")
   }
}

function previousSlide() {
   let activeItem = document.querySelector(".carousel-item.active")
   let activeIndicator = document.querySelector(".indicator.active")

   activeItem.classList.remove("active")
   activeIndicator.classList.remove("active")

   if(activeItem.previousElementSibling !== null) {
         activeItem.previousElementSibling.classList.add("active")
         activeIndicator.previousElementSibling.classList.add("active")
   } else {
         carouselItem[carouselItem.length-1].classList.add("active")
         allIndicator[allIndicator.length-1].classList.add("active")
   }
}