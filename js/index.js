//NAV LINKS BOLD WHEN WHEN HOVER OVER
const navLinks = document.querySelectorAll('nav a')
navLinks.forEach(link => {
    link.addEventListener('mouseover', (e) => {
        e.target.style.borderBottom = "solid";
        e.target.style.transform = "scale(1.3)";
        e.target.style.transition = "all 0.5s";
    })
    link.addEventListener('mouseleave', (e) => {
        e.target.style.borderBottom = "none";
        e.target.style.transform = "scale(1)";
        e.target.style.transition = "all 0.5s";  
    })
})


//ANIMATION ON HEADLINE PRESS Z

const logoHeading = document.querySelector('.logo-heading');
logoHeading.setAttribute('animation', 'myanimation 2s 3s');
window.addEventListener('keydown', (e) => {
    if (e.keyCode === 90) {
        logoHeading.style.color = 'red';
        logoHeading.animate([
            //keyframes
            { transform: 'translateX(300px)' }
        ], {
            duration: 1000,
        });
    }
})

//DRAG AND DROP BUS PICTURE
const navContainer = document.querySelector('.nav-container');
const dropZone = document.createElement('div');
dropZone.setAttribute('class', 'dropZone');
dropZone.textContent = "Drag and drop bus picture here!";
dropZone.style.textAlign = "center";
dropZone.style.paddingTop = "1rem";
dropZone.style.width = "10rem";
dropZone.style.height = "3.5rem";
dropZone.style.marginLeft = "-250px";
dropZone.style.background = "gray";
navContainer.appendChild(dropZone);

const logoImage = document.querySelector('.container img');
logoImage.setAttribute('id', 'dragagable');
logoImage.setAttribute('draggable', 'true');
logoImage.setAttribute("ondragstart", "event.dataTransfer.setData('text/plain',null)");

document.addEventListener('drag', (e) => {

}, false);
document.addEventListener('dragstart', (e) => {
    dragged = e.target;
    e.target.style.opacity = .5;
}, false);

document.addEventListener('dragend', (e) => {
    e.target.style.opacity = "";
}, false);

document.addEventListener('dragover', (e) => {
    e.preventDefault();
}, false);
document.addEventListener('dragenter', (e) => {
    if(e.target.className == "dropZone"){
        e.target.style.background = "blue";
    }
}, false);
document.addEventListener('drop', (e) => {
    e.preventDefault();
    if(e.target.className == 'dropZone') {
        e.target.style.background = "";
        dropZone.textContent = "";
        dragged.parentNode.removeChild(dragged);
        e.target.appendChild(dragged);
    }
}, false);

//DOUBLE CLICK, PICTURE CHANGES
const adventureImage = document.querySelector(".img-content img");

adventureImage.addEventListener('dblclick', e => {
    e.target.setAttribute('src', "img/adventure1.jpg");
})

//SCROLL HEADER COLOR CHANGES TO LIGHTBLUE
let lastPosition = 0;
let counter = false;
const headerContainer = document.querySelector(".main-navigation");
function changeHeaderColor(scrollPosition) {
    if(lastPosition >= 500){
        headerContainer.style.backgroundColor = "lightblue";
    }
}

window.addEventListener('scroll', e => {
    lastPosition = window.scrollY;
    if(!counter){
        window.requestAnimationFrame(() => {
                changeHeaderColor(lastPosition);
                counter = false;
            });
        counter = true;
    }
})