import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'localStorage';

  constructor() {
    // this.grabar_localstorage();
    this.obtener_localstorage();
  }


  obtener_localstorage() {
    const nombre = localStorage.getItem('nombre');
    const persona = JSON.parse(localStorage.getItem('persona'));

    console.log(nombre);
    console.log(persona);
  }

  grabar_localstorage() {
    const nombre = 'sainos';

    const persona = {
      nombre: 'juan',
      edad: 28,
      coords: {
        lat: 10,
        alt: -10
      }
    };

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('persona', JSON.stringify( persona ));
  }
}
