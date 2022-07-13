//ENTREGA 2 CALCULADOR DE DESCUENTOS, USUARIO HABILITADO admin

const body = document.querySelector("body")
body.style.display = "none"

const nombreDeUsuario = prompt("Ingrese su usuario:")


    
if ( nombreDeUsuario === "admin" ){
    alert("Bienvenido, podés ingresar")
    body.style.display = "flex"
    
    let cantidad,precio,desc,compra,pagar;

    precio = parseFloat(prompt("Ingresar precio"));
    cantidad = parseFloat(prompt("Ingresar cantidad"));
    
   
        compra = precio*cantidad;
        desc = compra*0.15;
        pagar = compra-desc;
       
        
    
   
    console.log("El Descuento es: "+desc);
    console.log("El monto a pagar es: "+pagar);
    
} else{
    alert("NO podés ingresar, vuelve cuando seas mayor de edad")
    for (i=10;i>=0;i--) { 
        console.log("La página se cerrará en " + i ) 
        }
}




