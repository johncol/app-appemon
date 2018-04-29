import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { StorageServiceModule } from 'angular-webstorage-service';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PokemonListComponent } from './components/shared/pokemon-list/pokemon-list.component';
import { PokemonListItemComponent } from './components/shared/pokemon-list-item/pokemon-list-item.component';
import { PokemonMissingComponent } from './components/pokemon-missing/pokemon-missing.component';
import { PokemonSearchingComponent } from './components/pokemon-searching/pokemon-searching.component';
import { PokemonNotReleasedYetComponent } from './components/pokemon-not-released-yet/pokemon-not-released-yet.component';

import { MediaQueryService } from './services/media-query.service';
import { PokemonApiService } from './services/pokemon-api.service';
import { PokemonMapper } from './services/pokemon.mapper';
import { PokemonStorageService } from './services/pokemon-storage.service';
import { PokemonMissingService } from './services/pokemon-missing.service';
import { PokemonSearchingService } from './services/pokemon-searching.service';
import { PokemonNotReleasedYetService } from './services/pokemon-not-released-yet.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MaterialModule,
    FlexLayoutModule,
    StorageServiceModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    LayoutComponent,
    PokemonListComponent,
    PokemonListItemComponent,
    PokemonMissingComponent,
    PokemonSearchingComponent,
    PokemonNotReleasedYetComponent
  ],
  providers: [
    MediaQueryService,
    PokemonApiService,
    PokemonMapper,
    PokemonStorageService,
    PokemonMissingService,
    PokemonSearchingService,
    PokemonNotReleasedYetService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
