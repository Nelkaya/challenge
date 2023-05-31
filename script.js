const mensaje = document.querySelector(".mensaje");
const resultado = document.querySelector(".resultado")

//funcion boton encriptar
function btnEncriptar(){
    const text1 = encriptar(mensaje.value)
    resultado.value = text1
    mensaje.value = "";
    resultado.style.backgroundImage = "none"
}

//funcion boton desencriptar
function btnDesencriptar(){
    const text2 = desencriptar(mensaje.value)
    resultado.value = text2
    mensaje.value = "";
}

//funcion boton copiar
function btnCopiar(){
    resultado.select();
    resultado.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

//funcion que realiza la encriptacion
function encriptar(cadena1){
    cadena1 = cadena1.toLowerCase()
    let cadenaE = cadena1.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat")

   return cadenaE
}

//funcion que realiza la desencriptacion
function desencriptar(cadena2){
    cadena2 = cadena2.toLowerCase()
    let cadenaF = cadena2.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u")

   return cadenaF
}
