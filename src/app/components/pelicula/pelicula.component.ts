import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {
id:string;
pelicula:any;
link_url:any;
validacion_ruta:boolean;
  constructor(private activeRoute : ActivatedRoute, private peliculaService:PeliculasService) { }

  ngOnInit(): void {

this.getPeliculaUnica();

  }

  getPelicula(id:string){
    this.peliculaService.getPelicula$(id).subscribe((data)=>{
      this.pelicula = data;
      console.log(data);
    });
  }

  getPeliculaUnica(){
    this.activeRoute.params.subscribe((data)=>{
      this.id = data.id;
      this.link_url = data.pag;
      if(this.link_url=='peliculas'){
        console.log('peliculas');
        this.validacion_ruta = true;
      }else{
        console.log('buscador');
        this.validacion_ruta = false;
      }
      this.getPelicula(this.id);
 })
  }
}
