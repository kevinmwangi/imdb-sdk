import { MovieData } from "./movie";

export interface ResponseData {
	ok: boolean;
	description: MovieData[];
	error_code: number;
}