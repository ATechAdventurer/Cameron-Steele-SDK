import { Main } from "../main";
import { Chapter } from "./interfaces";

export class Chapters extends Main {
    getChapters(): Promise<Chapter[]> {
        return this.request<Chapter[]>(`chapter`, async (response) => {
            const data = await response.json();
            return data.docs;
        });
    }

    getChapter(id: string): Promise<Chapter> {
        return this.request<Chapter>(`chapter/${id}`, async (response) => {
            const data = await response.json();
            return data.docs[0];
        });
    }
}