const header = document.querySelector('header');
const mapa = document.getElementById('mapa');
const mapaDiv = document.getElementById('mapa_div');
const pin_divs = document.getElementsByClassName("pin_div_outer");
const pin_divs_array = Array.from(pin_divs);

let size = 1;
let speed = 0;

let isMouseOverHeader = false;

header.addEventListener('mouseover', () => {

    isMouseOverHeader = true;
});

header.addEventListener('mouseout', () => {
    isMouseOverHeader = false;
});

window.addEventListener(
    'wheel',
    (event) => {
    if (isMouseOverHeader) {
        if (event.deltaY < 0) {
            speed = 1;
        } else if (event.deltaY > 0) {
            speed = -1;
        }
    }
  },
  { passive: false }
);

function animate_map(){
    speed = speed*0.95;
    size = size+(speed/100);
    mapaDiv.style.transform = "scale(" + size + ") skew(" + (size*3) + "deg , -" + (size*2) + "deg) rotate(" + (size*5) + "deg)";
    pin_divs_array.forEach(function(el) {
        el.style.transform = "skew(-" + (size*3) + "deg , " + (size*2) + "deg) rotate(-" + (size*5) + "deg)";
    });
    requestAnimationFrame(animate_map);
}
requestAnimationFrame(animate_map);