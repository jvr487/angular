function Sumar(a: number, b: number): number{
    return a + b;
}

const SumarFlecha = (a: number, b: number): number => {
    return a + b;
}

// como primeros parametros se tienen que poner los obligatorios, luego los opcionales y por último los por defecto.
function Multiplicar(numeroObligatorio: number, otroNumeroOpcional?: number, basePorDefecto: number = 2): number{
    return numeroObligatorio * basePorDefecto;
}

console.log(Sumar(2,3));
console.log(SumarFlecha(3,4));
console.log(Multiplicar(3,3));

///////////////////////////////////////////////////////////////////////

interface PersonajeBuenango{
    nombre:string;
    pv:number;
    MostrarHP: () => void;
    MostrarNombre:() => string;
}

function Curar(personaje: PersonajeBuenango, curarX: number){
    return personaje.pv += curarX;
}

const personajeBuenango: PersonajeBuenango = {
    nombre: 'JJ',
    pv: 10,
    MostrarHP: function (): void {
        console.log('Mostar PV', this.pv);
    },
    MostrarNombre: function (): string {
        return this.nombre;
    }
}
console.log('Mi nombre es: ', personajeBuenango.MostrarNombre());
personajeBuenango.MostrarHP();
console.log('Curar', Curar(personajeBuenango, 11));
personajeBuenango.MostrarHP();