import axios from 'axios';
import { Pokemon, ResPokeAPI, SimplePokemon } from '../types/types';

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APIURL,
});

export const getPokemons = async () => {
  return await client.get<ResPokeAPI>('pokemon?limit=11000');
};

export const getPokemon = async (id: string | number) => {
  return await client.get<Pokemon>(`pokemon/${id}`);
};
