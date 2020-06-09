import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimg'
})
export class NoimgPipe implements PipeTransform {

  transform(pelicula:any): string {
   let url = 'https://image.tmdb.org/t/p/w500';


    if(pelicula.poster_path ){
      return `${url}${pelicula.poster_path}`  ;

    }else{
      return 'assets/img/noimg.png';
    }
  }

}
