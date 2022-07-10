const body = document.querySelector("body")
body.style.display = "none"

const edadDelUsuario = prompt("Ingrese su edad")

if ( edadDelUsuario >= 18 ){
    alert("Sos mayor, podés ingresar")
    body.style.display = "flex"
} else{
    alert("NO podés ingresar, vuelve cuando seas mayor de edad")
    for (i=10;i>=0;i--) { 
        console.log("La página se cerrará en " + i ) 
        }
}


