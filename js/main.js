


alert("Bienvenido a la calculadora de cuotas presione aceptar para continuar")

let i = 0
while(i == 0){    
    
    let IngresoMoneda = prompt("Ingrese el numero adjudicado a su moneda: \n 1- Peso Uruguayo \n 2- Peso Argentino \n 3- Dolar Estadounidense \n 4- Euro")

    if (IngresoMoneda == "1"){
        alert("Usted selecciono Peso Uruguayo")
        calculadoraDeCuotas("Pesos Uruguayos")
        let i=1
    }else if (IngresoMoneda == "2"){
        alert("Usted selecciono Peso Argentino")
        calculadoraDeCuotas("Pesos Argentinos")
        let i=1
    }else if (IngresoMoneda == "3"){
        alert("Usted selecciono Dolar Estadounidense")
        calculadoraDeCuotas("Dolares Estadounidenses")
        let i=1
    }else if (IngresoMoneda == "4"){
        alert("Usted selecciono Euro")
        calculadoraDeCuotas("Euros")
        let i=1
    }else {
        alert("Ingreso no valido")
    }
}





function calculadoraDeCuotas(moneda){
    let total = prompt("Ingrese el valor total a calcular");
    let Cuotas = prompt("Ingrese la cantidad de cuotas");
    
    let resultado = total / Cuotas 
    
    alert("Usted tendra " + Cuotas + " cuotas de " + resultado + " " + moneda);
}









