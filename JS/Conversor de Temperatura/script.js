function convertTemperature() {
    let inputTemp = parseFloat(document.getElementById('inputTemp').value);
    let inputUnit = document.getElementById('inputUnit').value;
    let outputUnit = document.getElementById('outputUnit').value;
    
    if (isNaN(inputTemp)) {
        document.getElementById('result').textContent = 'Por favor ingresa un número válido.';
        return;
    }

    let result;

    // Conversiones a grados Celsius (°C)
    switch (inputUnit) {
        case 'F':
            inputTemp = (inputTemp - 32) * 5 / 9;
            break;
        case 'K':
            inputTemp = inputTemp - 273.15;
            break;
        case 'R':
            inputTemp = (inputTemp - 491.67) * 5 / 9;
            break;
    }

    // Conversiones desde Celsius a la unidad deseada
    switch (outputUnit) {
        case 'F':
            result = (inputTemp * 9 / 5) + 32;
            break;
        case 'K':
            result = inputTemp + 273.15;
            break;
        case 'R':
            result = (inputTemp + 273.15) * 9 / 5;
            break;
        case 'C':
            result = inputTemp;
            break;
    }

    document.getElementById('result').textContent = result.toFixed(2) + " " + outputUnit;
}
