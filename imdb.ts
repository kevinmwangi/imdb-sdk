import axios from 'axios';
const SEARCH_API = 'https://search.imdbot.workers.dev/';
import { ResponseData } from "./types/types";

export class IMDB {
    /**
     * @deprecated @deprecated since version 1.2.Use getAllMovies instead.
     * @param {string[]} queries
     * @return {Promise<(ResponseData | Error)[]>}
     */
    static async searchMovies(queries: string[]): Promise<(ResponseData | Error)[]> {
        const promises = queries.map(query =>
            this.searchMovie(query).catch(error => error)
        );
        return await Promise.all(promises);
    }

    /**
     * @deprecated since version 1.2.Use getMovie instead.
     * @param {string} query
     * @return {Promise<ResponseData | Error>}
     */
    static async searchMovie(query: string): Promise<ResponseData | Error> {
        try {
            const response = await axios.get(`${SEARCH_API}`, {params: {q: query}});
            return response.data as ResponseData;
        } catch ( error ){ return error as Error; }
    }

    /**
     * @param {string[]} queries
     * @return {Promise<{results: ResponseData[], errors: Error[]}>}
     * TODO: HANDLE ALL INSTANCES OF REJECTION
     *       Not all rejections will be instances of Error.
     */
    static async *getAllMovies(queries: string[]): AsyncIterable<{result?: ResponseData, error?: Error}> {
        const promises = queries.map( query =>
            this.getMovie( query )
                .then(result => (result instanceof Error ? {error: result} : {result}))
                .catch( error => ({error: new Error(error)}) ) );

        for await (const result of promises) {
            yield result;
        }
    }

    /**
     * @param {string} query
     * @return {Promise<ResponseData | Error>}
     */
    static async getMovie(query: string): Promise<ResponseData | Error> {
        try {
            const response = await axios.get(`${SEARCH_API}`, {params: {q: query}});
            return response.data as ResponseData;
        } catch ( error ){ return error as Error; }
    }

    /**
     * @param {string} id
     * @return {Promise<ResponseData | Error>}
     */
    static async getMovieDetails(id: string): Promise<ResponseData | Error> {
        try {
            const response = await axios.get(`${SEARCH_API}`, {params: {tt: id}});
            return response.data as ResponseData;
        } catch ( error ){ return error as Error; }
    }
}