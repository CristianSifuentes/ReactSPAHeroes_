const BASE_URL = import.meta.env.VITE_API_URL;

import { heroApi } from '../pages/api/hero.api';
import type { Hero } from '../types/hero.interface';

export const getHeroe = async (isSlug: string) => {
    const { data } = await heroApi.get<Hero>(`/hero/${isSlug}`);
    return {
        ...data,
        image: `${BASE_URL}/images/${data.image}`
    };
}
