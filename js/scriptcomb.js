function factorial(numero){

    let resultado = 1;

    for(let i = 1; i <= numero; i++){

        resultado = resultado * i;
    }

    return resultado;
}

function combinacion(n, r){

    return factorial(n) /
    (factorial(r) * factorial(n-r));
}

function calcularCombinaciones(){

    let n1 = parseInt(
        document.getElementById("n1").value
    );

    let r1 = parseInt(
        document.getElementById("r1").value
    );

    let n2 = parseInt(
        document.getElementById("n2").value
    );

    let r2 = parseInt(
        document.getElementById("r2").value
    );

    // Validación
    if(r1 > n1 || r2 > n2){

        document.getElementById("resultado").innerHTML =
        "Error: r no puede ser mayor que n";

        return;
    }

    let grupo1 = combinacion(n1, r1);

    let grupo2 = combinacion(n2, r2);

    let total = grupo1 * grupo2;

    let cajaResultado = document.getElementById("resultado");
    cajaResultado.innerHTML = "Resultado: " + total.toLocaleString(); 
    cajaResultado.classList.add("exito"); 

    document.getElementById("resultado").innerHTML =
        "Total de combinaciones: " +
        total.toLocaleString();
}
