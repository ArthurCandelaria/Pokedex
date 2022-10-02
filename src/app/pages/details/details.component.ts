import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { forkJoin } from 'rxjs';

//Services
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlPokemonSpecie: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon?: any;
  public isLoading: boolean = false;
  public error: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.getPokemon;
  }

  get getPokemon(): Object {
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemon(`${this.urlPokemon}/${id}`);
    const specie = this.pokeApiService.apiGetPokemon(`${this.urlPokemonSpecie}/${id}`);

    return forkJoin([pokemon, specie]).subscribe(
      res => {
        this.pokemon = res;
        this.isLoading = true;
      },
      error => {
        this.error = true;
        console.error(error);
      }
    );
  }

}
