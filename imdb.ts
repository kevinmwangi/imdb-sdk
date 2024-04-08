/// <reference path="./imdb-sdk.d.ts" />
import axios from 'axios';
const SEARCH_API = 'https://search.imdbot.workers.dev/';

export class IMDB {

    /**
     * @param {string} query
     * @return {Promise<import('imdb-sdk').ResponseData | undefined>}
     */
    static async getRandomMovie(query: string) {
        return axios.get(`${SEARCH_API}`, {params: {q: query}})
            .then(response => {
                // handle success
                return response.data;
            })
            .catch(error => {
                /** ------------------------------------------------------
                 * TODO: - OPTION 1: Set up Winston to persist logs or
                 *       - OPTION 2: Set up Sentry
                 * ------------------------------------------------------
                 * I prefer sentry because of it session replay
                 * feature. Helps in knowing what actions the
                 * user performed that led to an Error
                 * ------------------------------------------------------*/

                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
    }

    /**
     * @param {string} query
     * @return {Promise<import('imdb-sdk').ResponseData | undefined>}
     */
    static async searchMovies(query: string) {
        return axios.get(`${SEARCH_API}`, {params: {q: query}})
            .then(response => {
                // handle success
                return response.data;
            })
            .catch(error => {
                /** ------------------------------------------------------
                 * TODO: - OPTION 1: Set up Winston to persist logs or
                 *       - OPTION 2: Set up Sentry
                 * ------------------------------------------------------
                 * I prefer sentry because of it session replay
                 * feature. Helps in knowing what actions the
                 * user performed that led to an Error
                 * ------------------------------------------------------*/
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx

                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
    }

    /**
     * @param {string} id
     * @return {Promise<import('imdb-sdk').ResponseData | undefined>}
     */
    static async getMovieDetails(id: string) {
        return axios.get(`${SEARCH_API}`, {params: {tt: id}})
            .then(response => {
                // handle success
                return response.data;
            })
            .catch(error => {

                /** ------------------------------------------------------
                 * TODO: - OPTION 1: Set up Winston to persist logs or
                 *       - OPTION 2: Set up Sentry
                 * ------------------------------------------------------
                 * I prefer sentry because of it session replay
                 * feature. Helps in knowing what actions the
                 * user performed that led to an Error
                 * ------------------------------------------------------*/

                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx

                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
    }
}