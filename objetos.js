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
            soldados:"1500" ,
            arqueros:"500" ,
        }


    },
    {
        casa:"Bolton" ,
        asentamiento:"Fuerte Terror" ,
        lema:"Nuestras espadas están afiladas" ,
        blason:"Un hombre desollado de gules en campo carnación de sangre" ,
        señor:"Lord Mathys Rowan" ,
        region:"El Norte" ,
        vasallaje:"Casa Stark de Invernalia" ,
        guarnicion: {
            caballeros:"0" ,
            soldados:"1000" ,
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
    
   


]

console.table(casas);

const casasOrdenadas = casas.sort((a, b) => b.guarnicion.caballeros - a.guarnicion.caballeros);
console.table(casasOrdenadas);