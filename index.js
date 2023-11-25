function enviarInfo() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fechaNac = document.getElementById("fechaNacimiento").value;

    var data = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNac
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Respuesta de servidor", data);
        alert("Sus datos fueron enviados con exito");
    })
    .catch(error => {
        console.error("Error al mandar datos", error);
        alert("Hubo un error al mandar los datos");
    });
}