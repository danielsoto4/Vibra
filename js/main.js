var pista1 = document.getElementById("pista1");
var play = document.getElementById("play");
var img = document.querySelector(".center img");
var firstPlay = true; 

play.onclick = function () {
    if (pista1.paused) {
        pista1.play();
        play.src = "images/pause.png";
        
        if (firstPlay) {
            img.classList.remove("pulse-img", "pulse-img-delay"); 
            img.classList.add("pulse-img-delay");
            firstPlay = false;
        } else {
            img.classList.remove("pulse-img", "pulse-img-delay");
            setTimeout(() => img.classList.add("pulse-img"), 10);
        }

    } else {
        pista1.pause();
        play.src = "images/play.png";
        img.classList.remove("pulse-img", "pulse-img-delay");
    }
};

pista1.onended = function() {
    play.src = "images/play.png";
    img.classList.remove("pulse-img", "pulse-img-delay");
    firstPlay = true; 
};
