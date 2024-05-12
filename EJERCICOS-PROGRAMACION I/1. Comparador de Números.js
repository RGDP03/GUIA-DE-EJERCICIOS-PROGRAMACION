// Dados dos números. Luego, determina e imprime si el primer número es mayor, menor o igual que el segundo.

function compararNumeros(num1, num2) {
    if (num1 > num2) {
        console.log(` ${num1} es mayor que ${num2}`);
    } else if (num1 < num2) {
        console.log(` ${num1} es menor que ${num2}`);
    } else {
        console.log(` ${num1} es igual a ${num2}`);
    }
}

// Prueba la función con diferentes números
compararNumeros(28, 13); // Salida: 28 es mayor que 13
compararNumeros(52, 91); // Salida: 52 es menor que 91
compararNumeros(8, 8); // Salida: 8 es igual a 8