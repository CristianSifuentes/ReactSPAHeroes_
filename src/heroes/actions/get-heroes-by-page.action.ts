import { heroApi } from "../pages/api/hero.api";
import type { HerosResponse } from "../types/get-heros.response";


const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroesByPageAction = async (): Promise<HerosResponse> => {
  const { data } = await heroApi.get<HerosResponse>(`/`);


  const heroes = data.heroes.map(hero => ({
    ...hero,
    image: `${BASE_URL}/images/${hero.image}`,
    // Add any additional transformations here
  }));

  console.log(data);

  // return  data;
  return {
    ...data,
    heroes: heroes,
    
  }
};
