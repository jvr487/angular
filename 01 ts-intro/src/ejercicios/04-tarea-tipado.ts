interface Direccion{
    pais: string;
    ciudad: string;
    calle: string;
}

interface SuperHeroe{
    nombre: string;
    edad:number;
    direccion: Direccion,
    MostrarDireccion: () => string;
}

const superHeroe: SuperHeroe = {
    nombre: 'JJ',
    edad:35,
    direccion: {
        pais:'Bolivia',
        ciudad:'Santa Cruz',
        calle:'Gladiolos'
    },
    MostrarDireccion(): string{
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais
    }
}

const direccion = superHeroe.MostrarDireccion();
console.log(direccion);