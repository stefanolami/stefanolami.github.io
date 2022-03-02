/* mobile viewport resizing */



const resizeOps = () => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
  };

resizeOps();
window.addEventListener("resize", resizeOps);

// SCRIPT

const personal = document.querySelector('.personal');
const projects = document.querySelector('.projects');
const projectsBtn = document.querySelectorAll('.projects-btn');
const getInTouch = document.querySelector('.getintouch');
const hiddenContacts = document.querySelector('.hidden-contacts');
const arrow = document.querySelector('.arrow');
const backToMe = document.querySelectorAll('.back-to-me');



const showProjects = () => {
    personal.style.display = 'none';
    projects.style.display = 'grid';
}

const showPersonal = () =>  {
    personal.style.display = 'flex';
    projects.style.display = 'none';
}

getInTouch.addEventListener('click', () => {
    hiddenContacts.style.display = 'block';
})

arrow.addEventListener('click', () => {
    hiddenContacts.style.display = 'none';
})

projectsBtn.forEach(element => {
    element.addEventListener('click', event => {
    showProjects();
    })
})

backToMe.forEach(element => {
    element.addEventListener('click', event => {
      showPersonal();
    })      
})







const mqMedium  = window.matchMedia( '(min-width: 600px)' );

if (mqMedium.matches) {
    getInTouch.src = './images/getintouch.png';
} else {
    getInTouch.src = './images/getintouch-black.png';
}
     