// Teniendo una calificación final, imprime un mensaje indicando si la calificación es A (17 o más), B (13-16), C (10-12), D (7-9) o F (menos de 6).
// realizado en base a 10

let calificacion1 = 8;
let calificacion2 = 9;
let calificacion3 = 7;

let sumaCalificaciones = calificacion1 + calificacion2 + calificacion3 / 3;


console.log("La suma de las calificaciones es: " + sumaCalificaciones);

function verificarCalificacion (calification) {
    if (calification >= 17) {
        console.log("Tu calificación es A.");
    } else if (calification >= 13 && calification <= 16) {
        console.log("Tu calificación es B.");
    } else if (calification >= 10 && calification <= 12) {
        console.log("Tu calificación es C.");
    } else if (calification >= 7 && calification <= 9) {
        console.log("Tu calificación es D.");
    } else {
        console.log("Tu calificación es F.");
    }
}

// Prueba la función con diferentes calificaciones
verificarCalificacion(sumaCalificaciones); // Salida: Tu calificación es A.
