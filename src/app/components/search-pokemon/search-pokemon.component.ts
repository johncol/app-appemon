import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { Pokemon } from '../../domain/pokemon.model';
import { PokemonApiService } from '../../services/pokemon-api.service';

@Component({
  selector: 'appemon-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {
  form: FormGroup;
  formSubmitted: boolean;
  searchField: AbstractControl;
  searchResult: Pokemon;

  constructor(
    private formBuilder: FormBuilder,
    private pokemonApi: PokemonApiService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  search(): void {
    this.pokemonApi
      .getByName(String(this.searchField.value).trim())
      .do(() => this.formSubmitted = true)
      .subscribe(pokemon => this.searchResult = pokemon);
  }

  fieldIsEmpty(): boolean {
    return (this.searchField.value || '').trim().length === 0;
  }

  private initForm(): void {
    this.form = this.formBuilder.group({ 'name': [] });
    this.searchField = this.form.get('name');
  }

}
