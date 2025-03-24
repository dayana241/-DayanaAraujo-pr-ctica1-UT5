function Ejercicio1(cadena, booleano, array, func) {
    if (typeof cadena !== 'string' || typeof booleano !== 'boolean' || !Array.isArray(array) || typeof func !== 'function') {
        console.error('Error: Tipos de datos incorrectos');
        return;
    }

    if (booleano === true) {
        let producto = 1;
        array.forEach(num => {
            producto *= num;
        });

        if (producto > 100) {
            if (cadena.includes('a')) {
                console.log('La "a" no está permitida.');
            } else {
                console.log('Muy bien, no has usado la "a".');
            }
        } else {
            console.log('El resultado de tu array es insuficiente para comprobar la cadena.');
        }
    } else {
        console.log(false);  
        func(); 
    }
}

// Ejemplos de llamadas
Ejercicio1("hola mundo", true, [1, 2, 3, 4], () => { alert("Se acabó el juego") });
Ejercicio1("Sí", true, [10, 20, 30, 40], () => { alert("Se acabó el juego") });
Ejercicio1("Sí", false, [10, 20, 30, 40], () => { alert("Se acabó el juego") });

