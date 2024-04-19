import { Routes } from '@angular/router';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { InicioComponent } from './inicio/inicio.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { DondeEstamosComponent } from './donde-estamos/donde-estamos.component';

export const routes: Routes = [
    {path:'', component: InicioComponent},
    {path: 'quienes-somos', component: QuienesSomosComponent},
    {path: 'donde-estamos', component: DondeEstamosComponent},
    {path: 'comentarios', component : ComentariosComponent}
];
