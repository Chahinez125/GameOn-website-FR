//champs de formulaire
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const quantity = document.getElementById('quantity');
const birthdate = document.getElementById('birthdate');
const allLocations = document.getElementById('allLocations');
const locations = document.querySelectorAll('#allLocations .checkbox-input');
const checkbox1 = document.getElementById('checkbox1');
const input = document.getElementsByClassName('text-control');
const form = document.getElementById('form');

//pour les regex
// Cette regex est utile pour vérifier une chaîne
const stringRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{2,50})$/;
//Cette expression régulière est utile pour vérifier le format de la date de naissance
const birthdateRegex = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;
//Cette expression régulière est utile pour vérifier le format des e-mails
const mailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
//Cette regex est utile pour vérifier un format entier
const integerRegex = /^\+?(0|[1-9]\d*)$/;

//utilitaires 
function isStringMatchRegexFormat(string, strFormat) {
    return strFormat.test(string);
}

function checkSimpleString(field){
    /* Nous vérifierons si la longueur de la chaîne est d'au moins 2 ou plus + supprimer les espaces et vérifier qu'elle est différente de vide + la valeur de la chaîne correspond
    est notre fonction*/
    if(field.value.match(stringRegex)) {
        // si cela est valide, définissez l'attribut data faux
   
        field.parentElement.setAttribute('data-error-visible', 'false');
        // puis ajoutez la bordure verte
        field.classList.remove('border-red');
        field.classList.add('border-green');
        return true;
}
       // s'il n'est pas valide, définissez l'attribut data vrai
       field.parentElement.setAttribute('data-error-visible', 'true');

       //puis ajoutez la bordure rouge
       field.classList.remove('border-green');
       field.classList.add('border-red');
       return false;
}
// vérification du prénom
function checkFirstName() {
    if(checkSimpleString(firstName) === true) {
        return true;
    }

    return false;
}
// vérification du nom de famille 
function checkLastName() {
    if(checkSimpleString(lastName) === true) {
        return true;
    }

    return false;
}
// vérification l'email
function checkEmail() {
    //Nous allons vérifier si l'email est valide par rapport à la regex
    if(isStringMatchRegexFormat(email.value, mailRegex)) {
        // si cela est valide, définissez l'attribut data faux
        email.parentElement.setAttribute('data-error-visible', 'false');  
        // puis ajoutez la bordure verte
        email.classList.remove('border-red');
        email.classList.add('border-green');
        return true;
    } 
    // s'il n'est pas valide, définissez l'attribut data vrai

email.parentElement.setAttribute('data-error-visible', 'true');

    //puis ajoutez la bordure rouge     
    email.classList.remove('border-green');
    email.classList.add('border-red');
    return false;
}  
// vérification date de naissance
function checkBirthdate() {
    //Nous allons vérifier si la date de naissance est valide par rapport à la regex
    if (isStringMatchRegexFormat(birthdate.value, birthdateRegex)){
        //si cela est valide, définissez l'attribut data faux
        birthdate.parentElement.setAttribute('data-error-visible', 'false');
        //puis ajouter la bordure verte
  
birthdate.classList.remove('border-red');
        birthdate.classList.add('border-green');
        return true;
    }
    // s'il n'est pas valide, définissez l'attribut data vrai
    birthdate.parentElement.setAttribute('data-error-visible', 'true');
     //puis ajouter la bordure rouge
     birthdate.classList.remove('border-green');
    birthdate.classList.add('border-red');
    return false;
}
// contrôle de quantité
function checkQuantity() {
    // Nous vérifierons si la quantité est valide par rapport à la regex
    if(isStringMatchRegexFormat(quantity.value, integerRegex)) {
        // si cela est valide, définissez l'attribut data faux
        quantity.parentElement.setAttribute('data-error-visible', 'false');
        // puis ajoutez la bordure verte
        quantity.classList.remove('border-red');
        quantity.classList.add('border-green');
        
        return true;
    }
    
    // s'il n'est pas valide, définissez l'attribut data vrai
    quantity.parentElement.setAttribute('data-error-visible', 'true');
    //  puis ajoutez la bordure rouge
    quantity.classList.remove('border-green');
    quantity.classList.add('border-red');
    return false;
}

// vérification des conditions d'utilisation
function checkCheckBox() {
    // Nous vérifierons si la case est cochée
    if(checkbox1.checked === true) {
        //s'il n'est pas valide, définissez l'attribut data faux
        checkbox1.parentElement.setAttribute('data-error-visible', 'false');
        return true;
    }

    // s'il n'est pas valide, définissez l'attribut data vrai
    checkbox1.parentElement.setAttribute('data-error-visible', 'true');
    return false;
}

// vérification des emplacements
function checkLocations() {
    // Par défaut, nous définissons l'erreur de données visible faux
    allLocations.setAttribute('data-error-visible', 'true');
    /* Boucle dans tous les emplacements */
    for (let i = 0; i < locations.length; i++) {
        /* s'il y a un lieu qui est coché, on retourne true */
        if (locations[i].checked) {
            // Ensuite, nous définissons l'erreur de données visible vrai
            allLocations.setAttribute('data-error-visible', 'false');
            return true;
        }
    }
    return false;
}

// Validation des champs du formulaire
function formFieldsValidation(element, method, event) {
    element.addEventListener(event, method);
}
// Ajouter un événement sur le défocalisation (utile pour les entrées classiques)
formFieldsValidation(firstName, checkFirstName, 'focusout');
formFieldsValidation(lastName, checkLastName, 'focusout');
formFieldsValidation(email, checkEmail, 'focusout');
formFieldsValidation(birthdate, checkBirthdate, 'focusout');
formFieldsValidation(quantity, checkQuantity, 'focusout');
// Ajouter un événement sur le changement (utile sur les cases à cocher ou les boutons radio)
formFieldsValidation(allLocations, checkLocations, 'change');
formFieldsValidation(checkbox1, checkCheckBox, 'change');

// Contrôle de validation des champs
function forAllFieldsValidation() {
    checkFirstName();
    checkLastName();
    checkEmail();
    checkBirthdate();
    checkQuantity();
    checkLocations();
    checkCheckBox();
}

// contrôle de validation du formulaire
function validate() {
    // Nous vérifions tous les champs et renvoyons true si tous les champs sont corrects
    if (checkFirstName() === true && checkLastName() === true && checkEmail() === true && checkBirthdate() === true &&
        checkQuantity() === true && checkLocations() === true && checkCheckBox() === true) {
        
        console.log("The form has been validated!");
        
        return true;
    }
    return false;

}

// submit formulaire 
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validate() == true) {
        /* Si la validation du formulaire est ok, nous affichons le succès du popup et réinitialisons le formulaire */
        displayPopupSubmit();
        form.reset();
    } else {
        // Révérifier tous les champs
        forAllFieldsValidation();
    }
});