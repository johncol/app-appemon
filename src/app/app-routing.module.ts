import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './components/shared/pokemon-list/pokemon-list.component';
import { PokemonMissingComponent } from './components/pokemon-missing/pokemon-missing.component';
import { PokemonSearchingComponent } from './components/pokemon-searching/pokemon-searching.component';
import { PokemonNotReleasedYetComponent } from './components/pokemon-not-released-yet/pokemon-not-released-yet.component';

const routes: Routes = [
  { path: '', redirectTo: 'missing', pathMatch: 'full' },
  { path: 'missing', component: PokemonMissingComponent },
  { path: 'searching', component: PokemonSearchingComponent },
  { path: 'not-released-yet', component: PokemonNotReleasedYetComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
