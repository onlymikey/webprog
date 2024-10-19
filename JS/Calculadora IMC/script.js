function calcularIMC() {
    let peso = parseFloat(document.getElementById('peso').value);
    let estatura = parseFloat(document.getElementById('estatura').value);

    if (isNaN(peso) || isNaN(estatura) || peso <= 0 || estatura <= 0) {
        alert("Por favor, ingresa valores válidos.");
        return;
    }

    // Calcular IMC
    let imc = peso / (estatura * estatura);
    document.getElementById('imcResultado').textContent = imc.toFixed(2);

    // Determinar el estado según el IMC
    let estadoText;
    let estadoClass;

    if (imc < 18.5) {
        estadoText = "Bajo peso";
        estadoClass = "azul";
    } else if (imc >= 18.5 && imc <= 24.9) {
        estadoText = "Normal";
        estadoClass = "verde";
    } else if (imc >= 25 && imc <= 29.9) {
        estadoText = "Sobrepeso";
        estadoClass = "amarillo";
    } else if (imc >= 30 && imc <= 34.9) {
        estadoText = "Obesidad I";
        estadoClass = "naranja";
    } else if (imc >= 35 && imc <= 39.9) {
        estadoText = "Obesidad II";
        estadoClass = "rojoClaro";
    } else {
        estadoText = "Obesidad III";
        estadoClass = "rojoOscuro";
    }

    let estadoElement = document.getElementById('estado');
    estadoElement.textContent = estadoText;

    // Remover clases anteriores y añadir la clase correspondiente
    estadoElement.className = 'estado ' + estadoClass;
}
