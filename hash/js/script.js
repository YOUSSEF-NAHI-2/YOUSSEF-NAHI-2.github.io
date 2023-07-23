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
  