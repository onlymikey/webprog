// Función para definir los materiales de la orejeta
function materialesplaca() {    
    const idMaterial_orejeta = parseFloat(document.querySelector("#materiales_orejeta").value);
    let Ftu, Fty, Fcy;

    switch (idMaterial_orejeta) {
        case 0:
            Ftu = 63000;
            Fty = 42000;
            Fcy = 45000;
            break;
        case 1:
            Ftu = 58000;
            Fty = 39000;
            Fcy = 42000;
            break;
        case 2:
            Ftu = 67000;
            Fty = 48000;
            Fcy = 51000;
            break;
        case 3:
            Ftu = 66000;
            Fty = 57000;
            Fcy = 57000;
            break;
        case 4:
            Ftu = 78000;
            Fty = 67000;
            Fcy = 70000;
            break;
        case 5:
            Ftu = 85000;
            Fty = 76000;
            Fcy = 80000;
            break;
        default:
            console.warn("Material no reconocido");
            return; // Salir si no hay coincidencias
    }

    // Asignar valores a los campos
    document.querySelector("#ftu").value = Ftu;
    document.querySelector("#fty").value = Fty;
    document.querySelector("#fcy").value = Fcy;
}

// Función para definir los materiales del sujetador
function materialesujetador() {    
    const idMaterial_sujetador = parseFloat(document.querySelector("#material_sujetador").value);
    let dhole, sFtu, sFty, sFcy, Pstrength;

    switch (idMaterial_sujetador) {
        case 0:
            dhole = 0.164;
            sFtu = 55000;
            sFty = 32000;
            sFcy = 32000;
            Pstrength = 596;
            break;
        case 1:
            dhole = 0.196;
            sFtu = 55000;
            sFty = 32000;
            sFcy = 32000;
            Pstrength = 860;
            break;
        case 2:
            dhole = 0.229;
            sFtu = 55000;
            sFty = 32000;
            sFcy = 32000;
            Pstrength = 1555;
            break;
        case 3:
            dhole = 0.261;
            sFtu = 55000;
            sFty = 32000;
            sFcy = 32000;
            Pstrength = 2455;
            break;
        case 4:
            dhole = 0.196;
            sFtu = 66000;
            sFty = 56000;
            sFcy = 59000;
            Pstrength = 1230;
            break;
        case 5:
            dhole = 0.229;
            sFtu = 66000;
            sFty = 56000;
            sFcy = 59000;
            Pstrength = 2230;
            break;
        case 6:
            dhole = 0.261;
            sFtu = 66000;
            sFty = 56000;
            sFcy = 59000;
            Pstrength = 3520;
            break;
        default:
            console.warn("Material no reconocido");
            return; // Salir si no hay coincidencias
    }

    // Asignar valores a los campos
    document.querySelector("#sftu").value = sFtu;
    document.querySelector("#sfty").value = sFty;
    document.querySelector("#sfcy").value = sFcy;
    document.querySelector("#dbarreno").value = dhole;
    document.querySelector("#Ppermitido").value = Pstrength;
}

// Función para realizar los cálculos
function calcular() {
    const width = parseFloat(document.querySelector("#width").value);
    const a = parseFloat(document.querySelector("#a").value);
    const t1 = parseFloat(document.querySelector("#t1").value);
    const t2 = parseFloat(document.querySelector("#t2").value);
    const FF = parseFloat(document.querySelector("#ff").value);
    const MS = parseFloat(document.querySelector('#ms').value);
    const Paplicada = parseFloat(document.querySelector('#paplicada').value);
    
    // Calculos
    const a_dhole = a / dhole;
    const width_dhole = width / dhole;
    const Abr = t2 * dhole;
    const At = (width - dhole) * t2;
    
    let kt;
    switch (idMaterial_orejeta) {
        case 0:
            kt = -0.0742 * a_dhole + 0.9038;
            break;
        case 1:
            kt = -0.0667 * a_dhole + 0.9333;
            break;
        case 2:
            kt = -0.0597 * a_dhole + 0.9286;
            break;
        case 3:
            kt = -0.0597 * a_dhole + 0.9286;
            break;
        case 4:
            kt = -0.0528 * a_dhole + 0.9239;
            break;
        case 5:
            kt = -0.0403 * a_dhole + 0.9214;
            break;
        default:
            console.warn("Material no reconocido para kt");
            return; // Salir si no hay coincidencias
    }

    const Ptu = kt * Ftu * (width - dhole) * t2;
    const Pallow = Math.min(Ptu, Pstrength);
    const ms1 = Pallow / (Paplicada * FF) - 1;

    // Asignar resultados a los campos
    document.querySelector("#kt").value = kt.toFixed(2);
    document.querySelector("#ed").value = a_dhole.toFixed(4);
    document.querySelector("#ed1").value = a_dhole.toFixed(4);
    document.querySelector("#w_dhole").value = width_dhole.toFixed(4);
    document.querySelector("#abr").value = Abr.toFixed(4);
    document.querySelector("#at").value = At.toFixed(4);    
    document.querySelector("#ptu").value = Ptu.toFixed(0);
    document.querySelector("#MOS").value = ms1.toFixed(3);

    // Determinar resultado
    let bg, fn, resultado;
    if (ms1 < MS) {
        bg = '#FFC7CE'; // Rojo claro
        fn = '#9C0006'; // Rojo oscuro
        resultado = 'No aceptable';
    } else if (ms1 <= MS * 1.5) {
        bg = '#FFEB9C'; // Amarillo claro
        fn = '#9C5700'; // Amarillo oscuro
        resultado = 'Aceptable';    
    } else {
        bg = '#C6EFCE'; // Verde claro
        fn = '#006100'; // Verde oscuro
        resultado = 'Aceptable';             
    }
      
    // Aplicar estilos y mostrar resultado
    const resultadoElement = document.querySelector('#resultado');
    resultadoElement.style.background = bg;
    resultadoElement.style.color = fn;
    resultadoElement.value = resultado;
}
