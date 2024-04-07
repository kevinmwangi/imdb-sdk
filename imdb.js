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
    static getRandomMovie(query) {
        return __awaiter(this, void 0, void 0, function* () {
            // const response = await axios.get(`${SEARCH_API}/`, { params: { q: query } });
            // return response.data;
            axios_1.default.get(`${SEARCH_API}`, { params: { q: query } })
                .then(response => {
                // handle success
                return response.data;
            })
                .catch(error => {
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
    static searchMovies(query) {
        return __awaiter(this, void 0, void 0, function* () {
            // const response = await axios.get(`${SEARCH_API}`, { params: { q: query } });
            const response = axios_1.default.get(`${SEARCH_API}`, { params: { q: query } })
                .then(response => {
                // handle success
                return response.data;
            })
                .catch(error => {
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
    static getMovieDetails(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // const response = await axios.get(`${SEARCH_API}`, { params: { tt: id } });
            // return response.data;
            const response = axios_1.default.get(`${SEARCH_API}`, { params: { tt: id } })
                .then(response => {
                // handle success
                return response.data;
            })
                .catch(error => {
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
