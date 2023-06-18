let elms = document.getElementsByClassName('box');
let colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let count = [0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i=0; i < elms.length; i++) {
    elms[i].addEventListener('click', function () {
        if (count[i] < 5) {
            elms[i].style.background = colors[count[i]];
            count[i] = count[i] + 1;
        }
        else {
            elms[i].style.background = colors[0]
            count[i] = 1; 
        }
    })
}