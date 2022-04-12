import { Main } from '../main';
import { Movie } from './interfaces';

export class Movies extends Main {
    getMovies(): Promise<Movie[]> {
        return this.request<Movie[]>('movie', async (response) => {
            const data = await response.json();
            return data.docs;
        });
    }

    getMovie(id: string): Promise<Movie> {
        return this.request<Movie>(`movie/${id}`, async (response) => {
            const data = await response.json();
            return data.docs[0];
        });
    }
}