const casas = [
    {
        casa:"Yronwood" ,
        asentamiento:"Palosanto" ,
        lema:"Nosotros protegemos el camino" ,
        blason:"Un porticullis de sable en campo arena" ,
        señor:"Lord Anders Yronwood" ,
        region:"Dorne" ,
        vasallaje:"casa Martell de Lanza del Sol" ,
        guarnicion: {
            caballeros:"22" ,
            soldados:"1400" ,
            arqueros:"500" ,
        }


    },
    {
        casa:"Bolton" ,
        asentamiento:"Fuerte Terror" ,
        lema:"Nuestras espadas están afiladas" ,
        blason:"Un hombre desollado de gules en campo carnación de sangre" ,
        señor:"Lord Roose Bolton" ,
        region:"El Norte" ,
        vasallaje:"Casa Stark de Invernalia" ,
        guarnicion: {
            caballeros:"0" ,
            soldados:"900" ,
            arqueros:"400" ,
        }


    },
    {
        casa:"Marbrand" ,
        asentamiento:"Marcaceniza" ,
        lema:"Ardiendo con intensidad" ,
        blason:"Un árbol ardiendo, naranja sobre cenizo" ,
        señor:"Lord Damon Marbrand" ,
        region:"Tierras del Oeste" ,
        vasallaje:"Casa Lannister de Roca Casterly" ,
        guarnicion: {
            caballeros:"16" ,
            soldados:"800" ,
            arqueros:"300" ,
        }


    },
    {
        casa:"Mallister" ,
        asentamiento:"Varamar" ,
        lema:"Por encima del resto" ,
        blason:"Un águila plateada sobre campo púrpura" ,
        señor:"Lord Jason Mallister" ,
        region:"Tierra de los Ríos" ,
        vasallaje:"Casa Tyrell de Altojardin" ,
        guarnicion: {
            caballeros:"11" ,
            soldados:"660" ,
            arqueros:"190" ,
        }


    },
    {
        casa:"Caron" ,
        asentamiento:"Nocturnia" ,
        lema:"Ninguna canción más dulce" ,
        blason:"Un campo de oro con ruiseñores de sable" ,
        señor:"Lord Bryce Caron" ,
        region:"Tierras de la Tormentas" ,
        vasallaje:"Casa Baratheon de Bastión de Tormentas" ,
        guarnicion: {
            caballeros:"7" ,
            soldados:"400" ,
            arqueros:"100" ,
        }


    },
    {
        casa:"Royce" ,
        asentamiento:"Piedra de las Runas" ,
        lema:"Nosotros recordamos" ,
        blason:"Una lluvia de piedras sobre campo de bronce con bordura de runas" ,
        señor:"Lord Yohn Royce" ,
        region:"Valle de Arryn" ,
        vasallaje:"Casa Arryn de Nido de Águilas" ,
        guarnicion: {
            caballeros:"18" ,
            soldados:"1200" ,
            arqueros:"200" ,
        }


    },
    {
        casa:"Oakheart" ,
        asentamiento:"Roble viejo" ,
        lema:"Nuestras Raíces son Profundas" ,
        blason:"Tres hojas de roble de sinople en campo de oro" ,
        señor:"Lady Arwyn Oakheart" ,
        region:"El Dominio" ,
        vasallaje:"Casa Tyrell de Altojardin" ,
        guarnicion: {
            caballeros:"13" ,
            soldados:"330" ,
            arqueros:"100" ,
        }


    },
    {
        casa:"Crakehall" ,
        asentamiento:"Refugio Quebrado" ,
        lema:"Ninguno más Fiero" ,
        blason:"Un jabalí negro y blanco sobre fondo marrón" ,
        señor:"Lord Roland Crakehall" ,
        region:"Tierras del Oeste" ,
        vasallaje:"Casa Lannister de Roca Casterly" ,
        guarnicion: {
            caballeros:"8" ,
            soldados:"500" ,
            arqueros:"120" ,
        }


    },
    {
        casa:"Hightower" ,
        asentamiento:"Antigua" ,
        lema:"Iluminamos el camino" ,
        blason:"Un faro de piedra blanca con una llama en la punta" ,
        señor:"Lord Leyton Hightower" ,
        region:"El Dominio" ,
        vasallaje:"Casa Tyrell de Altojardin" ,
        guarnicion: {
            caballeros:"30" ,
            soldados:"1600" ,
            arqueros:"500" ,
        }


    },
    {
        casa:"Fossoway" ,
        asentamiento:"La Sidra" ,
        lema:"El sabor de la gloria" ,
        blason:"Una manzana de gules en campo de oro" ,
        señor:"Lord Owen Fossoway" ,
        region:"El Dominio" ,
        vasallaje:"Casa Tyrell de Altojardin" ,
        guarnicion: {
            caballeros:"12" ,
            soldados:"700" ,
            arqueros:"510" ,
        }


    },
    
   


]

console.table(casas);
/*Número de caballeros de mayor a menor*/
console.log("casas ordenadas de mayor a menor número de caballeros")
const casasOrdenadas = casas.sort((a, b) => b.guarnicion.caballeros - a.guarnicion.caballeros);
console.table(casasOrdenadas);

/*Solo casas de El Dominio*/
console.log("casas de la región de El Dominio")
const casasTheReach = casas.filter((casa) => casa.region.includes("Dominio"));
console.table(casasTheReach);

/*Nuevo array de casas, regiones y señores*/
console.log("solo casa, región y señor")
const casaResume = casas.map (casa => {
    return {
        casa: casa.casa,
        region: casa.region,
        señor: casa.señor,
    }

});
console.table(casaResume);

/*Unirse a una casa*/

function unirseComoCaballero() {
    const nombreCasa = prompt("Ingresa el nombre de la casa a la que deseas unirte como caballero (ver casas en array):");
  
    const casaSeleccionada = casas.find((casa) => casa.casa.toLowerCase() === nombreCasa.toLowerCase());
  
    if (casaSeleccionada) {

      casaSeleccionada.guarnicion.caballeros++;
      alert(`¡Has puesto tu espada al servicio de la casa ${casaSeleccionada.casa} de ${casaSeleccionada.asentamiento}!`);
    } else {
      alert("La casa ingresada no existe en la lista.");
    }
  }
  
  unirseComoCaballero();

/*mostrar informacion de casas*/
let i = 0;

while (i < casas.length) { 
  const casaActual = casas[i]; 

  
  console.log(`Casa: ${casaActual.casa}`);
  console.log(`Asentamiento: ${casaActual.asentamiento}`);
  console.log(`Lema: ${casaActual.lema}`);
  console.log(`Blason: ${casaActual.blason}`);
  console.log(`Señor: ${casaActual.señor}`);
  console.log(`Región: ${casaActual.region}`);
  console.log(`Vasallaje: ${casaActual.vasallaje}`);
  console.log(`Caballeros: ${casaActual.guarnicion.caballeros}`);
  console.log(`Soldados: ${casaActual.guarnicion.soldados}`);
  console.log(`Arqueros: ${casaActual.guarnicion.arqueros}`);
  console.log('---------------------------');

  i++; 
}

  