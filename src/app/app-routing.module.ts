import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonSimpleComponent } from './pokemon-simple/pokemon-simple.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'pokedex/pokemons', component: PokemonListComponent },
  { path: 'pokedex/pokemons/search', component: PokemonSearchComponent },
  { path: 'pokedex/pokemons/:id', component: PokemonSimpleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
