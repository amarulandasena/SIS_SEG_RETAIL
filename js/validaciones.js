
const validarLogin = () => {

    let idUsuario = document.getElementById('numeroIdentificacion').value;
    let contrasegnaUsuario = document.getElementById('contrasegna').value;

    if (idUsuario == '71388303' && contrasegnaUsuario == '12345') {

        window.open('paginaPrincipal.html');

    } else {
        
        alert('Datos erroneros');
    }
    
}



    
