const functions = [];
const maxGraphs = 5;
const charts = []; // Para almacenar las instancias de los gráficos

const generateData = (fn) => {
    const data = [];
    for (let x = -10; x <= 10; x += 0.1) {
        data.push({ x: x, y: fn(x) });
    }
    return data;
};

const plotGraphs = () => {
    const graphs = document.querySelectorAll('.chart-container canvas');
    graphs.forEach((canvas, index) => {
        const ctx = canvas.getContext('2d');
        
        // Si ya existe un gráfico, destrúyelo
        if (charts[index]) {
            charts[index].destroy();
        }

        if (functions[index]) {
            const func = functions[index];
            const data = generateData(func.fn);
            
            // Crear una nueva instancia de Chart y almacenarla
            const chart = new Chart(ctx, {
                type: 'line',
                data: {
                    datasets: [{
                        label: func.label,
                        data: data,
                        borderColor: func.color,
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        borderWidth: 2,
                        pointRadius: 0
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom',
                            title: {
                                display: true,
                                text: 'Eje X'
                            }
                        },
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Eje Y'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: true
                        }
                    }
                }
            });

            // Almacenar el gráfico en el array
            charts[index] = chart;
        }
    });
};

const addFunction = () => {
    const functionInput = document.getElementById('functionInput').value;
    const colorInput = document.getElementById('colorInput').value;

    // Validar si la función es válida
    if (functionInput && functions.length < maxGraphs) {
        // Crear una función a partir de la cadena de texto
        const fn = new Function('x', `return ${functionInput};`);
        
        functions.push({
            label: `f(x) = ${functionInput}`,
            color: colorInput,
            fn: fn
        });

        plotGraphs();
        document.getElementById('functionInput').value = '';
    } else {
        alert('Por favor, ingrese una función válida y asegúrese de que no exceda el límite de 5 funciones.');
    }
};

document.getElementById('addFunction').addEventListener('click', addFunction);
