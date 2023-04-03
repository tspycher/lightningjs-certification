import {Lightning, Utils, Router} from '@lightningjs/sdk'
import {Page} from './Page'
import {Api} from "../lib/api";
import {MovieBox} from "../components/MovieBox";

export class Home extends Page {

    static _template() {
        return {
            PrimaryBackground: {
                rect: true,
                w: 1920,
                h: 1080,
                color: 0xff000000,
            },
            Background: {
                w: 1920,
                h: 1080,
                //alpha: 0.5,
                shader: {
                    type: Lightning.shaders.Vignette, magnitude: 3, intensity: 0.3, color: 0xff000000
                },
            },
            MoviesRow: {
                w: 1920,
                h: 400,
                x: 1100,
                y: 740,
                color: 0x44000000,
                mount: 0.5,
                flex: {
                    direction: "row",
                    justifyContent: "space-around",
                    alignContent: "center",
                    wrap: true
                },
            },
            Searchbox: {
                x: 960,
                y: -50,
                Background: {
                    rect: true,
                    mount: 0.5,
                    x: 0,
                    y: 0,
                    w: 800,
                    h: 100,
                    color: 0xaaffffff,
                    shader: {type: Lightning.shaders.RoundedRectangle, radius: 50}
                },
                SearchString: {
                    mount: 0.5,
                    x: 0,
                    y: 10,
                    text: {
                        text: "",
                        fontFace: 'Regular',
                        fontSize: 64,
                        textColor: 0xff000000,
                    },
                },
            },
            MovieTitle: {
                x: 960,
                y: 900,
                mount: 0.5,
                text: {
                    text: "None",
                    fontFace: 'Regular',
                    fontSize: 64,
                    textColor: 0xff999999,
                },
            },
        }
    }

    _handleKey(e) {
        this.showSearchBox();
        if (e.code == "Backspace") {
            this.searchstring = this.searchstring.slice(0, -1);
            if (!this.searchstring) {
                this.hideSearchBox();
                Router.reload();
            }
        } else if (e.code.startsWith("Key") || e.code.startsWith("Space") || e.code.startsWith("Digit")) {
            this.searchstring += e.key;
        }

        this.tag("SearchString").patch({
            text: {
                text: this.searchstring
            }
        });

        if (this.searchstring.length >= 3) {
            if (this.searchDelayTimer) {
                clearTimeout(this.searchDelayTimer);
            }
            this.searchDelayTimer = setTimeout(() => {
                this.searchMovies();
            }, 750);
        }
    }

    async searchMovies() {
        console.log("Search for ", this.searchstring);
        var api = new Api();
        var data = await api.searchMovie(this.searchstring);
        this.updateBoxes(data);
    }

    _init() {
        this.index = 0;
        this.searchstring = "";
    }

    set content(data) {
        if (data) {
            this.updateBoxes(data);
        }
    }

    updateBoxes(data) {
        let boxes = [];

        for (var movie of data.results.slice(0, 5)) {
            console.log(movie);
            boxes.push({
                type: MovieBox,
                boxPoster: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
                boxBackdrop: "https://image.tmdb.org/t/p/original" + movie.backdrop_path,
                boxName: movie.title,
                tmbdId: movie.id,
            });
        }
        this.tag("MoviesRow").patch({
            children: boxes
        })
    }

    _handleRight() {
        if (this.index == this.tag("MoviesRow").children.length - 1) return;
        this.index++;
    }

    _handleLeft() {
        if (this.index == 0) return;
        this.index--;
    }

    _getFocused() {
        var box = this.tag("MoviesRow").children[this.index];
        if (box && box.src) {
            this.patch({
                Background: {
                    src: box.boxBackdrop,
                },
                MovieTitle: {
                    smooth: {
                    text:{
                        text: box.boxName,
                    }}
                }
            });
        }
        return box;
    }

    showSearchBox() {
        this.tag("Searchbox").patch({
            smooth: {
                y: 100
            }
        })
    }

    hideSearchBox() {
        this.tag("Searchbox").patch({
            smooth: {
                y: -50
            }
        })
    }
}
