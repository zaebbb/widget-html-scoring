document.addEventListener("DOMContentLoaded", () => {
    let slides = document.querySelectorAll(".swiper__content--slide")
    let btn = document.querySelector(".widget__slider--btn")

    slides.forEach(slide => {
        slide.addEventListener("click", () => {
            slide.classList.toggle("slide__active")
            
            if(!checkSlidesActive()){
                btn.disabled = true
            } else {
                btn.disabled = false
            }
        })
    })

    function checkSlidesActive(){
        let slides = document.querySelectorAll(".swiper__content--slide"),
            result = false
        slides.forEach(slide => {
            if(slide.classList.contains("slide__active")){
                result = true   
            }
        })

        return result
    }
})