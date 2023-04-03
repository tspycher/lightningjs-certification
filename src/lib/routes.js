import {Home} from '../pages/Home'
import {Boot} from '../pages/Boot'
import {Detail} from '../pages/Detail'
import {Api} from "./api";

const loadMovies = async () => {
    try {
        var api = new Api();
        var data = await api.getMovies();
        return data;
    } catch (e) {
        console.log(e)
    }
}

const loadMovieDetail = async (tmdbId) => {
    try {
        var api = new Api();
        return await api.getMovieDetails(tmdbId);
    } catch (e) {
        console.log(e)
    }
}

export default {
    root: "home", //"home/ben",
    routes: [
        /*{
            path: '$',
            component: BootPage
        },
        {
            path: '*',
            component: NotFoundPage
        },
        {
            path: '!',
            component: ErrorPage
        },*/
        {path: '$', component: Boot},
        {
            path: "home",
            component: Home,
            before: async (page) => {
                if (page.searchstring) {
                    page.content = await page.searchMovies();
                } else {
                    page.content = await loadMovies();
                }
            },
        },
        {
            path: "detail/:tmdbId", component: Detail,
            before: async (page) => {
                page.details = await loadMovieDetail(page.tmdbId);
            },
        },
    ],

}

// $ - boot page
// * - catch all page
// ! - error page