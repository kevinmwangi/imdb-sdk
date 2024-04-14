/// <reference types="node" />
import { Readable } from 'stream';
import { ResponseData, MovieData } from "./types/types";
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
    /** -------------------------------------------------------------------------------------------------
     *  @method getAllMovies
     *  @static
     *  @param {string[]} queries - An array of queries to fetch movie data.
     *  @return {AsyncIterable<{result?: MovieData, error?: Error}>}
     *  An async iterable that yields either the result of each query or an error.
     *  -------------------------------------------------------------------------------------------------
     *  This method takes an array of queries and fetches movie data for each query
     *  concurrently. It returns an async iterable that can be used in a for-await-of loop.
     *  For each query, it attempts to get movie data. If successful, it yields the result.
     *  If there is an error (either an instance of Error or any other rejection),
     *  it yields an object with the error property set to a new Error instance.
     *  -------------------------------------------------------------------------------------------------
     *  TODO: HANDLE ALL INSTANCES OF REJECTION - Not all rejections will be instances of Error.
     *  */
    static getAllMovies(queries: string[]): AsyncIterable<{
        result?: MovieData;
        error?: Error;
    }>;
    /** -------------------------------------------------------------------------------------------------
     * @method streamAllMovies
     * @static
     * @param {string[]} queries - An array of queries to fetch movie data.
     * @return {Readable<{results: ResponseData[], errors: Error[]}>}
     * A readable stream that pushes either the result of each query or an error.
     * -------------------------------------------------------------------------------------------------
     * This method takes an array of queries, fetches movie data for each query
     * concurrently and streams the results.
     * It creates a readable stream in object mode, then uses Bluebird's Promise.map
     * to iterate over the queries.For each query, it attempts to get movie data.
     * If successful, it pushes the result into the stream. * If there is an error
     * (either an instance of Error or any other rejection), it pushes the error into the stream.
     * Once all queries have been processed, it signals the end of the stream by pushing null.
     * The concurrency level can be adjusted according to your system's capability.
     * -------------------------------------------------------------------------------------------------
     * TODO: HANDLE ALL INSTANCES OF REJECTION - Not all rejections will be instances of Error.
     * */
    static streamAllMovies(queries: string[]): Readable;
    /**
     * @param {string} query
     * @return {Promise<MovieData | Error>}
     */
    static getMovie(query: string): Promise<MovieData | Error>;
    /**
     * @param {string} id
     * @return {Promise<ResponseData | Error>}
     */
    static getMovieDetails(id: string): Promise<ResponseData>;
}
