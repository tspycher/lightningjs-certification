import {Settings} from '@lightningjs/sdk'


export class Api {

    async searchMovie(query) {
        const headers = [
            ['Content-Type', 'application/json'],
        ];
        const data = await fetch("https://api.themoviedb.org/3/search/movie?" + new URLSearchParams({
            api_key: Settings.get("app", "tmdb_api_key"),
            language: "en-US",
            query: query,
            include_adult: "false"
        }), {headers});

        return data.json();
    }

    async getMovies() {
        const headers = [
            ['Content-Type', 'application/json'],
        ];
        const data = await fetch("https://api.themoviedb.org/3/trending/movie/week?" + new URLSearchParams({
            api_key: Settings.get("app", "tmdb_api_key"),
        }), {headers});

        return data.json();
    }

    async getMovieDetails(tmdbId) {
        const headers = [
            ['Content-Type', 'application/json'],
        ];
        const data = await fetch("https://api.themoviedb.org/3/movie/" + tmdbId + "?" + new URLSearchParams({
            api_key: Settings.get("app", "tmdb_api_key"),
            language: "en-US"
        }), {headers});

        return data.json();
    }
}