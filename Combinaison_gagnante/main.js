// Variables pour stocker l'état des touches
let isZKeyPressed = false;
let isPKeyPressed = false;
let isColorKeyPressed = false;

// Fonction de gestion de l'événement keydown
function handleKeyDown(event) {
  if (event.key === 'z') {
    isZKeyPressed = true;
  }
  if (event.key === 'p') {
    isPKeyPressed = true;
  }
  if (event.key === 'c') {
    isColorKeyPressed = true;
  }

  // Vérifier si les deux touches sont enfoncées simultanément
  if (isZKeyPressed && isPKeyPressed) {
    document.getElementById('new')
            .innerHTML = `<p>Bien le bonsoir!<p>`;
    
    if (isColorKeyPressed) {
        document.getElementById('new').style.color= 'red';
    }
    // Ajoutez ici le code que vous souhaitez exécuter lorsque les touches sont enfoncées simultanément
  }
  else {
    document.getElementById('new')
        .innerHTML = '';
    document.getElementById('new').style.color= '';
}
}

// Fonction de gestion de l'événement keyup
function handleKeyUp(event) {
  if (event.key === 'z') {
    isZKeyPressed = false;
  }
  if (event.key === 'p') {
    isPKeyPressed = false;
  }
  if (event.key === 'c') {
    isColorKeyPressed = false;
  }
}

// Ajouter les écouteurs d'événements
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);
