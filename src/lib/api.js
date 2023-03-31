import { Settings } from '@lightningjs/sdk'


export class Api {


    async getMovies() {
        // https://api.themoviedb.org/3/trending/movie/week?api_key=*****
        const headers = [
            ['Content-Type', 'application/json'],
        ];
        const data = await fetch("https://api.themoviedb.org/3/trending/movie/week?"+ new URLSearchParams({
            api_key: Settings.get("app", "tmdb_api_key"),
        }), { headers });

        return data.json();
    }

    async getMovieDetails(movieid) {
        // https://api.themoviedb.org/3/movie/603692?api_key=*****&language=en-US
        const headers = [
            ['Content-Type', 'application/json'],
        ];
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieid+"?"+ new URLSearchParams({
            api_key: Settings.get("app", "tmdb_api_key"),
            language: "en-US"
        }), { headers });

        return data.json();
    }
}