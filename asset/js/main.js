const showHiddenPass =(loginPassword, loginEye)=>{
    const input = document.getElementById(loginPassword);
    const iconEye = document.getElementById(loginEye);

    iconEye.addEventListener('click', ()=>{
        // changer le type du mot de passe pour afficher ou cacher le mot de passe
        if(input.type === 'password'){
            // le texte est le mot de passe
            input.type = 'text';

            // changer l'icon
            iconEye.classList.add('ri-eye-line')
            iconEye.classList.remove('ri-eye-off-line')
        } else {
            // changer le mot de passe
            input.type = 'password'

            // changer l'icon
            iconEye.classList.remove('ri-eye-line')
            iconEye.classList.add('ri-eye-off-line')
            
        }
    })
}

showHiddenPass('login-password', 'login-eye')

/*==================== FIN ====================*/

/*==================== MENUS ACTIVATION ====================*/

const allSideMenu = document.querySelectorAll('#sidebars a');

allSideMenu.forEach(item => {
    const li = item; // L'élément 'a' dans ce cas

    item.addEventListener('click', function () {
        // Retirer la classe 'active' de tous les éléments
        allSideMenu.forEach(i => {
            i.classList.remove('active');
        });

        // Ajouter la classe 'active' à l'élément cliqué
        li.classList.add('active');
    });
});

