const figCaption = document.querySelector('.profile-pic-caption')

figCaption.addEventListener('mouseenter', () => {
    figCaption.textContent = 'Click on my face to know more about me!';
});

figCaption.addEventListener('mouseleave', () => {
    figCaption.textContent = 'Click on my face to know...';
});


