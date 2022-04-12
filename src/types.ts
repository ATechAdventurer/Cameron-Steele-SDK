export interface Config {
    apiKey: string;
    baseUrl?: string;
}

export interface RequestOptions {
    sort?: string;
    page?: number;
    offset?: number;
    limit?: number;
}

export interface FilteringOptions {
    match?: string;
    include?: string;
    existance?: string;
    regex?: string;
    comparison?: string;
}