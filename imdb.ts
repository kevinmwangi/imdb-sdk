import axios from 'axios';
import * as Bluebird from 'bluebird';
import { Readable } from 'stream';
const SEARCH_API = 'https://search.imdbot.workers.dev/';
import { ResponseData, MovieData } from "./types/types";

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

    static async *getAllMovies(queries: string[]): AsyncIterable<{result?: MovieData, error?: Error}> {
        const promises = queries.map( query =>
            this.getMovie( query )
                .then(result => (result instanceof Error ? {error: result} : {result}))
                .catch( error => ({error: new Error(error)}) ) );

        for await (const result of promises) {
            yield result;
        }
    }

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

    static streamAllMovies( queries: string[] ): Readable{
        const stream = new Readable( {
            objectMode: true, read(){
            }
        } );

        Bluebird.Promise.map( queries, async ( query: string ) => {
            try {
                const result = await this.getMovie( query );
                if ( result instanceof Error ){
                    stream.push({ error: result })
                } else {
                    stream.push({ result });
                }

            } catch ( error ) {
                stream.push( { error } );
            }
        }, { concurrency: 100 } ) // Adjust concurrency level according to your system's capability
                .finally( () => {
                    stream.push( null ); // End of stream
                } );

        return stream;
    }

    /**
     * @param {string} query
     * @return {Promise<MovieData | Error>}
     */
    static async getMovie(query: string): Promise<MovieData | Error> {
        try {
            const response = await axios.get(`${SEARCH_API}`, {params: {q: query}});
            return response.data as MovieData;
        } catch ( error ){ return error as Error; }
    }

    /**
     * @param {string} id
     * @return {Promise<ResponseData | Error>}
     */

    static async getMovieDetails( id: string ): Promise<ResponseData>{
        return axios.get( `${SEARCH_API}`, { params: { tt: id } } )
                    .then( response => response.data as ResponseData )
                    .catch( error => {
                        throw error.response ? error.response.data : new Error( 'Network Error' );
                    } );
    }
}