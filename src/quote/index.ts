import { Main } from "../main";
import { Quote } from "./interfaces";

export class Quotes extends Main {
    getQuotes(): Promise<Quote[]> {
        return this.request<Quote[]>("quote", async (response) => {
            const data = await response.json();
            return data.docs;
        });
    }
    getQuote(id: string): Promise<Quote> {
        return this.request<Quote>(`quote/${id}`, async (response) => {
            const data = await response.json();
            return data.docs[0];
        });
    }
}