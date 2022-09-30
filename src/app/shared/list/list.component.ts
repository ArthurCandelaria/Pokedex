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

  public pokemons?: Array<Pokemon>;

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.listPokemons.subscribe(
      res => {
        this.pokemons = res.results;
        console.log(this.pokemons);
      },
      error => {
        console.log(error);
      }
    );
  }

}
