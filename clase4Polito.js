//Simulador Interactivo - Ahorros del mes

//variables
let ahorrosMesAnterior = parseInt(prompt('Cuanto ahorraste el mes anterior?'));
let sueldo = parseInt(prompt('Indica tu sueldo de este mes')) ;
let gastosFijos = parseInt(prompt('Ingresa tu total de gastos fijos'));
let gastosVariables = parseInt(prompt('Ingresa tu aproximado de gastos variables de este mes'));


// funciones
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const gananciaPlazoFijo = (ahorrosMesAnterior) => (ahorrosMesAnterior * 0.37) / 12;

    
    let positivo = suma (sueldo, suma (ahorrosMesAnterior, gananciaPlazoFijo));
    let negativo = suma (gastosFijos, gastosVariables);

    let calculoAhorroMes = resta(positivo, negativo);

    alert(`Este mes vas a ahorrar $${calculoAhorroMes}.`);



    
