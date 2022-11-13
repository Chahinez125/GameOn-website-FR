function editNav() {
  const myTopNav =
    document.getElementById("myTopnav");
  if (myTopNav.className === "topnav") {
    myTopNav.className += " responsive";
    document.getElementById("hero").style.marginTop = "280px";
  } else {
    myTopNav.className = "topnav";
    document.getElementById("hero").style.marginTop = "0";
  }
}

// DOM Éléments
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementsByClassName('close');

//lance l'événement modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// lance formulaire modal
function launchModal() {
  modalbg.style.display = "block";
}

// fermer modal de formulaire
function closeModal() {
  modalbg.style.display = 'none';
}
// Obtenez la variable closeBtn et obtenez le premier élément pour ajouter un écouteur
closeBtn[0].addEventListener('click', closeModal);

