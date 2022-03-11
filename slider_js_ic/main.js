let menuBtn = document.querySelector('.burger_btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
menu.classList.toggle('active');
})



const next = document.querySelector('.next'),
     prev = document.querySelector('.prev'),
     right = document.querySelector('.right_b')
     left = document.querySelector('.left_b')
     slides = document.querySelectorAll('.img_window'),
     grids = document.querySelectorAll('.grids1')
     dots = document.querySelectorAll('.dot'),
     heads = document.querySelectorAll('.head');
     


let index = 0 


const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active') }
    slides[n].classList.add('active')

for(grid of grids) {
    grid.classList.remove('active') }
grids[n].classList.add('active')
}



const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active') }
    dots[n].classList.add('active')

    for(head of heads) {
        head.classList.remove('active') }
    heads[n].classList.add('active')

}



const nextSlide = () => {
    if (index==slides.length - 1) {
        index=0
        activeSlide(index)
        activeDot(index)
    } else {
        index++
        activeSlide(index)
        activeDot(index)
    }

    if (index==grids.length - 1) {
        index=0
        activeSlide(index)
        activeDot(index)
    } else {
        index++
        activeSlide(index)
        activeDot(index)
    }
}


const prevSlide = () => {
    if (index==0) {
        index = slides.length - 1
        activeSlide(index)
        activeDot(index)
    } else {
        index--
        activeSlide(index)
        activeDot(index)
    }
    if (index==0) {
        index = grids.length - 1
        activeSlide(index)
        activeDot(index)
    } else {
        index--
        activeSlide(index)
        activeDot(index)
    }
}


dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
      index = indexDot;
      activeSlide(index)
        activeDot(index)
  })

})

heads.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        activeSlide(index)
          activeDot(index)
    })
  
  })

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)
right.addEventListener('click', nextSlide)
left.addEventListener('click', prevSlide )


