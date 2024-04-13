import { ResponseData } from "./types";
export declare class IMDB {
    /**
     * @deprecated @deprecated since version 1.2.Use getAllMovies instead.
     * @param {string[]} queries
     * @return {Promise<(ResponseData | Error)[]>}
     */
    static searchMovies(queries: string[]): Promise<(ResponseData | Error)[]>;
    /**
     * @deprecated since version 1.2.Use getMovie instead.
     * @param {string} query
     * @return {Promise<ResponseData | Error>}
     */
    static searchMovie(query: string): Promise<ResponseData | Error>;
    /**
     * @param {string[]} queries
     * @return {Promise<{results: ResponseData[], errors: Error[]}>}
     * TODO: HANDLE ALL INSTANCES OF REJECTION
     *       Not all rejections will be instances of Error.
     */
    static getAllMovies(queries: string[]): AsyncIterable<{
        result?: ResponseData;
        error?: Error;
    }>;
    /**
     * @param {string} query
     * @return {Promise<ResponseData | Error>}
     */
    static getMovie(query: string): Promise<ResponseData | Error>;
    /**
     * @param {string} id
     * @return {Promise<ResponseData | Error>}
     */
    static getMovieDetails(id: string): Promise<ResponseData | Error>;
}
