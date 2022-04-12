import { Main } from "../main";
import { Character } from "./interfaces";
import { Quote } from "../quote/interfaces";

export class Characters extends Main {
    getCharacters(): Promise<Character[]> {
        return this.request<Character[]>("character", async (response) => {
            const data = await response.json();
            return data.docs;
        });
    }

    getCharacter(id: string): Promise<Character> {
        return this.request<Character>(`character/${id}`, async (response) => {
            const data = await response.json();
            return data.docs[0];
        });
    }

    getCharacterQuotes(id: string): Promise<Quote[]> {
        return this.request<Quote[]>(`character/${id}/quote`, async (response) => {
            const data = await response.json();
            return data.docs;
        });
    }
}