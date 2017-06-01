import { Component } from '@angular/core';
import {ANIMALES} from '../../data/data.animales';
import { Animal } from '../../interfaces/animal.interface';
import {Refresher , reorderArray} from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // Crear objetos
  animales : Animal [] = [];
  audio = new Audio();
  audioTiempo : any;
  ordenando: boolean = false;

  constructor() {
    // Creamos un nuevo objeto tipo animal
    this.animales = ANIMALES.slice(0);
  }

  reproducir(animal:Animal){
    // Resetear el timeout y pausar el audio
    this.pausar_audio(animal);

    // Control el boton play y pause
    if (animal.reproduciendo){
      animal.reproduciendo = false;
      return;
    }

    // Asignamos el valor de la ubicacion del sonido ( interfaces animal)
    this.audio.src = animal.audio;
    // Cargar sonido
    this.audio.load();
    // reproducir sonido
    this.audio.play();

    // asignamos true a la propiedad reproduciendo del objeto animal , para inidicar que esta activo el sonido
    animal.reproduciendo = true ;

    // asignar el valor false cuando  pase el tiempo determinado en la propiedad duracion
    this.audioTiempo = setTimeout(() => animal.reproduciendo = false, animal.duracion*1000);

  }

private pausar_audio (animalSel : Animal){
  // Reset tiemOut
  clearTimeout (this.audioTiempo);
  // Pausar todos los audios
  this.audio.pause();
  //Restablecer la reproducion al incio
  this.audio.currentTime = 0 ;

  //  Recorrer el arreglo de animales y asignar el valor false
  for (let animal of this.animales){
    // Si los animales del arreglo son diferente al animal seleccionado asignar el valor de la propiedad reproducionedo false
    if (animal.nombre != animalSel.nombre){
      animal.reproduciendo = false;
    }
  }

}

//  Borrar un Item
borraranimal(idx :number){
this.animales.splice(idx, 1);
}

// Recargar la lista de items
recargaranimales(refrescar :Refresher){
  console.log('Inicio del refresh');

  setTimeout(() => {
      console.log('Termino del refresh');
      this.animales = ANIMALES.slice(0);
      refrescar.complete();
    }, 2000);
  }


  reordenaranimales(indices:any){
    console.log(indices)
   
    this.animales = reorderArray(this.animales, indices);
  }
}
