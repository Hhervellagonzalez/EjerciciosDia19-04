import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo-comentario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nuevo-comentario.component.html',
  styleUrl: './nuevo-comentario.component.css'
})
export class NuevoComentarioComponent {
nuevoComentario: string = '';
@Output()
 enviarComentario = new EventEmitter<string>();


publicarComentario(){
  if(this.nuevoComentario.trim()){
    this.enviarComentario.emit(this.nuevoComentario);
    this.nuevoComentario = '';
  }
}

}
