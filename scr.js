function validar(){

    var nombre, email, mesaje;
    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    mensaje = document.getElementById("mensaje").value;
    
        
    validamail = /\w+@\w+\.+[a-z]/;  // declaramos una expresion regular para validar el campo correo electrónico


    if (nombre === "" || email === "" || mensaje === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (nombre.length>30) {
        alert("El nombre es muy largo");
        return false;
    }
   
    else if (email.length>30){
        alert("El correo es muy largo");
        return false;
    }

    
    else if (mensaje.length>250){
        alert("El maximo de caracteres es de 250");
        return false;
        
    }

    //else if (!validamail.test(email)){
      // alert("El correo no es válido");
       //return false;
   //}

    var saludo = "Bienvenido " + nombre + "!!!. Gracias por tus sugerencias, te responderemos a la brevedad";
    
    alert(saludo);

    window.location.href="index.html ";

        
    }
    
    

