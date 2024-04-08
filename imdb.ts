import axios from 'axios';
import { ResponseData } from './types';
const SEARCH_API = 'https://search.imdbot.workers.dev/';

export class IMDB {
    /**
     * @param {string} query
     * @return {Promise<ResponseData | undefined>}
     */
    static async getRandomMovie(query: string): Promise<ResponseData | undefined> {
        const response = await axios.get(`${SEARCH_API}`, {params: {q: query}});
        return response.data as ResponseData;
    }

    /**
     * @param {string} query
     * @return {Promise<ResponseData | undefined>}
     */
    static async searchMovies(query: string): Promise<ResponseData | undefined> {
        const response = await axios.get(`${SEARCH_API}`, {params: {q: query}});
        return response.data as ResponseData;
    }

    /**
     * @param {string} id
     * @return {Promise<ResponseData | undefined>}
     */
    static async getMovieDetails(id: string): Promise<ResponseData | undefined> {
        const response = await axios.get(`${SEARCH_API}`, {params: {tt: id}});
        return response.data as ResponseData;
    }
}