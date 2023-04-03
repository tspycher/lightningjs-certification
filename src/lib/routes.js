import { Home } from '../pages/Home'
import { Boot } from '../pages/Boot'
import { Detail } from '../pages/Detail'
import {Api} from "./api";
import {MovieBox} from "../components/MovieBox";

const loadMovies = async ()=>{
    try {
        var api = new Api();
        var data = await api.getMovies();
        let boxes = [];

        for (var movie of data.results.slice(0,20)) {
            console.log(movie);

            boxes.push({
                    type: MovieBox,
                    boxPoster: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
                    boxName: movie.title,
                    tmbdId: movie.id,
            });
        }
        return boxes;

    } catch (e){
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
        { path: '$',component: Boot },
        {
            path: "home",
            component: Home,
            before: async(page)=> {
                page.content = await loadMovies();

            },
        },
        { path: "detail", component: Detail },
    ],

}



// $ - boot page
// * - catch all page
// ! - error page