"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMDB = void 0;
const axios_1 = __importDefault(require("axios"));
const SEARCH_API = 'https://search.imdbot.workers.dev/';
class IMDB {
    /**
     * @param {string} query
     * @return {Promise<import('imdb').ResponseData | undefined>}
     */
    static getRandomMovie(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get(`${SEARCH_API}`, { params: { q: query } })
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
                }
                else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                }
                else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
        });
    }
    /**
     * @param {string} query
     * @return {Promise<import('imdb').ResponseData | undefined>}
     */
    static searchMovies(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get(`${SEARCH_API}`, { params: { q: query } })
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
                }
                else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                }
                else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
        });
    }
    /**
     * @param {string} id
     * @return {Promise<import('imdb').ResponseData | undefined>}
     */
    static getMovieDetails(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get(`${SEARCH_API}`, { params: { tt: id } })
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
                }
                else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                }
                else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
        });
    }
}
exports.IMDB = IMDB;
