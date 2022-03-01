/* mobile viewport resizing */



const resizeOps = () => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
  };

resizeOps();
window.addEventListener("resize", resizeOps);

// SCRIPT

const personal = document.querySelector('.personal');
const projects = document.querySelector('.projects');
const projectsBtn = document.querySelector('.projects-btn');

projectsBtn.addEventListener('click', () => {
    personal.style.display = 'none';
    projects.style.display = 'flex';
})









/* const mqLarge  = window.matchMedia( '(min-width: 700px)' );

 if (mqLarge.matches) {
     console.log('matches!')
        figCaption.addEventListener('mouseenter', () => {
            figCaption.textContent = 'Click on my face to know more about me!';
        });
        
        figCaption.addEventListener('mouseleave', () => {
            figCaption.textContent = 'Click on my face to know...';
        });
    } */