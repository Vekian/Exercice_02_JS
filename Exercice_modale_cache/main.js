let button = document.getElementById('submit');
let box = document.getElementsByClassName('container');


button.addEventListener('click', function(e) {
    e.stopPropagation();
    box[0].style.left = 300 + 'px';
    document.querySelector('body').style.background = 'gray'
})

document.querySelector('body')
        .addEventListener('click', function() {
            box[0].style.left = -450 + 'px';
        document.querySelector('body').style.background = 'aqua'
        })