const sectionMonachium = document.getElementById('section_monachium');
const sectionSalzburg = document.getElementById('section_salzburg');
const sectionObsteig = document.getElementById('section_obsteig');

const pins = document.getElementsByClassName("pin_div_outer");
const pinsArray = Array.from(pins);

const sectionHideButtons = document.getElementsByClassName("section_hide_button");
const sectionHideButtonsArray = Array.from(sectionHideButtons);

pinsArray.forEach(function(el) {
    el.addEventListener('click', () =>{
        cityName = el.id.substring(8);
        cityName = "section_" + cityName;
        document.getElementById(cityName).style.top = "1vw";
    });
});

sectionHideButtonsArray.forEach(function(el){
    el.addEventListener('click', () =>{
        document.getElementById(el.parentNode.id).style.top = "100vh";
    })
})

function show_section(section_name_x){
    document.getElementById(section_name_x).style.top = "0";
    setTimeout(() => {show_tip2()}, 1000);
}