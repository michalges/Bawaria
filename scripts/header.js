const button_up = document.getElementsByClassName("scroll_up_button");
const button_down = document.getElementsByClassName("scroll_down_button");
const dni_zdjecia_div = document.getElementsByClassName("dni_zdjecia_div");



for(let i = 0; i < button_up.length; i++){
    button_up[i].addEventListener("click", () => {
            dni_zdjecia_div[i].scrollBy({
                top: -(innerHeight/3),
                left: 0,
                behavior: "smooth",
              });
    })
}

for(let i = 0; i < button_down.length; i++){
    button_down[i].addEventListener("click", () => {
            dni_zdjecia_div[i].scrollBy({
                top: (innerHeight/3),
                left: 0,
                behavior: "smooth",
              });
    })
}