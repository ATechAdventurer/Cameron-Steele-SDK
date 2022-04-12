import { Main } from "../main";
import { FilteringOptions, RequestOptions } from "../types";
import { Quote } from "./interfaces";

export class Quotes extends Main {
    getQuotes(options?: RequestOptions, filters?: FilteringOptions): Promise<Quote[]> {
        return this.request<Quote[]>("quote", async (response) => {
            const data = await response.json();
            return data.docs;
        },
            options,
            filters);
    }
    getQuote(id: string): Promise<Quote> {
        return this.request<Quote>(`quote/${id}`, async (response) => {
            const data = await response.json();
            return data.docs[0];
        });
    }
}