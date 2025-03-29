let state = 'default'
let selectElement = document.querySelector('#wall')
let colorWall = document.querySelector('#color-wall')
let imageWall = document.querySelector('#image-wall')


selectElement.addEventListener('change', function(event) {
    state = event.target.value
    if (state === 'color') {
        colorWall.style.display = 'flex'
        imageWall.style.display = 'none'
    } else if (state === 'image') {
        colorWall.style.display = 'none'
        imageWall.style.display = 'flex'
    } else if (state === 'default') {
        colorWall.style.display = 'none'
        imageWall.style.display = 'none'
    }
})

