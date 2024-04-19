import { Component } from '@angular/core';
import { NuevoComentarioComponent } from '../nuevo-comentario/nuevo-comentario.component';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [NuevoComentarioComponent],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {
  comentarios: string[] = [];

  agregarComentario(nuevoComentario:string){
    this.comentarios.push(nuevoComentario);
  }
}
