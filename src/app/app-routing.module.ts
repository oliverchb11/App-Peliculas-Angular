import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';


const routes: Routes = [
  {
    path: 'peliculas' , component: PeliculasComponent
  },
  {
    path:'buscar' , component:BuscadorComponent
  },
  {
    path:'buscar/:texto' , component:BuscadorComponent
  },
  {
    path:'buscar/:id/:texto' , component:BuscadorComponent
  },
  {
    path:'pelicula/:id/:pag',component:PeliculaComponent
  },
  {
    path: '**', pathMatch: 'full' , redirectTo: 'peliculas'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
