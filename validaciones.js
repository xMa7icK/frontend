function validar() {
    var nombre= validar_nombre();
    var email = validar_email();
    var passw= validar_password();
    var passw2 = validar_password2();
    var codP = validar_codP()
    var dir= validar_direccion();
    var Local = validar_localidad();
    var tel = validar_numeros();
    var comu= validar_comuna();
    return (nombre && email && passw && passw2 && codP && dir && Local && tel && comu);
}

function validar_nombre(){
    var nombre=document.getElementById("nombre").value;
    var div=document.getElementById("msj-nombre");
    if (nombre !=""){

        div.innerHTML="";
        return true;
    }
    else{
        div.innerHTML="El campo nombre no puede quedar vacío";
        div.className="text-danger";
        return false
    }
}


function validar_fto_email(email) {
    var idx_arroba = email.indexOf("@");
    if (idx_arroba < 1) {
        return false;
    } else {
        var idx_punto = email.indexOf(".");
        if(idx_punto <= idx_arroba + 2 || idx_punto == email.length - 1) {
            return false;
        }        
        return true;
    }
}
function validar_email() {
    var email = document.getElementById("email").value;
    var div = document.getElementById("msj-email");
    if (email != "") {
        if (validar_fto_email(email)) {
            div.innerHTML = "";
            return true;
        } else {
            div.innerHTML = "El formato del email no es valido";
            div.className = "text-danger";
            return false;
        }
    } else {
        div.innerHTML = "El campo correo electrónico no puede quedar vacío";
        div.className = "text-danger";
        return false;
    }
}

function validar_password() {
    var passw = document.getElementById("password").value;
    var div = document.getElementById("msj-passw");
    if  (passw.length>=3 || passw.length > 5) {
        div.innerHTML = "";
        return true;
    } 
    else {
        div.innerHTML = "La contraseña debe de tener de 3 a 6 caracteres";
        div.className = "text-danger";
        return false;
    }
}

function validar_password2() {
    var passw= document.getElementById("password").value;
    var passw2 = document.getElementById("password2").value;
    var div = document.getElementById("msj-passw2");
 if (passw!=passw2){
    div.innerHTML="Ambas contraseñas deben coincidir";
    div.className="text-danger";
    return false;
}
 else{
     div.innerHTML=""
     return true;
 }
}

function validar_codP() {
    var codP=document.getElementById("CodigoP").value;
    var div=document.getElementById("msj-cod");
    if (codP.length==7 && Number(codP) ){
        div.innerHTML="";
        return true;
    }
    else{
        div.innerHTML="El campo Código Postal debe tener 7 digitos";
        div.className="text-danger";
        return false;
    }
}
function validar_direccion(){
    var dir = document.getElementById("Direccion").value;
    var div = document.getElementById("msj-dir");
    if (dir!=""){
        div.innerHTML="";
        return true;
    }
    else{
        div.innerHTML="El campo direccion no puede quedar vacío";
        div.className="text-danger";
        return false;
    }
}

function validar_localidad(){
    var local=document.getElementById("Localidad").value;
    var div=document.getElementById("msj-local");
    if(local!=""){
        div.innerHTML="";
        return true;
    }
    else{
        div.innerHTML="El campo Localidad no puede quedar vacío";
        div.className="text-danger";
        return false;
    }
}


function validar_numeros(){
    var telefonoM=document.getElementById("tel").value;
    var div=document.getElementById("msj-tel");
    var telefonoR=document.getElementById("telR").value;
    if (Number(telefonoM)!="" || Number(telefonoR)  !=""){
        if(telefonoM.length==9 || telefonoR.length==9){
            div.innerHTML="";
            return true;
        }
        else{
            div.innerHTML="El campo número debe de tener 9 digitos y no se aceptan caracteres";
            div.className="text-danger";
            return false;
        }
    }
    else{
        div.innerHTML="Debe ingresar un número en cualquiera de los dos campos";
        div.className="text-danger";
    }
}


function validar_comuna(){
    var select=document.getElementById("seleccion").value;
    var div=document.getElementById("msj-select");
    if(select==0 || select==""){
        div.innerHTML="debe seleccionar una opción"
        div.className="text-danger"
        return false;
    }
    else{
        div.innerHTML="";
        return true;
    }
}
