function calcularTemperatura(){

    let T0 = parseFloat(
        document.getElementById("T0").value
    );

    let Ts = parseFloat(
        document.getElementById("Ts").value
    );

    let k = parseFloat(
        document.getElementById("k").value
    );

    let t = parseFloat(
        document.getElementById("t").value
    );

    // Fórmula:
    // T = Ts + (T0 - Ts)e^(-kt)
    let T = Ts + (T0 - Ts) * Math.exp(-k * t);

    // Redondear al entero más cercano
    T = Math.round(T);

    let res = document.getElementById("resultado");

    res.innerHTML = "Temperatura Final: " + T + " °F";

    res.classList.add("activo");
}
