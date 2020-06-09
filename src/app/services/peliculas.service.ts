import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private API_KEY = 'f6aa14cdd8de77b073ab81ed80e212b5';
 private URL_MVDB = 'https://api.themoviedb.org/3';
  datos: any[] = [];

  constructor(private http : HttpClient) { }

  getPeliculas$(){
    return this.http.get(`${this.URL_MVDB}/discover/movie?sort_by=popularity.desc&api_key=${this.API_KEY}&language=es`).pipe(map((res:any) => {
         return this.datos =  res.results;
  }));
  }
  getPeliculasNinos$(){
    return this.http.get(`${this.URL_MVDB}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.API_KEY}&language=es`).pipe(map((res:any) => {
      return this.datos =  res.results;
 }));
  }

  getPeliculasCartelera$(){
    
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate()+7);
    let desdeStr = `${desde.getFullYear()}-0${desde.getMonth() + 1}-0${desde.getDate()}`;
    let hastaStr = `${hasta.getFullYear()}-0${hasta.getMonth() + 1}-${hasta.getDate()}`;
    return this.http.get(`${this.URL_MVDB}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.API_KEY}&language=es`).pipe(map((res:any) => {

      return this.datos =  res.results;
 }));
  }

  getPelicula$(id:string){
    return this.http.get(`${this.URL_MVDB}/movie/${id}?api_key=${this.API_KEY}&language=es`).pipe(map((res:any) => {
      return res;
 }));
  }

  buscarPeliculas$(pelicula:string){
    return this.http.get(`${this.URL_MVDB}/search/movie?api_key=${this.API_KEY}&language=es&query=${pelicula}`).pipe(map((res:any) => {
      return this.datos =  res.results;
 }));
  }
}


