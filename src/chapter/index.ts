import { Main } from "../main";
import { FilteringOptions, RequestOptions } from "../types";
import { Chapter } from "./interfaces";

export class Chapters extends Main {
    getChapters(options?: RequestOptions, filters?: FilteringOptions): Promise<Chapter[]> {
        return this.request<Chapter[]>(`chapter`, async (response) => {
            const data = await response.json();
            return data.docs;
        },
            options,
            filters);
    }

    getChapter(id: string): Promise<Chapter> {
        return this.request<Chapter>(`chapter/${id}`, async (response) => {
            const data = await response.json();
            return data.docs[0];
        });
    }
}