import { ResponseData } from "./response";
import * as MovieDetails from "./details";
import { MovieData } from "./movie";

export declare class IMDB {
	static getAllMovies( query: string[] ): Promise<{results: ResponseData[], errors: Error[]}>;
	static getMovie( query: string ): Promise<ResponseData | Error>;
	static getMovieDetails( id: string ): Promise<ResponseData | Error>;

	// The following have been deprecated since version v1.2.0
	// Use getAllMovies or getMovie
	static searchMovies( query: string[] ): Promise<(ResponseData | Error)[]>;
	static searchMovie( query: string ): Promise<ResponseData | Error>;
}

export { ResponseData, MovieDetails, MovieData };