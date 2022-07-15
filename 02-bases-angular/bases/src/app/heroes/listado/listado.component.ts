import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  heroes: string[] = ['Iron Man','Spider Man','Capitán América','Hulk','Loky']
  heroesBorrados: string[] = [];

  borrarHeoe(){
    const heroeBorrado = this.heroes.shift();
    if(heroeBorrado) this.heroesBorrados.push(heroeBorrado);
  }

  obtenerHeroesBorrados(){

  }
}
