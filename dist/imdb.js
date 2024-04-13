var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "axios"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IMDB = void 0;
    const axios_1 = __importDefault(require("axios"));
    const SEARCH_API = 'https://search.imdbot.workers.dev/';
    class IMDB {
        /**
         * @deprecated @deprecated since version 1.2.Use getAllMovies instead.
         * @param {string[]} queries
         * @return {Promise<(ResponseData | Error)[]>}
         */
        static async searchMovies(queries) {
            const promises = queries.map(query => this.searchMovie(query).catch(error => error));
            return await Promise.all(promises);
        }
        /**
         * @deprecated since version 1.2.Use getMovie instead.
         * @param {string} query
         * @return {Promise<ResponseData | Error>}
         */
        static async searchMovie(query) {
            try {
                const response = await axios_1.default.get(`${SEARCH_API}`, { params: { q: query } });
                return response.data;
            }
            catch (error) {
                return error;
            }
        }
        /**
         * @param {string[]} queries
         * @return {Promise<{results: ResponseData[], errors: Error[]}>}
         * TODO: HANDLE ALL INSTANCES OF REJECTION
         *       Not all rejections will be instances of Error.
         */
        static async *getAllMovies(queries) {
            const promises = queries.map(query => this.getMovie(query)
                .then(result => (result instanceof Error ? { error: result } : { result }))
                .catch(error => ({ error: new Error(error) })));
            for await (const result of promises) {
                yield result;
            }
        }
        /**
         * @param {string} query
         * @return {Promise<ResponseData | Error>}
         */
        static async getMovie(query) {
            try {
                const response = await axios_1.default.get(`${SEARCH_API}`, { params: { q: query } });
                return response.data;
            }
            catch (error) {
                return error;
            }
        }
        /**
         * @param {string} id
         * @return {Promise<ResponseData | Error>}
         */
        static async getMovieDetails(id) {
            try {
                const response = await axios_1.default.get(`${SEARCH_API}`, { params: { tt: id } });
                return response.data;
            }
            catch (error) {
                return error;
            }
        }
    }
    exports.IMDB = IMDB;
});
