let = [
    images/IMG-20260307-WA0017.jpg
]

let index = 0;

function slideShow(){

    document.getElementById("slide").src = images[index];

    index++;

    if(index >= images.length){
        index = 0;
    }
    setTimeout(slideShow);
}
slideShow();