/**
 * Función que calcula el promedio de tres calificaciones para un estudiante.
 * Problema 3: Promedio de calificaciones.
 */
function calcularPromedio() {
    // 1. Obtener los valores de los campos de entrada
    // Se obtiene el nombre como string
    const nombreEstudiante = document.getElementById('nombre').value.trim();
    
    // Se obtienen las notas como strings y se convierten a números de punto flotante
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    // Obtener el elemento donde se mostrará el resultado
    const resultadoElemento = document.getElementById('resultado');

    // 2. Validaciones básicas para asegurar que los datos sean válidos
    if (nombreEstudiante === "") {
        resultadoElemento.textContent = "⚠️ Por favor, ingrese el nombre del estudiante.";
        return;
    }

    // Se verifica si alguna nota no es un número o si no se ingresó
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultadoElemento.textContent = "⚠️ Por favor, ingrese las tres calificaciones válidas (números).";
        return;
    }

    // Opcional: Validar que las notas estén en un rango razonable (0-100)
    if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100) {
        resultadoElemento.textContent = "⚠️ Las calificaciones deben estar entre 0 y 100.";
        return;
    }
    
    // 3. Realizar el cálculo del promedio
    const sumaNotas = nota1 + nota2 + nota3;
    const promedio = sumaNotas / 3;

    // 4. Formatear el resultado para mostrar solo dos decimales
    const promedioFormateado = promedio.toFixed(2);

    // 5. Mostrar el resultado en pantalla con el mensaje descriptivo [cite: 24, 25]
    // Ejemplo: 'El promedio de Juan Pérez es: 17.33 puntos'
    resultadoElemento.textContent = `El promedio de ${nombreEstudiante} es: ${promedioFormateado} puntos.`;
}