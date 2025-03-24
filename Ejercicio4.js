let alumnos = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Ana', edad: 30 },
    { nombre: 'Pedro', edad: 40 }
];

// Usamos map para agregar asignaturas a cada alumno
let alumnosConAsignaturas = alumnos.map(alumno => {
    let asignaturas = prompt(`Introduce las asignaturas para ${alumno.nombre} separadas por -:`);
    return { ...alumno, curso: '1DAMA', asignaturas: asignaturas ? asignaturas.split('-') : [] };
});

console.log(alumnosConAsignaturas);

//  Ejemplos de llamadas:
agregarAsignaturas();