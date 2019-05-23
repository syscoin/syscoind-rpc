export interface ListTransactionsRequest {
    label?: string;
    count?: number;
    skip?: number;
    includeWatchOnly?: number;
}
