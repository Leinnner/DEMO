
let form = document.getElementById('form');



form.addEventListener('submit', (e)=>{
    let usuario = document.getElementById('usuario').value;
    let clave = document.getElementById('clave').value;
    e.preventDefault();

    if(usuario == 'admin' && clave == '1234'){
       location.href = "admin.html";
    }else if(usuario == "estudiante" && clave == '1234'){
        location.href = "estudiantes.html";
    }else if(usuario == "profesor" && clave == '1234'){
        location.href = "profesores.html";
    }
    else{
        alert('Usuario no registrado');
    }
})
