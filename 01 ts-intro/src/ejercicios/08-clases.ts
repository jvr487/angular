class PersonaNormal{
    constructor(public nombre:string, public direccion:string){}
}

class Heroe extends PersonaNormal{
    //alterEgo: string,
    //edad: number,
    //nombreReal: string

    // Esta es una formal elegante de crear atributos de una clase tan solo con el constructor
    // Solo se añade 'public' y se pasa por parametro el valor y ya es un atributo de la clase
    // en caso de que no tenga ninguna visibilidad sería una variable normal y corriente que le llega al constructor y se debería asignar al atributo creado fuera del constructor como lo que esta comentado

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
                ){ 
                    // this.alterEgo = alterEgo;
                    // this.edad = edad;
                    // this.nombreReal = nombreReal;
                    super(nombreReal,'por allá');
                }

}

const heroe = new Heroe('Pepé', 45, 'Pepito');
console.log(heroe);