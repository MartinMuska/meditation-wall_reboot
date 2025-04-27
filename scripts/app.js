const selectWallType = document.querySelector('#wall');  
const colorWall = document.querySelector('#color-wall');  
const imageWall = document.querySelector('#image-wall');  

const displayMap = {
    'color': () => {
        colorWall.style.display = 'flex';
        imageWall.style.display = 'none';
    },
    'image': () => {
        colorWall.style.display = 'none';
        imageWall.style.display = 'flex';  
    },
    'default': () => {
        colorWall.style.display = 'none';
        imageWall.style.display = 'none';
    }
};

selectWallType.addEventListener('change', (event) => {
    (displayMap[event.target.value] || displayMap['default'])();
});

