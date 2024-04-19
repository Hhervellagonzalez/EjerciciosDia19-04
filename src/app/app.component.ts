import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { DondeEstamosComponent } from './donde-estamos/donde-estamos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { InicioComponent } from './inicio/inicio.component';
import { NuevoComentarioComponent } from './nuevo-comentario/nuevo-comentario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ComentariosComponent,DondeEstamosComponent,QuienesSomosComponent,InicioComponent,RouterLink,NuevoComentarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EjerciciosDia19-04';
}
