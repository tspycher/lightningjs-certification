/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Lightning, Utils, Router} from '@lightningjs/sdk'
import {Page} from './Page'
import {Api} from "../lib/api";
import {MovieBox} from "../components/MovieBox";

export class Home extends Page {

    static _template() {
        return {
            ...super._template(),
            MoviesRow: {
                rect: true,
                w: (w) => {return w },
                h: 400,
                x: 0,
                y: 1080 / 2,
                mountX: 0,
                mountY: 0.5,
                color: 0x44000000,

                flex: {
                    direction: 'row',
                    padding: 20,
                    justifyContent: "space-evenly",
                    alignItems: 'center',
                    wrap: 'true'
                },
            }
        }
    }

    _setup() {
        this.index = 0;
    }

    async _init() {
        var api = new Api();
        const data = await api.getMovies();

        let tempMovies = [...this.tag("MoviesRow").children];

        for (var movie of data.results.slice(0,6)) {
            //var starship = data.results[i];
            console.log(movie);

            tempMovies.push({
                ["Movie"+movie.id]: {
                    type: MovieBox,
                    boxPoster: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
                    boxName: movie.title,
                }
            });
        }
        this.tag("MoviesRow").patch({
            children: tempMovies
        })
    }

    set params(data) {
        console.log(data);
    }


    _handleRight() {
        if(this.index == this.tag("MoviesRow").children.length-1) return;
        this.index++;
        console.log(this.index);

    }

    _handleLeft() {
        if(this.index == 0) return;
        this.index--;
        console.log(this.index);
    }

    _getFocused() {
        if (this.tag("MoviesRow").children.length && this.index >= 0) {
            //return this.tag("MoviesRow").children[this.index];
        }
        return super._getFocused();
    }

}
