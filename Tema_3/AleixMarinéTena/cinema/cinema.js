// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: false // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}


/**
 * - Si el número de asientos solicitados excede el tamaño máximo de la fila, la función debe devolver un set vacío.
 * - Si en ninguna fila hay suficientes asientos disponibles juntos, la función debe devolver un set vacío.
 * - Se comenzará a buscar asientos juntos en la fila más lejana a la pantalla, por lo que si varias filas pudiesen
 *   albergar el número de asientos solicitado, se elegiría siempre la más lejana a la pantalla.
 *   El resultado debe ser un Set con los ids de los asientos pre-seleccionados.
 */
function suggest(nSeats, butacas) {
    // Si el número de asientos solicitados excede el tamaño máximo de la fila, la función debe devolver un set vacío.
    if (nSeats > N)
    {
        return new Set([]);
    }

    // Si en ninguna fila hay suficientes asientos disponibles juntos, la función debe devolver un set vacío.
    for (let i = 0; i < N; i++)
    {
        //console.log("wtf row "+ i)
        let resultado = new Set([]);
        for (let j = 0; j < N && resultado.size < nSeats; j++)
        {
            //console.log("wtf col "+ j)

            if (butacas[i][j].estado === false)
            {
                resultado.add(butacas[i][j].id);
            }
            else
            {
                // Init the counter again
                resultado = new Set([]);
            }
        }
        if (resultado.size >= nSeats)
        {
            return resultado
        }
    }

    return new Set([]);
}

// Inicializar la matriz
let butacas = setup();

// Preparación de matriz copiada de Alejandro_Rodriguez_Benalcazar
// Fila 10: numAsientos = 10

// Fila 9: numAsientos = 2
butacas[8][0].estado = true;
butacas[8][3].estado = true;
butacas[8][6].estado = true;
butacas[8][9].estado = true;

// Fila 8: numAsientos = 3
butacas[7][0].estado = true;
butacas[7][4].estado = true;
butacas[7][8].estado = true;

// Fila 7: numAsientos = 4
butacas[6][0].estado = true;
butacas[6][3].estado = true;
butacas[6][4].estado = true;
butacas[6][9].estado = true;

// Fila 6: numAsientos = 5
butacas[5][0].estado = true;
butacas[5][3].estado = true;
butacas[5][9].estado = true;

// Fila 5: numAsientos = 6
butacas[4][0].estado = true;
butacas[4][2].estado = true;
butacas[4][9].estado = true;

// Fila 4: numAsientos = 7
butacas[3][0].estado = true;
butacas[3][8].estado = true;
butacas[3][9].estado = true;

// Fila 3: numAsientos = 8
butacas[2][0].estado = true;
butacas[2][1].estado = true;
butacas[2][2].estado = true;
butacas[2][3].estado = true;
butacas[2][4].estado = true;
butacas[2][6].estado = true;
butacas[2][8].estado = true;

// Fila 2: numAsientos = 9
butacas[1][3].estado = true;
butacas[1][4].estado = true;
butacas[1][5].estado = true;
butacas[1][6].estado = true;
butacas[1][7].estado = true;
butacas[1][8].estado = true;
butacas[1][9].estado = true;

// Fila 1: numAsientos = 2
butacas[0][0].estado = true;
butacas[0][1].estado = true;
butacas[0][2].estado = true;
butacas[0][3].estado = true;
butacas[0][4].estado = true;
butacas[0][5].estado = true;
butacas[0][6].estado = true;
butacas[0][7].estado = true;

// Imprimir la matriz
console.log(butacas);

// Sugerir asientos
for (let i = 0; i < N + 2; i++)
{
    let asientosOcupados = suggest(i + 1, butacas)
    console.log("Al pedir " + (i + 1) + " asientos, se dan los asientos: ");
    console.log(asientosOcupados)
}
