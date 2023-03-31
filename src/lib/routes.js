import { Home } from '../pages/Home'
import { Boot } from '../pages/Boot'
import { Detail } from '../pages/Detail'

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
        { path: "home", component: Home },
        { path: "detail", component: Detail },
    ],

}



// $ - boot page
// * - catch all page
// ! - error page