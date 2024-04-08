export declare class IMDB {
    /**
     * @param {string} query
     * @return {Promise<import('imdb').ResponseData | undefined>}
     */
    static getRandomMovie(query: string): Promise<any>;
    /**
     * @param {string} query
     * @return {Promise<import('imdb').ResponseData | undefined>}
     */
    static searchMovies(query: string): Promise<any>;
    /**
     * @param {string} id
     * @return {Promise<import('imdb').ResponseData | undefined>}
     */
    static getMovieDetails(id: string): Promise<any>;
}
