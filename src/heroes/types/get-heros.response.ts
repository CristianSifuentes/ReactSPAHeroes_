import type { Hero } from "./hero.interface";

export interface HerosResponse {
    total:  number;
    pages:  number;
    heroes: Hero[];
}

