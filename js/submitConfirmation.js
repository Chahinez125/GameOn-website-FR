const popupSubmit = document.getElementsByClassName('bg-popup');
const closePopupSubmit = document.getElementsByClassName('close-popup');
const closeBtnConfirmation = document.getElementById('close-btn-confirmation');

//Aficher la fenêtre 
function displayPopupsubmit() {
    //cacher le modal
    modalbg.style.display = 'none'
    //Aficher la fenêtre réuissit popup
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
// boutton pour fermer popup
closePopupSubmit[0].addEventListener('click', closeSubmit);
closeBtnConfirmation.addEventListener('click', closeSubmit);