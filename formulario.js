function validarFormulario() {
    var nombre = document.getElementById('nombre').value.trim();
    var cel = document.getElementById('cel').value.trim();
    var email = document.getElementById('email').value.trim();
    var msg = document.getElementById('msg').value.trim();

    // Validar que los campos requeridos no estén vacíos
    if (nombre === '' || cel === '' || email === '') {
        alert('Por favor completa todos los campos obligatorios.');
        return false; // Detener el envío del formulario
    }

    // Validar formato de email si se proporcionó
    if (email !== '') {
        var emailPattern = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[_a-z0-9-]+)*(\.[a-z]{2,15})/i/*/^[^\s@]+@[^\s@]+\.[^\s@]+$/*/;
        if (!emailPattern.test(email)) {
            alert('Por favor ingresa un correo electrónico válido.');
            return false; // Detener el envío del formulario
        }
    }

    // Si llegamos aquí, el formulario es válido
    return alert(`¡¡Listo!! Pronto te contactaremos`); // Permitir el envío del formulario
}