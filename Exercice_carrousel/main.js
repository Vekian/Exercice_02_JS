let imgs = ['images/photo1.jpg', 'images/photo2.jpg', 'images/photo3.jpg', 'images/photo4.jpg', 'images/photo5.jpeg'];

let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let image = document.querySelector('img');
let index = 0;

document.querySelector('button')
        .addEventListener('click', function() {
                    image.style.top = '0' + 'px';
        })

box1.addEventListener('click', function() {
    if ( index > 0) {
        index--;
        image.setAttribute('src', imgs[index]);
    }
})

box2.addEventListener('click', function() {
    if ( index < 4) {
        index++;
        image.setAttribute('src', imgs[index]);
    }
})

