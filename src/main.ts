import fetch from 'isomorphic-unfetch';
import { Config, FilteringOptions, RequestOptions } from './types';

export abstract class Main {
    private apiKey: string;
    private baseUrl: string;

    constructor(config: Config) {
        this.apiKey = config.apiKey;
        this.baseUrl = config.baseUrl || 'https://the-one-api.dev/v2/';
    }

    protected request<T>(endpoint: string, transform: Function, apiOptions?: RequestOptions, filters?: FilteringOptions, options?: RequestInit, contentType: string = 'application/json'): Promise<T> {


        let urlParams = Object.keys(apiOptions || {}).map(key => `${key}=${apiOptions[key]}`).join('&');
        urlParams += Object.keys(filters || {}).map(key => filters[key]).join('&');
        const url = `${this.baseUrl}${endpoint}?${urlParams}`;
        console.log(url)
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
                return transform(response);
            }
            switch (response.status) {
                case 404:
                    throw new Error('Not found');
                case 400:
                    throw new Error('Bad request');
                case 429:
                    throw new Error('Too many requests');
            }
        });
    }
}