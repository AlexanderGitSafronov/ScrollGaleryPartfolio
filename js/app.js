document.querySelectorAll('.slider').forEach((item,idx)=>{
window[`slider${idx+1}`] = new Swiper(item, {
    freeMood: true,
    centeredSlides: true,
    direction: 'vertical',
    mousewheel: true,
    slidesPerView: 1.75,
    slidesOffsetBefore: -125
})
})
bindSwipers(slider1,slider2,slider3,slider4);


