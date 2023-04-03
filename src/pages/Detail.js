import {Lightning, Utils, Router} from '@lightningjs/sdk'
import {Page} from './Page'

export class Detail extends Page {

    static _template() {
        return {
            PrimaryBackground: {
                rect: true,
                w: 1920,
                h: 1080,
                color: 0xff000000,
            },
            Background: {
                rect: true,
                w: 1920,
                h: 1080,
                shader: {
                    type: Lightning.shaders.Vignette, magnitude: 3, intensity: 0.3, color: 0xff000000
                },
            },
            Titel: {
                mount: 0,
                x: 860,
                y: 100,
                text: {
                    text: "Detail",
                    fontFace: 'Regular',
                    fontSize: 64,
                    textColor: 0xfffafafa,
                },
            },
            ReleaseDate: {
                mount: 0,
                x: 860,
                y: 700,
                text: {
                    text: "ReleaseDate",
                    fontFace: 'Regular',
                    fontSize: 35,
                    textColor: 0xfffafafa,
                },
            },
            Poster: {
                mount: 0.5,
                x: 400,
                y: 500,
                h: 800
            },
            Plot: {
                mount: 0,
                x: 860,
                y: 300,
                w: 900,
                h: 400,
                text: {
                    text: "Plot",
                    fontFace: 'Regular',
                    fontSize: 35,
                    textColor: 0xfffafafa,
                },
            },
        }
    }

    _handleBack() {
        this._handleLeft();
    }

    _handleLeft() {
        Router.navigate("home");
    }
    set details(v) {
        if (v) {
            this.tag("Titel").patch({
                text: {
                    text: v.original_title
                }
            });
            this.tag("Plot").patch({
                text: {
                    text: v.overview
                }
            });
            this.tag("ReleaseDate").patch({
                text: {
                    text: "Date: " + v.release_date
                }
            });
            this.tag("Poster").patch({
                src:"https://image.tmdb.org/t/p/w500" + v.poster_path,
            });
            this.tag("Background").patch({
                src: "https://image.tmdb.org/t/p/original" + v.backdrop_path,
            })
        }
    }

    set params(data) {
        this.tmdbId = data.tmdbId
    }
}
