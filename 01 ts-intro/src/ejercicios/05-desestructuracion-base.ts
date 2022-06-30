interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}
interface Detalles{
    autor: string;
    anyo: number;
}

const reproductor: Reproductor = {
    volumen:20,
    segundo:30,
    cancion:'Ciega sorda muda :D',
    detalles:{
        autor: 'Shakira',
        anyo:2004
    }
}

// cuando existe más objetos dentro del mismo lo recomendable por legibilidad es crear otra destructuración de objetos como el del 'detalle'
const {volumen, segundo, cancion, detalles} = reproductor;

// si en caso existe un conflicto con los nombre de las variables, se puede cambiar de la siguiente forma
const autor: string = 'Yo';
const {autor: autorReproductor, anyo} = detalles;

console.log('El volumen es', volumen);
console.log('El segundo es', segundo);
console.log('La canción es', cancion);
console.log('El autor favorito es', autor);
console.log('El autor del reproductor es', autorReproductor);
console.log('El año es', anyo);


///////////////////////////////////////////////////// DESESTRUCTURACIÓN DE ARREGLOS /////////////////////////////////////////////////////////////////////////

const dbz: string[] = ['Goku','Trunks','Vegeta']

// es similar a la del objeto, solo que esta hace referencia a la posición del registro
// const [p1, p2, p3] = dbz;

const [, , p3] = dbz;

// console.log('Personaje 1', p1);
// console.log('Personaje 2', p2);
console.log('Personaje 3', p3);