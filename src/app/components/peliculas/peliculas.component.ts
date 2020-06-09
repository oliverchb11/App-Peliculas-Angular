import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {
peliculascp: any[] = [];
peliculascp2: any[] = [];
peliculascp3 : any[] = [];
  constructor(private peliculaService: PeliculasService, private router :Router) { }

  ngOnInit(): void {
    this.getPeliculasCom();
    this.getPeliculasNinoCom();
    this.getPeliculasCarteleraCom();
  }

getPeliculasCom(){
  this.peliculaService.getPeliculas$().subscribe((res) => {
    this.peliculascp = res;

  });
}
getPeliculasNinoCom(){
  this.peliculaService.getPeliculasNinos$().subscribe((res)=>{
this.peliculascp2 = res;

  });
}
getPeliculasCarteleraCom(){
  this.peliculaService.getPeliculasCartelera$().subscribe((res)=>{
this.peliculascp3 = res;

  });
}


}

