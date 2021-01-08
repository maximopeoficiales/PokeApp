import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokedexComponent } from './pokedex/pokedex.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PokemonSimpleComponent } from './pokemon-simple/pokemon-simple.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';

@NgModule({
  declarations: [AppComponent, PokedexComponent, FooterComponent, HeaderComponent, PokemonSimpleComponent, PokemonListComponent, PokemonSearchComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
