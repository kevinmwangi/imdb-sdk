import { ResponseData } from "./response";
import * as MovieDetails from "./details";
import { MovieData } from "./movie";

export declare class IMDB {
	static getAllMovies( query: string ): Promise<ResponseData | undefined>;
	static getMovie( query: string ): Promise<ResponseData | undefined>;
	static getMovieDetails( id: string ): Promise<ResponseData | undefined>;

	// The following have been deprecated since version v1.2.0
	// Use getAllMovies or getMovie
	static searchMovies( query: string ): Promise<ResponseData | undefined>;
	static searchMovie( query: string ): Promise<ResponseData | undefined>;
}

export { ResponseData, MovieDetails, MovieData };