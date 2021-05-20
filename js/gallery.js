const slides = document.querySelectorAll('.gallery'),
      imgmini = document.querySelectorAll('.gallery-img-mini'),
      text = document.querySelectorAll('.gallery-info');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of imgmini) {
        dot.classList.remove('active');
    }
    imgmini[n].classList.add('active');
}

const activeText = n => {
    for(img of text) {
        img.classList.remove('active');
    }
    text[n].classList.add('active');
}


const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
    activeText(ind);
}


imgmini.forEach((item, indexImgmini) =>{
    item.addEventListener('click', () =>{
        index = indexImgmini;
        prepareCurrentSlide(index);
    })
})