function validar(){


    var nombre, email, mensaje, 
    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    mensaje = document.getElementById("mensaje").value;
    
        
   
    validamail = /\w+@\w+\.+[a-z]/;  // declaramos una expresion regular para validar el campo correo electrónico


    if (nombre === "" || email === "" || mensaje === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if ((nombre.length>50) ){
        alert("El nombre es muy largo");
        return false;
    }
    
    else if (email.length>30){
        alert("El correo es muy largo");
        return false;
    }
    else if (mensaje.length>250){
        alert("El mensaje no debe ser mayor a los 250 caracteres");
        return false;
    }
     else if (!validamail.test(email)){
        alert("El correo no es válido");
        return false;
    }

    var saludo = "Bienvenido " + nombre + apellido + "!!!. Gracias por registrarte" ;
    
    alert(saludo);

  
    var saludo = "Bienvenido " + nombre + apellido + "!!!. Gracias por registrarte" ;
    
    alert(saludo);*/
}

