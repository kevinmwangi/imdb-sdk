/** ----------------------------------------------------------------
*	TYPE DEFINITIONS FOR THE MOVIE OBJECT
 *	-------------------------------------
 *	https://app.quicktype.io/
*  ----------------------------------------------------------------*/
export interface Movie {
    poster: string;
    imdbId: string;
    name: string;
    releaseYear: number;
    genre: string[];
    playbackURLs: {
        url: string;
        mimeType: string;
        videoDefinition: string;
    };
    previewURLs: {
        url: string;
        mimeType: string;
        videoDefinition: string;
    };
}
