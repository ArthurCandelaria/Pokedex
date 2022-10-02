import { Component, OnInit } from '@angular/core';

//Interfaces
import { Pokemon } from 'src/app/interfaces/pokemons';

//Services
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public getPokemons?: Array<Pokemon>;
  public setPokemons?: Array<Pokemon>;

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  public getAllPokemons(): void {
    this.pokeApiService.listPokemons.subscribe(
      res => {
        this.getPokemons = res.results;
        this.setPokemons = res.results;
      },
      error => {
        console.error(error);
      }
    );
  }

  public getSearch(event: { keyEvent: KeyboardEvent, value: string }): void {
    this.setPokemons = this.getPokemons;
    const filter = this.setPokemons?.filter(pokemon => {
      return !pokemon.name.indexOf(event.value.toLocaleLowerCase());
    });

    //log add apenas para utilizar o parametro "keyEvent"
    if (event.keyEvent.key == "Backspace") console.log(event.keyEvent.key)

    this.setPokemons = filter;
  }

}
