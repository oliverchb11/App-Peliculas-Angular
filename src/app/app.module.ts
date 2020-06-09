import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//routermodule
import { RouterModule } from '@angular/router';
//modulo form modulo
import {FormsModule} from '@angular/forms';
//modulos de mi aplicacion
import {HttpClientModule,HttpClientJsonpModule} from '@angular/common/http'
//rutas de mi aplicacion
import { AppRoutingModule } from './app-routing.module';
//componetes de mi aplicacion 
import { AppComponent } from './app.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
//pipes de mi aplicacion
import { NoimgPipe } from './pipes/noimg.pipe';
import { GaleriapeliculasComponent } from './components/galeriapeliculas/galeriapeliculas.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    BuscadorComponent,
    NabvarComponent,
    PeliculaComponent,
    NoimgPipe,
    GaleriapeliculasComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
