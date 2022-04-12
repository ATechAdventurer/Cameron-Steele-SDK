import { Main } from "../main";
import { Character } from "./interfaces";
import { Quote } from "../quote/interfaces";
import { FilteringOptions, RequestOptions } from "../types";

export class Characters extends Main {
    getCharacters(options?: RequestOptions, filters?: FilteringOptions): Promise<Character[]> {
        return this.request<Character[]>("character", async (response) => {
            const data = await response.json();
            return data.docs;
        },
            options,
            filters);
    }

    getCharacter(id: string): Promise<Character> {
        return this.request<Character>(`character/${id}`, async (response) => {
            const data = await response.json();
            return data.docs[0];
        });
    }

    getCharacterQuotes(id: string, options?: RequestOptions, filters?: FilteringOptions): Promise<Quote[]> {
        return this.request<Quote[]>(`character/${id}/quote`, async (response) => {
            const data = await response.json();
            return data.docs;
        },
            options,
            filters);
    }
}