import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css'],
})
export class PokemonSearchComponent implements OnInit {
  namePokemon: string = '';
  busqueda: boolean = false;
  pokemonBuscado = '';
  @ViewChild('selectPokemon') pokemonSelected!: ElementRef;
  constructor(private activatedRoute: ActivatedRoute) {
    this.verificarBusqueda();
  }

  ngOnInit(): void {}

  verificarBusqueda(): void {
    this.activatedRoute.params.subscribe((params) => {
      let nameP = params['nameP'];
      if (nameP) {
        this.busqueda = true;
        this.pokemonBuscado = nameP;
      } else {
        this.busqueda = false;
      }
    });
  }
  showPokemon(): void {
    this.namePokemon = this.pokemonSelected.nativeElement.value;
  }
}
