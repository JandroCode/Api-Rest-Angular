import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URI = 'http://localhost:8080/listar';

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.URI);
  }


}
