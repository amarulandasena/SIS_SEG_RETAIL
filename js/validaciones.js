
const validarLogin = () => {

    let idUsuario = document.getElementById('numeroIdentificacion').value;
    let contrasegnaUsuario = document.getElementById('contrasegna').value;

    if (idUsuario == '1234567890' && contrasegnaUsuario == '12345') {

        window.open('paginaPrincipal.html');

    } else {
        
        alert('Su número de identificación y/o contraseña son erroneos');
    }
    
}



    
