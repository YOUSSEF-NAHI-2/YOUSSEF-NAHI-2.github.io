async function hashPasswordWithSHA256(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashedPassword = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashedPassword.toUpperCase(); // Convert the hash to uppercase
}


function generate(){
    const plainPassword = $("#pas").val();
    hashPasswordWithSHA256(plainPassword)
    .then(hashedPassword => {
    //   console.log('Hashed password:', hashedPassword);
      $("#res").text(hashedPassword)
    })
    .catch(error => {
      console.error('Error hashing password:', error);
    });
}

// Sélectionner le texte à copier
const texteACopier = document.getElementById('res');

// Sélectionner le bouton
const boutonCopier = document.getElementById('boutonCopier');

// Ajouter un gestionnaire d'événement pour le clic sur le bouton
boutonCopier.addEventListener('click', () => {
  // 1. Si le <textarea> n'est pas vide
  // console.log(texteACopier.textContent.length)
  if (texteACopier.textContent.length) {
      // 2. On copie le texte dans le presse-papier
      navigator.clipboard.writeText(texteACopier.textContent).then(() => {
          // 4. On affiche l'alert
          // alert("Texte copié !")
          boutonCopier.innerText = "Copied"
      })
  } else {
      alert("you have to generate a code first")
  }
});