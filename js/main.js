
//--------------------------------------------logica del carrito------------------------------------//
const carrito = [] 
const carrito2 = [] 

function agregarAlCarrito(televisor, producto, id){
    let q = 1
    while (q == 1){
        
        let confirmarCarrito = prompt("usted selecciono: " + desgloseDeDetallesTV(televisor) + "\nDesea agregarlo al carrito (SI o NO)")
        
        if (confirmarCarrito === "SI"){

            do{
                let cantidad = prompt("¿Cuantas unidades desea agregar?")
                
                if (cantidad > 0){
                    alert("El producto se ha agregado al carrito")
                    
                    do{      
                        carrito.push(producto)
                        carrito2.push(id)
                        cantidad = cantidad - 1
                    } while(cantidad != 0)
                        console.log(carrito);
                        console.log(carrito2);
                        
                        break
                }else{
                    alert("Ingreso no valido")
                }
            }while(false==false)
            break
        }
        if (confirmarCarrito === "NO"){
            alert("El producto no se ha agregado al carrito")
            break
        }else{
            alert("Ingreso no valido")
        }
    }
}

function seguirAgregando() {
    do {
        let respuesta = prompt("¿Desea seguir agregando productos al carrito (SI o NO)?")
        if (respuesta == "SI") {
            break
        }if (respuesta == "NO") {
            break
        }else{
            alert("Ingreso no valido")
        }
    } while (respuesta != "SI" || respuesta != "NO");


}


//-------------------------------------------------CLASES-------------------------------------------//

class TV {
    constructor(id, marca, pulgadas, resolucion, precio) {
        this.id = id
        this.marca = marca
        this.pulgadas = pulgadas
        this.resolucion = resolucion
        this.precio = precio
    }
    cambioAEuro(){
        this.precio = this.precio * 0.9
    }
    cambioAPesoUruguayo(){
        this.precio = this.precio * 40
    }
    cambioAPesoArgentino(){
        this.precio = this.precio * 1000
    }
}

const TV1 = new TV("1", "AOC", 27, "4k", 800)
const TV2 = new TV("2", "SAMSUNG", 40, "FULL HD", 750)
const TV3 = new TV("3", "PANAVOX", 32, "FULL HD", 400)
const TV4 = new TV("4", "SONY", 50, "4k", 1500)
const TV5 = new TV("5", "AOC", 42, "2k", 1000)
const TV6 = new TV("6", "SAMSUNG", 42, "2k", 1300)

const TVs = [TV1, TV2, TV3, TV4, TV5, TV6]

class moneda{
    constructor(nombre, valor) {
        this.nombre = nombre
        this.valor = valor
    }
}

const Dolar = new moneda("Dolar", 1) 
const Euro = new moneda("Euro", 0.91) 
const PesoArgentino = new moneda("Peso Argentino", 1000) 
const PesoUruguayo = new moneda("Peso Uruguayo", 40) 


const monedas = [Dolar, Euro, PesoArgentino, PesoUruguayo]

//-------------------------------------------------FUNCIONES------------------------------------------//

function desgloseDeDetallesTVs(){
    
    for(const tv of TVs){
        console.log("id: " + tv.id);
        console.log("Marca: " + tv.marca);
        console.log("Pulgadas: " + tv.pulgadas + '"');
        console.log("Resolucion: " + tv.resolucion);
        console.log("Precio: " + tv.precio + "USD");
        console.log(" ");
        
    }
}


function desgloseDeDetallesTV(tv){
    
        return("id: " + tv.id + "\nMarca: " + tv.marca + "\nPulgadas: " + tv.pulgadas + '"' + "\nResolucion: " + tv.resolucion + "\nPrecio: " + tv.precio + "USD");
}


function calculadoraDeCuotas(moneda){
   
    let total = carrito.reduce((a, b) => a + b, 0) * moneda.valor;

    
    let Cuotas = prompt("Ingrese la cantidad de cuotas deseadas");
    

    let resultado = total / Cuotas 

    
    alert("Usted tendra " + Cuotas + " cuotas de " + resultado + " " + moneda.nombre);
}


//-----------------------------------------PROCEDIMIENTO DE LA PAGINA-----------------------------------//

desgloseDeDetallesTVs()



alert("Bienvenido a expertos en TVs su pagina de venta de televisores de confianza presione aceptar para continuar")

do {
    
    let seleccionDeTV = prompt("Ingrese el numero de id de la TV que desee comprar (las TVs se encuentran en la consola) o ingrese 0 para continuar: ")
    
    if (seleccionDeTV == "0"){
        break
    }
    if (seleccionDeTV == "1"){
        
        agregarAlCarrito(TV1, TV1.precio, TV1.id)
        continue
    }
    if (seleccionDeTV == "2"){

        agregarAlCarrito(TV2, TV2.precio, TV2.id)
        continue
    }
    if (seleccionDeTV == "3"){

        agregarAlCarrito(TV3, TV3.precio, TV3.id)
        continue
    }
    if (seleccionDeTV == "4"){

        agregarAlCarrito(TV4, TV4.precio, TV4.id)
        continue
    }
    if (seleccionDeTV == "5"){

        agregarAlCarrito(TV5, TV5.precio, TV5.id)
        continue
    }
    if (seleccionDeTV == "6"){

        agregarAlCarrito(TV6, TV6.precio, TV6.id)
        continue

    }if(seleccionDeTV < 0 || seleccionDeTV > TVs.length || typeof seleccionDeTV == 'string'){

        
        alert("Numero no valido")
    
    }


    
}while (false == false);



do{    
    
    let IngresoMoneda = prompt("Ingrese el numero adjudicado a su moneda: \n 1- Peso Uruguayo \n 2- Peso Argentino \n 3- Dolar Estadounidense \n 4- Euro")

    if (IngresoMoneda == "1"){
        alert("Usted selecciono Peso Uruguayo")
        calculadoraDeCuotas(PesoUruguayo)
        break
    }else if (IngresoMoneda == "2"){
        alert("Usted selecciono Peso Argentino")
        calculadoraDeCuotas(PesoArgentino)
        break
    }else if (IngresoMoneda == "3"){
        alert("Usted selecciono Dolar Estadounidense")
        calculadoraDeCuotas(Dolar)
        break
    }else if (IngresoMoneda == "4"){
        alert("Usted selecciono Euro")
        calculadoraDeCuotas(Euro)
        break
    }else {
        alert("Ingreso no valido")
    }
}while(false==false);










