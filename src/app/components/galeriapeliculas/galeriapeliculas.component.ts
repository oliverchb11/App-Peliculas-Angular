import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galeriapeliculas',
  templateUrl: './galeriapeliculas.component.html',
  styleUrls: ['./galeriapeliculas.component.scss']
})
export class GaleriapeliculasComponent implements OnInit {
@Input('peliculasconexion') peliculascg;
@Input('peliculasconexion2') peliculascg2;
@Input('peliculasconexion3') peliculascg3;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  verPelicula(idc:number,pelicula:any){
    console.log(pelicula);
     const hola =  idc.toString();
    this.router.navigate(['/pelicula',hola,'peliculas']);
    
    }
    verPelicula2(idc:number,pelicula:any){
      console.log(pelicula);
       const hola =  idc.toString();
      this.router.navigate(['/pelicula',hola,'peliculas']);
      
      }
      verPelicula3(idc:number,pelicula:any){
        console.log(pelicula);
         const hola =  idc.toString();
        this.router.navigate(['/pelicula',hola,'peliculas']);
        
        }
}
