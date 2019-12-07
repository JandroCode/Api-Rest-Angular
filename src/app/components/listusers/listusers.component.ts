import { Component, OnInit } from '@angular/core';
import { UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

  usuarios:any = [];

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsers().subscribe(
      res => {
        this.usuarios = res;
      },

      err =>console.error(err)

      
    );
  }

}
