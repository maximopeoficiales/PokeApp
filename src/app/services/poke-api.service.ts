import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon';
import { Pokemons } from '../models/pokemons';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private urlEndPoint: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient, private router: Router) {}

  getPokemons(): Observable<Pokemons[]> {
    return this.http
      .get(this.urlEndPoint)
      .pipe(map((response: any) => response.results as Pokemons[]));
  }
  getPokemonByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.urlEndPoint}/${name}`);
  }
}
