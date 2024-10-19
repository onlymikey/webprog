function calcularepFcn() {
    let presion = parseFloat(document.querySelector("#presion").value);
    let diametro = parseFloat(document.querySelector("#diametro").value);
    let longitud = parseFloat(document.querySelector("#Longitud").value);
    
    // Materiales
    let material = parseInt(document.querySelector('#Material').value);
    let UTS = 0;
    let Ys  = 0;
    let rhoMaterial = 0;     
    switch(material) {
        case 1:
            UTS = 415;
            Ys  = 230;
            rhoMaterial = 7800;
            break;
        case 2:
            UTS = 450;
            Ys  = 275; 
            rhoMaterial = 7800; 
            break;
        case 3:
            UTS = 485;
            Ys  = 275; 
            rhoMaterial = 7800;  
            break;
        case 4:
            UTS = 415;
            Ys  = 220;
            rhoMaterial = 7860; 
            break;
        case 5:
            UTS = 485;
            Ys  = 260;
            rhoMaterial = 7850;   
            break;
    }

    // Eficiencia de la junta
    let eficiencia = parseInt(document.querySelector("#Eficiencia").value);
    let eta = 0;
    switch(eficiencia) {
        case 1:
            eta = 1;
            break;
        case 2:
            eta = 0.85;
            break;
        case 3:
            eta = 0.75;
            break;
    }

    // Densidad
    let rho = parseFloat(document.querySelector("#Densidad").value);

    // Calculos
    let S = Math.min(UTS / 3.5, Ys * 2 / 3);

    // Calculo de las tapas
    let ttapas = (presion * diametro) / (2 * S * eta - 0.2 * presion);
    ttapas = ttapas / 0.0254; // Conversión a pulgadas
    document.querySelector("#espesortapas").value = ttapas.toFixed(4); 

    // Calculo del cuerpo
    let tcuerpo = (presion * (diametro / 2)) / (S * eta - 0.6 * presion);
    tcuerpo = tcuerpo / 0.0254; // Conversión a pulgadas
    document.querySelector("#espesorcuerpo").value = tcuerpo.toFixed(4);

    // Volumen de las tapas
    let valoretc = parseInt(document.querySelector('#espesorrealtapa').value);
    let espesortapareal = 0;

    switch(valoretc) {
        case 1: espesortapareal = 1/8; break;
        case 2: espesortapareal = 1/4; break;
        case 3: espesortapareal = 1/3; break;
        case 4: espesortapareal = 3/8; break;
        case 5: espesortapareal = 1/2; break;
        case 6: espesortapareal = 5/8; break;
        case 7: espesortapareal = 3/4; break;
        case 8: espesortapareal = 7/8; break;
        case 9: espesortapareal = 1; break;
        case 10: espesortapareal = 1 + 1/4; break;
        case 11: espesortapareal = 1 + 3/8; break;
        case 12: espesortapareal = 1 + 1/2; break;
        case 13: espesortapareal = 1 + 5/8; break;
        case 14: espesortapareal = 1 + 3/4; break;
        case 15: espesortapareal = 2; break;
    }

    let Vtapas = Math.PI / 12 * (Math.pow(diametro + 2 * espesortapareal, 3) - Math.pow(diametro, 3));

    // Volumen del cuerpo
    let valoretb = parseInt(document.querySelector('#espesorrealcuerpo').value);
    let espesorcuerporeal = 0;

    switch(valoretb) {
        case 1: espesorcuerporeal = 1/8; break;
        case 2: espesorcuerporeal = 1/4; break;
        case 3: espesorcuerporeal = 1/3; break;
        case 4: espesorcuerporeal = 3/8; break;
        case 5: espesorcuerporeal = 1/2; break;
        case 6: espesorcuerporeal = 5/8; break;
        case 7: espesorcuerporeal = 3/4; break;
        case 8: espesorcuerporeal = 7/8; break;
        case 9: espesorcuerporeal = 1; break;
        case 10: espesorcuerporeal = 1 + 1/4; break;
        case 11: espesorcuerporeal = 1 + 3/8; break;
        case 12: espesorcuerporeal = 1 + 1/2; break;
        case 13: espesorcuerporeal = 1 + 5/8; break;
        case 14: espesorcuerporeal = 1 + 3/4; break;
        case 15: espesorcuerporeal = 2; break;
    }

    let Vcuerpo = Math.PI * longitud / 12 * (Math.pow(diametro + 2 * espesorcuerporeal, 2) - Math.pow(diametro, 2));

    let pesoequipo = (Vtapas + Vcuerpo) * rhoMaterial;
    document.querySelector('#pesoequipo').value = pesoequipo.toFixed(0);
    
    // Validación del espesor
    if (espesortapareal < ttapas) {
        document.querySelector('#espesortapas').style.backgroundColor = 'rgb(255,199,206)';
        document.querySelector('#espesortapas').style.color = 'rgb(156,0,6)'; 
    } else {
        document.querySelector('#espesortapas').style.backgroundColor = 'rgb(198,239,206)';
        document.querySelector('#espesortapas').style.color = 'rgb(0,97,0)';      
    }

    if (espesorcuerporeal < tcuerpo) {
        document.querySelector('#espesorcuerpo').style.backgroundColor = 'rgb(255,199,206)';
        document.querySelector('#espesorcuerpo').style.color = 'rgb(156,0,6)';
    } else {
        document.querySelector('#espesorcuerpo').style.backgroundColor = 'rgb(198,239,206)';
        document.querySelector('#espesorcuerpo').style.color = 'rgb(0,97,0)';      
    }
}
