//Desafio complementario - Ahorros del mes

//variables
let ahorrosMesAnterior = parseInt(prompt('Cuanto ahorraste el mes anterior?'));
let sueldo = parseInt(prompt('Indica tu sueldo de este mes'));
let gastosFijos = parseInt(prompt('Ingresa tu total de gastos fijos'));
let gastosVariables = parseInt(prompt('Ingresa tu aproximado de gastos variables de este mes'));


// funciones
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
let gananciaPlazoFijo = (x) => ((x * 0.37) / 12);


let plataQueIngresa = suma (sueldo, (suma (ahorrosMesAnterior, gananciaPlazoFijo(ahorrosMesAnterior))));
let plataQueEgresa = suma (gastosFijos, gastosVariables);

let calculoAhorroMes = resta(plataQueIngresa, plataQueEgresa);

alert(`Este mes vas a ahorrar $${calculoAhorroMes}.`);



    
