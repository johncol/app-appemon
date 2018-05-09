import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './components/shared/pokemon-list/pokemon-list.component';
import { PokemonMissingComponent } from './components/pokemon-missing/pokemon-missing.component';
import { PokemonSearchingComponent } from './components/pokemon-searching/pokemon-searching.component';
import { PokemonNotReleasedYetComponent } from './components/pokemon-not-released-yet/pokemon-not-released-yet.component';
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';

const routes: Routes = [
  { path: '', component: PokemonMissingComponent },
  { path: 'missing', component: PokemonMissingComponent },
  { path: 'searching', component: PokemonSearchingComponent },
  { path: 'not-released-yet', component: PokemonNotReleasedYetComponent },
  { path: 'search', component: SearchPokemonComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
