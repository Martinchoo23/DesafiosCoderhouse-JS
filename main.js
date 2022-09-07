let securityWord = prompt('Antes de realizar una compra, demuestra que no eres un robot. \nA continuación, escribe el siguiente código CAPTCHA:   X J A 0 E Z').toUpperCase();

while (securityWord !== 'XJA0EZ') {
    alert('Error: el código captcha es incorrecto')
    securityWord = prompt('Intentelo nuevamente:   X J A 0 E Z').toUpperCase()
} if (securityWord === 'XJA0EZ') {
    alert('¡Bien! puedes continuar...')
}


let precio = 0;
let producto;
let cantidad = 0;
let total = 0;
let seguirComprando = false;

do {
    producto = prompt('¿Qué articulo deseas comprar? (tipea el número correspondiente al producto)' + "\n1) Proteína WHEY 1kg \n2) Proteína WHEY 3kg \n3) Proteína WHEY 5kg")    


    switch (producto) {
        case "1":
            precio = 1500
            confirm('El precio de la proteína de 1kg es: $1.500. ¿Deseas agregarlo al carrito?')
            break;
        case "2":
            precio = 2200
            confirm('El precio de la proteína de 3kg es: $2.200. ¿Deseas agregarlo al carrito?')
            break;
        case "3":
            precio = 3000
            confirm('El precio de la proteína de 5kg es: $3.000. ¿Deseas agregarlo al carrito?')
            break;
        default:
            alert('El número que ingresaste no corresponde a ningún producto.')
    }
    cantidad = Number(prompt('¿Cuántos quieres?'))

    total += precio * cantidad;
    seguirComprando = confirm('¿Quieres seguir comprando?')

} while (seguirComprando)

alert('Muchas gracias por elegirnos! el total de tu compra es: ' + total + "$");


