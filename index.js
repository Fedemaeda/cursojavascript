
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
    alert("El Descuento es: "+desc);
    alert("El monto a pagar es: "+pagar);
    
} else{
    alert("NO podés ingresar")
    for (i=10;i>=0;i--) { 
        console.log("La página se cerrará en " + i ) 
        }
}

const verlistaClientes = prompt ("Si desea ver la lista de clientes escriba yes, de lo contrario el programa se cerrará en 10 segundos") 


if ( verlistaClientes == "yes" ){


 const clientes = [
    {
        nombre: "Roberto",
        
    },
    {
        nombre: "Román",
        
    },
    {
        nombre: "Manuel",
        
    },
    {
        nombre: "Eizabeth",
        
    },
    {
        nombre: "Tomás",
        
    },
    {
        nombre: "Verónica",
        
    },
 ]

 console.log(clientes)

 for ( let i = 0; i < clientes.length; i++ ){

    console.log(clientes[i].nombre)
 
 }

} else{
    alert("Ha elegido no ver la lista de clientes")
    for (i=10;i>=0;i--) { 
        console.log("La página se cerrará en " + i ) 
        }
}


// After Class
/*

function incremento (base, cantidad) {

    const baseEIncremento = base + 5

    for (let i = base; i < baseEIncremento; i++){

        console.log( `Incremento ${i}: ${i + cantidad}`)
    }

}

incremento(10, 5)


*/
