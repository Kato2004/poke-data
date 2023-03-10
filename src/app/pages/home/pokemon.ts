export interface Pokemon {
  height: number;
  id: number;
  name: string;
  order: number;
  base_experience: number;
  is_default: boolean;
  weight: number;
  abilities: {
    is_hidden: boolean;
    slot: number;
    ability: {
      name: string;
      url: string;
    };
  }[];
  forms: { name: string; url: string }[];
  held_items: {
    item: { name: string; url: string };
    version_details: {
      rarity: number;
      version: { name: string; url: string };
    }[];
    location_area_encounters: string;
  }[];
  moves: {
    move: { name: string; url: string };
    version_group_details: {
      level_learned_at: number;
      version_group: {
        name: string;
        url: string;
      };
      move_learn_method: {
        name: string;
        url: string;
      };
    }[];
  }[];
  species: { name: string; url: string };
  sprites?: {
    front_default: string;
    front_shiny: string;
    other: {
      home: {
        front_default: string;
      };
      'official-artwork': {
        front_default: string;
      };
    };
    version: {};
  };
  stats: {
    base_stats: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  past_types?: {
    generation: { name: string; url: string };
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }[];
  }[];
}

export interface GetPokemon {
  searching: boolean;
  pokemon: Pokemon;
}
