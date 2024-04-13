# imdb-sdk
SDK that fetches movies from search.imdbot.workers.dev endpoints

## Install

```bash
npm install git@github.com:kevinmwangi/imdb-sdk.git
```
## Setup

Clone the repo and install dependencies:

```bash
git clone https://github.com/kevinmwangi/imdb-sdk.git
cd imdb-sdk
npm install
```

## Integration
To search || Get movies from the API:

Example of how you can use with ` @redux/toolkit `
in a NextJS TypeScript project

### How to use `IMDB sdk`
```ts

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IMDB } from "@/imdb-sdk/imdb";

export const getMovieDetails = createAsyncThunk(
	'movies/getMovieDetails',
	async (query: string) => {
		return await IMDB.getMovie( query );
	}
);

export const BillBoardMovieSlice = createSlice({
	name: 'BillBoardMovie',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getMovieDetails.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getMovieDetails.fulfilled, (state, action) => {
				state.movie = movieDetailsObj({ movieObj: action.payload }) //action.payload;
				state.status = 'idle';
			})
			.addCase(getMovieDetails.rejected, (state) => {
				state.status = 'failed';
			});
	}
});

export default BillBoardMovieSlice.reducer;

```

### How to use your reducer `getMovieDetails(tt: string)`
```ts

useEffect(() => { 
	if (imdbMovieID) { 
		dispatch( getMovieDetails( billBoardMovieID.value )) } }, 
    [dispatch, billBoardMovieID]);

```

## Deprecated
The following functions have been depricated since version V1.1.0
````
searchMovies(arg: string) // arg: string 
if you want to use the old function we have renamed them to:

searchMovies_v1_0(arg: string) // arg: string
searchMovies_v1_1(arg: string) // arg: string

````

## Development

`TODO:`
Set up Jest with ts-jest for testing

`TODO:`
Refactor `getRandomMovie()` to handle logic fo randomly get a movie without parameters 


## Production

Run the TypeScript compiler to compile the SDK code into JavaScript that can be used in any JavaScript environment.
```bash
npx tsc
```

`TODO:`
Setup  https://registry.npmjs.org/ to publish in `npm registry` when you run `npm publish`

## Docs

### Search

```
https://search.imdbot.workers.dev/?q=Lucifer
params are a key value pair:
Key = q
value = string (Lucifer)
```

### Get Movie Details By IMDb ID

```
https://search.imdbot.workers.dev/?tt=tt13667402
params are a key value pair the value being the IMDb id of the movie:
Key = tt
value = string (tt13667402)
```
