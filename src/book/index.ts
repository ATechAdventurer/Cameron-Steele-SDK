import { Main } from '../main';
import { Book } from './interfaces';
import { Chapter } from '../chapter/interfaces';
import { RequestOptions, FilteringOptions } from '../types';
export class Books extends Main {
    getBooks(options?: RequestOptions, filters?: FilteringOptions): Promise<Book[]> {
        return this.request<Book[]>('book', async (response) => {
            const data = await response.json();
            return data.docs;
        },
            options,
            filters);
    }

    getBook(id: string): Promise<Book> {
        return this.request<Book>(`book/${id}`, async (response) => {
            const data = await response.json();
            return data.docs[0];
        });
    }

    getChaptersByBook(id: string, options?: RequestOptions, filters?: FilteringOptions): Promise<Chapter[]> {
        return this.request<Chapter[]>(`book/${id}/chapter`, async (response) => {
            const data = await response.json();
            return data.docs;
        },
            options,
            filters);
    }

}