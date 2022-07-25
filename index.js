
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

const verlistaClientes = prompt ("Si desea ver la lista de clientes de menor a mayor adescriba yes, de lo contrario el programa se cerrará en 10 segundos") 


if ( verlistaClientes == "yes" ){


 const clientes = [
    {
        nombre: "Roberto",
        edad: 55
    },
    {
        nombre: "Román",
        edad: 40
    },
    {
        nombre: "Manuel",
        edad: 21
    },
    {
        nombre: "Eizabeth",
        edad: 36
    },
    {
        nombre: "Tomás",
        edad: 22
    },
    {
        nombre: "Verónica",
        edad: 30
    },
 ]

 console.log(clientes)

 clientes.sort( (a, b) => {
 
     if(a.edad > b.edad){
         return 1
     }
     else if( a.edad < b.edad){
         return -1
     }
 })


} else{
    alert("Ha elegido no ver la lista de clientes")
    for (i=10;i>=0;i--) { 
        console.log("La página se cerrará en " + i ) 
        }
}


