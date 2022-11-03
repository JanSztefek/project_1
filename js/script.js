document.addEventListener("DOMContentLoaded", () => {
function counter(id, start, end, duration, type) {
    let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
        current += increment;
        obj.textContent = current + type;
        if (current == end) {
        clearInterval(timer);
        }
    }, step);
    }
    setTimeout(() => {
        counter("count1", 0, 15, 500, '+')
        counter("count2", 0, 90, 500, '00');
        counter("count3", 0, 100, 1000, '%');
    }, 600);;
});


var element = document.querySelector(".header");
element.classList.add("show");

window.addEventListener('load',(event) => {

    if(window.innerHeight > 1000 || window.scrollY > 150){
        var element = document.querySelector(".submain__card");
        element.classList.add("show");

        var element = document.querySelector(".submain__card:nth-child(2)");
        element.classList.add("show");

        var element = document.querySelector(".submain__card:nth-child(3)");
        element.classList.add("show");
    }
    else{
        window.addEventListener('scroll',(event) => {
            if(window.scrollY > 100){
                var element = document.querySelector(".submain__card");
                element.classList.add("show");
        
                var element = document.querySelector(".submain__card:nth-child(2)");
                element.classList.add("show");
        
                var element = document.querySelector(".submain__card:nth-child(3)");
                element.classList.add("show");
            }
        });
    }
})