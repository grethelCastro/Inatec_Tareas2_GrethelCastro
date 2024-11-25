function alternarMenu() {  
    const menu = document.getElementById('menuItems');  
    menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'block' : 'none';  
}  

function mostrarBienvenida() {  
    const mensajeBienvenida = document.getElementById('mensajeBienvenida');  
    mensajeBienvenida.style.display = 'block';  
    const contenedorFormulario = document.getElementById('contenedorFormulario');  
    contenedorFormulario.style.display = 'none'; 
}  

function cerrarBienvenida() {  
    const mensajeBienvenida = document.getElementById('mensajeBienvenida');  
    mensajeBienvenida.style.display = 'none';  
}  

function mostrarFormulario() {  
    const contenedorFormulario = document.getElementById('contenedorFormulario');  
    const botonSaludar = document.getElementById('botonSaludar');  

    contenedorFormulario.style.display = 'block';  
    botonSaludar.style.display = 'none';  
}  

function guardarDatos(event) {  
    event.preventDefault();   
    alert('Datos guardados: ' + document.getElementById('nombre').value + ' ' + document.getElementById('apellido').value + ' ' + document.getElementById('correo').value);  
    document.getElementById('contenedorFormulario').style.display = 'none'; 
    document.getElementById('botonSaludar').style.display = 'block';  
}