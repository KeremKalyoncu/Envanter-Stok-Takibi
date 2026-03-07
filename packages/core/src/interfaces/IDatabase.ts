export interface IDatabase {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    query<T>(statement: string, params?: any[]): Promise<T>;
}
