import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Pokemon, GetPokemon } from '../../pokemon';

const initial: Pokemon = {
  height: 0,
  id: 0,
  name: '',
  order: 0,
  base_experience: 0,
  is_default: false,
  weight: 0,
  abilities: [
    {
      is_hidden: false,
      slot: 0,
      ability: {
        name: '',
        url: '',
      },
    },
  ],
  forms: [{ name: '', url: '' }],
  held_items: [
    {
      item: { name: '', url: '' },
      version_details: [
        {
          rarity: 0,
          version: { name: '', url: '' },
        },
      ],
      location_area_encounters: '',
    },
  ],
  moves: [
    {
      move: { name: '', url: '' },
      version_group_details: [
        {
          level_learned_at: 0,
          version_group: {
            name: '',
            url: '',
          },
          move_learn_method: {
            name: '',
            url: '',
          },
        },
      ],
    },
  ],
  species: { name: '', url: '' },
  sprites: {
    front_default: '',
    front_shiny: '',
    other: {
      home: {
        front_default: '',
      },
      'official-artwork': {
        front_default: '',
      },
    },
    version: {},
  },
  stats: [
    {
      base_stats: 0,
      effort: 0,
      stat: {
        name: '',
        url: '',
      },
    },
  ],
  types: [
    {
      slot: 0,
      type: {
        name: '',
        url: '',
      },
    },
  ],
  past_types: [
    {
      generation: { name: '', url: '' },
      types: [
        {
          slot: 0,
          type: {
            name: '',
            url: '',
          },
        },
      ],
    },
  ],
};

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.sass'],
})
export class SearchPokemonComponent {
  inputSearch: string;
  readonly apiURL: string;
  data: GetPokemon;

  constructor(private http: HttpClient) {
    this.apiURL = 'https://pokeapi.co/api/v2/pokemon';
    this.inputSearch = '';
    this.data = { searching: false, pokemon: initial };
  }

  getPokemonApiData() {
    const value = this.inputSearch.toLowerCase();
    if (value != '') {
      this.http.get<Pokemon>(`${this.apiURL}/${value}`).subscribe((result) => {
        console.log(result);
        this.data = {
          searching: true,
          pokemon: {
            ...result,
            name: result.name[0].toUpperCase() + result.name.substring(1),
          },
        };
      });
    }
  }
}
