const fullscreenImageDiv = document.getElementById("fullscreen_image_div");
const fullscreenImageImg = document.getElementById("fullscreen_image");

function fullscreenImage(el){
    fullscreenImageDiv.style.display = "flex";
    fullscreenImageImg.src = el.src;
    setTimeout(() => {fullscreenImageDiv.style.opacity = "1";}, 10)
}

document.getElementById("fullscreen_image_close").addEventListener("click", () => {
    fullscreenImageDiv.style.opacity = "0";
    setTimeout(() => {fullscreenImageDiv.style.display = "none";}, 300);
})