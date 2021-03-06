import { Main } from '../main';
import { FilteringOptions, RequestOptions } from '../types';
import { Movie } from './interfaces';

export class Movies extends Main {
    getMovies(options?: RequestOptions, filters?: FilteringOptions): Promise<Movie[]> {
        return this.request<Movie[]>('movie', async (response) => {
            const data = await response.json();
            return data.docs;
        },
            options,
            filters);
    }

    getMovie(id: string): Promise<Movie> {
        return this.request<Movie>(`movie/${id}`, async (response) => {
            const data = await response.json();
            return data.docs[0];
        });
    }
}