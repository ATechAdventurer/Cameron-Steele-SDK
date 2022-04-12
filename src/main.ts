import fetch from 'isomorphic-unfetch';
import { Config } from './types';

export abstract class Main {
    private apiKey: string;
    private baseUrl: string;

    constructor(config: Config) {
        this.apiKey = config.apiKey;
        this.baseUrl = config.baseUrl || 'https://the-one-api.dev/v2/';
    }

    protected request<T>(endpoint: string, options?: RequestInit, contentType: string = 'application/json'): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`;
        const headers = {
            'Content-Type': contentType,
            'Authorization': `Bearer ${this.apiKey}`,
        };
        const config = {
            ...options,
            headers,
        };
        return fetch(url, config).then(response => {
            if (response.ok) {
                return response.json();
            }
            switch (response.status) {
                case 404:
                    throw new Error('Not found');
                case 400:
                    throw new Error('Bad request');
            }
        });
    }
}