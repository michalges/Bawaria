function show_tip1() {
    console.log("safdfdsads");
    // document.getElementById("tip1").style.display = "flex";
    document.getElementById("tip1").style.opacity = "1";
    setTimeout(() => {
        document.getElementById("tip1_loading_bar").style.width = "1px";
        setTimeout(() => {
            document.getElementById("tip1").style.opacity = "0.01";
            setTimeout(() => {document.getElementById("tip1").style.display = "none";}, 1000)
        }, 10000)
    }, 1000)
}

document.getElementById("button_tip1").addEventListener("click", () =>{
    document.getElementById("tip1").style.display = "none";
})

let show = 0;

function show_tip2() {
    if(show == 0){
        show = 1;
        document.getElementById("tip2").style.display = "flex";
        setTimeout(() => {
            document.getElementById("tip2").style.opacity = "1";
            document.getElementById("tip2_loading_bar").style.width = "1px";
            setTimeout(() => {
                document.getElementById("tip2").style.opacity = "0.01";
                setTimeout(() => {document.getElementById("tip2").style.display = "none";}, 1000)
            }, 10000)
        }, 100);
    }
}

document.getElementById("button_tip2").addEventListener("click", () =>{
    document.getElementById("tip2").style.display = "none";
})