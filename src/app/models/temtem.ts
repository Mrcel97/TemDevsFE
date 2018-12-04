import { Type } from "./type";

export interface Temtem {
  id: string;
  types: Array<string>;
  complexTypes: Array<Type>;
  name: string;
  image_url: string;
  evolves_to?: string;
  evolves_from?: string;
}