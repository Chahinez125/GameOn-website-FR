const popupSubmit = document.getElementsByClassName('bg-popup');
const closePopupSubmit = document.getElementsByClassName('close-popup');
const closeBtnConfirmation = document.getElementById('close-btn-confirmation');

// Afficher  popup  submit
function displayPopupSubmit() {
    // cacher le modal
    modalbg.style.display = 'none';
    // Afficher la fenêtre contextuelle de réussite
    popupSubmit[0].style.display = 'block'
}

// fermer popup
function closeSubmit() {
    popupSubmit[0].style.display = 'none';
    first.style.border = 'none';
    last.style.border = 'none';
    email.style.border = 'none';
    birthdate.style.border = 'none';
    quantity.style.border = 'none';
}

// Boutons pour fermer la popup
closePopupSubmit[0].addEventListener('click', closeSubmit);
closeBtnConfirmation.addEventListener('click', closeSubmit);