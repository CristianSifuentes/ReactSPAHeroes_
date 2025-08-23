import { heroApi } from "../pages/api/hero.api";

export const getHeroesByPage = async () => {
  const { data } = await heroApi.get(`/`);

  return  data;
};
