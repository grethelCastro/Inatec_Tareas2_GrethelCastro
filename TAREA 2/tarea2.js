let registros = [];  

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
    contenedorFormulario.style.display = 'block';  
    document.getElementById('tablaDatos').classList.add('hidden');  
    document.getElementById('botonSaludar').style.display = 'none';   
}  

function guardarDatos(event) {  
    event.preventDefault();   

    const nombre = document.getElementById('nombre').value;  
    const apellido = document.getElementById('apellido').value;  
    const correo = document.getElementById('correo').value;  
    registros.push({ nombre, apellido, correo });  
    actualizarTabla();  
    document.getElementById('formDatos').reset();  
    document.getElementById('contenedorFormulario').style.display = 'none';  
    document.getElementById('botonSaludar').style.display = 'block';  
}  

function actualizarTabla() {  
    const cuerpoTabla = document.getElementById('cuerpoTabla');  
    cuerpoTabla.innerHTML = '';  

    registros.forEach((registro, index) => {  
        const fila = document.createElement('tr');  
        fila.innerHTML = `  
            <td>${registro.nombre}</td>  
            <td>${registro.apellido}</td>  
            <td>${registro.correo}</td>  
            <td><button onclick="eliminarRegistro(${index})">Eliminar</button></td>  
        `;  
        cuerpoTabla.appendChild(fila);  
    });  

    document.getElementById('tablaDatos').classList.remove('hidden');  
}  

function eliminarRegistro(index) {  
    registros.splice(index, 1);   
    actualizarTabla();   
}