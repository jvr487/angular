import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Iron Man';
    edad: number = 55;

    get displayName(): string{
        return `${this.nombre} - ${this.edad}`;
    }
    capitalizar(): string{
        return this.nombre.toUpperCase();
    }

    cambiarHeroe(){
        this.nombre = 'Spider Man';
    }

    cambiarEdad(){
        this.edad = 33;
    }
}