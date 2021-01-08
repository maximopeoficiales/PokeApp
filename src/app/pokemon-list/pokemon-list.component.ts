import { Component, OnInit } from '@angular/core';
import { Pokemons } from '../models/pokemons';
import { PokeApiService } from '../services/poke-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemons[] = [];
  constructor(private service: PokeApiService) {}

  ngOnInit(): void {
    this.service.getPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons;
      console.log(this.pokemons);
    });
  }
}
