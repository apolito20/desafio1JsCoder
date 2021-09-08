
//calculadora de tablas hasta el 19


let numeroTabla = prompt('Decime un numero entero');

for (let i = 0; i <= 10; i++) {
    if (numeroTabla >= 20){
    alert('Esta tabla no la se, apreta -enter- para seguir');
    break;
    } else if (numeroTabla < 20){
     console.log(numeroTabla + 'x' + i + '= '+ (numeroTabla * i));
    } 
    else  {
        alert('Hola! Solo acepto numeros, enter y volve a empezar!');
        break;
    } 
} 
