import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, tap } from 'rxjs';

//Interfaces
import { Pokemon } from '../interfaces/pokemons';
import { ListPokemon } from '../interfaces/pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(
    private http: HttpClient
  ) { }

  get listPokemons(): Observable<ListPokemon> {
    return this.http.get<ListPokemon>(this.url).pipe(
      tap(res => {
        res.results.map(pokemon => {

          this.apiGetPokemon(pokemon.url).subscribe(
            res => pokemon.status = res
          )

        })
      })
    );
  }

  public apiGetPokemon(url: string): Observable<any> {
    return this.http.get<Pokemon>(url).pipe(
      res => res
    )
  }

}
