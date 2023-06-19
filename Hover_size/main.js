let boxes = document.getElementsByClassName('box');


for (let i=0; i < boxes.length; i++) {
    boxes[i].addEventListener('mousedown', function () {
        boxes[i].style.width = '400' + 'px';
        boxes[i].addEventListener('mouseup', function() {
            boxes[i].style.width = '200' + 'px';
        })
    })
}