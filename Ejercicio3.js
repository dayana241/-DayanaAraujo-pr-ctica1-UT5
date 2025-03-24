function compararNombres(lista1, lista2) {
    console.log(`Personas: ${lista1.join("/")}`);
    console.log(`Array donde buscar: ${lista2.join("/")}`);

    let coincidencias = 0;
    lista1.forEach(nombre => {
        if (lista2.includes(nombre)) {
            coincidencias++;
        }
    });

    if (coincidencias === lista1.length) {
        console.log("Todos están incluidos\n");
    } else if (coincidencias === 0) {
        console.log("No hay ninguno incluido\n");
    } else {
        console.log("Alguno está incluido\n");
    }
}
//  Ejemplos de llamadas:
compararNombres(
    ["Elisabet Ricart Monreal", "María Del Carmen Sedano-Rocamora", "Roldán Alvarado"],
    ["Elisabet Ricart Monreal", "María Del Carmen Sedano-Rocamora", "Roldán Alvarado", "Isaac Talavera Luna"]
);

compararNombres(
    ["Lina Armida Machado Iglesias", "Apolonia Santiago Buendía"],
    ["Elisabet Ricart Monreal", "María Del Carmen Sedano-Rocamora", "Roldán Alvarado"]
);

compararNombres(
    ["Elisabet Ricart Monreal", "Poncio Cobo Herrera", "Isaac Talavera Luna"],
    ["Elisabet Ricart Monreal", "María Del Carmen Sedano-Rocamora", "Roldán Alvarado", "Isaac Talavera Luna"]
);
