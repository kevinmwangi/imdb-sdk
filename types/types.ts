import { ResponseData } from "./response";
import { Movie } from "./details";
import { MovieData } from "./movie";
import * as MovieDetails from "./movieDetails";

export declare class IMDB {
	static getAllMovies( query: string[] ): Promise<{results: MovieData[], errors: Error[]}>;
	static getMovie( query: string ): Promise<MovieData | Error>;
	static getMovieDetails( id: string ): Promise<Movie | Error>;

	// The following have been deprecated since version v1.2.0
	// Use getAllMovies or getMovie
	static searchMovies( query: string[] ): Promise<(ResponseData | Error)[]>;
	static searchMovie( query: string ): Promise<ResponseData | Error>;
}

export { ResponseData, Movie, MovieData, MovieDetails };