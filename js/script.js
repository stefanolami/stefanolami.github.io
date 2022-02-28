const figCaption = document.querySelector('.profile-pic-caption')






const mqLarge  = window.matchMedia( '(min-width: 700px)' );

 if (mqLarge.matches) {
     console.log('matches!')
        figCaption.addEventListener('mouseenter', () => {
            figCaption.textContent = 'Click on my face to know more about me!';
        });
        
        figCaption.addEventListener('mouseleave', () => {
            figCaption.textContent = 'Click on my face to know...';
        });
    }