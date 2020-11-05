import { CommonAttributes } from './rest.interface';

export type FilmAttributes = {
  created: string;
  title: string;
  /* eslint-disable camelcase */
  episode_id: number;
  director: string;
  characters: CommonAttributes[];
  planets: CommonAttributes[];
  species: CommonAttributes[];
  starships: CommonAttributes[];
  vehicles: CommonAttributes[];
};

export type Film = {
  hasNext: string | null;
  data: FilmAttributes[];
};
