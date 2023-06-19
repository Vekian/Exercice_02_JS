
let elmCss = document.getElementsByClassName('key');
let elmJs = document.querySelectorAll('audio');



function playSound (e) {
  for (let i=0; i < elmJs.length; i++) {
    if (e.keyCode == elmJs[i].dataset.key) {
      elmJs[i].currentTime = 0;
      elmJs[i].play();
      elmCss[i].classList.add("playing");
    }
    elmCss[i].addEventListener('transitionend', function removeTransition() {
  elmCss[i].classList.remove("playing");
});
  }
}

window.addEventListener('keydown', playSound);

/*let keys = document.querySelectorAll('.key');

function playSound(event) {
  let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);  
  let key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  
  if (!audio) return ;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(event){
  event.target.classList.remove('playing');
}

window.addEventListener('keydown', playSound);

keys.forEach(function(key){ 
  key.addEventListener('transitionend', removeTransition)
});*/


function beatBox() {
  function simulateKey(key) {
    let event = new Event('keydown', {
      bubbles: true
    });
    event.keyCode = key;
    document.dispatchEvent(event);
  }

  function playBeat(key, time) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(simulateKey(key));
      }, time);
    });
  }

  function rockBeat(number) {

    playBeat(69, number)
        .then(function() {
            playBeat(69, number + 400);
        })
        .then(function() {
            playBeat(65, number + 800);
        })
        .then(function(){
            playBeat(69, number + 1600);
        })
        .then(function() {
            playBeat(69, number + 2200);
        })
        .then(function() {
            playBeat(65, number + 2400);
        })
  }

  rockBeat(0);
}