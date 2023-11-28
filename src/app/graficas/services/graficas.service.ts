import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getUsuariosRedesSociales() {
    return this.http.get('http://localhost:3000/grafica');
  }

  //Regresa el valor del resultado del otro método
  //Es un observable y por eso puede pasar por un pipe
  getUsuariosRedesSocialesDonaData() {
    return this.getUsuariosRedesSociales()
      //Tranforma la información como fluye por aqui
      .pipe(
        delay(1500),
        //El map permite tomar la respuesta de un observable 
        //y retomas cualquier cosas que ustedes quieran por ejemplo la data
        //lo que sea que retorne es lo que va a regresar
        map(data => {

          //objeto propio de JS, es un método de todos los objetos
          //Entregará las llaves
          const labels = Object.keys(data);
          const values = Object.values(data);
          //Regresa un nuevo objeto
          return { labels, values };

        })
      )
  }
}
