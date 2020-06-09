import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
  buscarp = '';
  peliculas:any[]=[];
texto :any;
  constructor(private peliculaServicio: PeliculasService, private router :Router, private routerActive:ActivatedRoute) { }

  ngOnInit(): void {
  this.buscador_navbar();
  }
  buscar_pelicula(){

   if(this.buscarp !=''){
    this.peliculaServicio.buscarPeliculas$(this.buscarp).subscribe((res)=>{

      this.peliculas = res;
    },((error)=>{

      if(error.status===422){
        return this.buscarp = '';
      }
    }));

   }else{
    console.log('campo vacio');
    return;
  }
  }

  ver_peli(id: number, pelicula: any){
  let idb = id.toString();

  this.router.navigate(['/pelicula', idb,'buscador']);
  }

  buscador_navbar(){
    this.routerActive.params.subscribe(data=>{
      if(data){
      this.texto = data;
      this.buscarp = this.texto.texto;
      this.buscar_pelicula();
      this.texto = '';
      
    }else{
      console.log('nada');
      return;
     
    }
    });
  }

}
