import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokeApiService } from '../services/poke-api.service';

@Component({
  selector: 'app-card-poke',
  templateUrl: './card-poke.component.html',
  styleUrls: ['./card-poke.component.css'],
})
export class CardPokeComponent implements OnInit, OnChanges {
  @Input() nameP: string = '';
  // @ViewChild('imgPoke') imgPoke!: ElementRef;
  activeSpinner: boolean = true;
  currentPokemon: Pokemon = new Pokemon();
  moves: string[] = [];
  sprites: string[] = [];
  imagenPokemon: string = '';
  constructor(private service: PokeApiService, private el: ElementRef) {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    this.getPokemon();
  }
  getPokemon(): void {
    this.activeSpinner = true;
    setTimeout(() => {
      this.service.getPokemonByName(this.nameP).subscribe((pokemon) => {
        this.currentPokemon = pokemon;
        this.moves = this.getMoves(this.currentPokemon.moves);
        this.sprites = this.getSprites(this.currentPokemon.sprites);
        this.activeSpinner = false;
        this.setImagePokemon();
      });
    }, 1500);
  }
  setImagePokemon(): void {
    this.imagenPokemon = this.sprites[0];
    let cont = 1;
    setInterval(() => {
      this.imagenPokemon = this.sprites[cont];
      cont = cont == this.sprites.length - 1 ? 0 : cont + 1;
    }, 1000);
  }
  getMoves(moves: any): any {
    return moves
      .filter((e: any, index: number) => index < 6)
      .map((e: any) => e.move.name);
  }
  getSprites(sprites: any): any {
    return Object.values(sprites).filter(
      (e: any) => e != null && typeof e != 'object'
    );
  }
  getRandomArbitrary(min: number, max: number): string {
    return (Math.random() * (max - min) + min).toFixed(0).toString();
  }
}
