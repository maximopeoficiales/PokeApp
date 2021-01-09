import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { Pokemons } from '../models/pokemons';
import { PokeApiService } from '../services/poke-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemons[] = [];
  namePokemon: string = '';
  @ViewChild('selectPokemons') pokemonSelected!: ElementRef;
  constructor(private service: PokeApiService) {}

  ngOnInit(): void {
    this.service.getPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons;
    });
  }

  showPokemon(): void {
    this.namePokemon = this.pokemonSelected.nativeElement.value;
  }
}
