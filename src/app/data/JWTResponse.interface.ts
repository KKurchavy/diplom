export interface JWTResponse {
    code?: number;
    expire?: string;
    token: string;
}