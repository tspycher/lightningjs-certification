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
            //...super._template(),
            Background: {
                rect: true,
                w: 1920,
                h: 1080,
            },
            MoviesRow: {
                //rect: true,
                w: 1920,
                h: 1080,
                x: 960,
                y: 540,
                color: 0x44000000,
                mount: 0.5,
                flex: {
                    direction: "row",
                    padding: 5,
                    justifyContent: "space-evenly",
                    alignContent: "center",
                    //flexFlow: ["column", "wrap"],
                    wrap: true
                },
            }
        }
    }

    _init() {
        this.index = 0;
    }

    set content(v) {
        console.log(v);
        if (v) {
            this.tag("MoviesRow").patch({
                children: v
            })
            //this.tag("MoviesRow").childList.add(v);
        }
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
        var box = this.tag("MoviesRow").children[this.index];
        this.patch({
            Background: {
                src: box.src,
            }
        });
        return box;
    }

}
