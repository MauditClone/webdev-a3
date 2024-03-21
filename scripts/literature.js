var mobileNav = document.getElementById('mobileNav')

function toggleMenu() {
    mobileNav.classList.toggle('hidden')
}

// COPYRIGHT - NINA 2024 (I had permission to use code)
//my carousel triggers different slides to come up, but if you're not doing that you don't need this and you can ignore anything that uses 'slides'
const slides = document.getElementsByClassName("details");
//this is an array of the pictures in the carousel
const novels = document.getElementsByClassName("novels");
//this var keeps track of where the carousel is in relation to its starting position
var offset = 0;
//this is how much it moves by every time one of the arrows is clicked
var increment = 100;
//this is a container holding all of the carousel images (but not the buttons to control it)
var container = document.getElementById('carousel-box');
//this is the visible width of the carousel images
var offsetWidth = container.offsetWidth;
//this is the full width including those which are hidden
var scrollWidth = container.scrollWidth;
var width = scrollWidth - offsetWidth;

window.addEventListener('resize', function () {
    resize()
});

//recalculate widths if window is resized
function resize() {
    offsetWidth = container.offsetWidth;
    scrollWidth = container.scrollWidth;
    width = scrollWidth - offsetWidth;
}

//give each thumbnail its click function
for (let i = 0; i < slides.length; i++) {
    novels[i].addEventListener("click", function () {
        show(slides[i])
    });
    //hide all slides 
    slides[i].style.display = "none";
}

//set the carousel to show the first slide in the series by default
slides[0].style.display = "grid";

function moveLeft() {
    //prevent user from scrolling backwards beyond the first image
    if (offset < 0) {
        offset += increment;

        //move each picture in the carousel accordingly
        for (let i = 0; i < novels.length; i++) {
            novels[i].style.transform = "translateX(" + offset + "px)";
        }
    }
}

function moveRight() {
    //prevent user from scrolling off into infinity
    if (offset > -width) {
        offset -= increment;
        for (let i = 0; i < novels.length; i++) {
            novels[i].style.transform = "translateX(" + offset + "px)";
        }
    }
}

//thumbnail buttons to control slide display
function show(slide) {

    //hide whichever slide is currently being shown
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //show the clicked one
    slide.style.display = "grid";

}