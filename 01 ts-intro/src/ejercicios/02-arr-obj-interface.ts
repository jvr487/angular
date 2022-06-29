let habilidades: string[] = ["Nerd","Hacker","PRO"]

interface Personaje{
    nombre:string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personajePepe: Personaje = {
    nombre: 'Pepito',
    hp: 15,
    habilidades: ['','']
}

personajePepe.puebloNatal = 'Aquí mismo!!.'
console.table(personajePepe);