import {Lightning, Router} from "@lightningjs/sdk";

const poster_w = 250,
    poster_h = 400;

export class MovieBox extends Lightning.Component {

    static _template() {
        return {
            w: poster_w,
            h: poster_h,
            mount: 0.5,
            src: this.bindProp("boxPoster"),
        }
    }

    _handleEnter() {
        console.log(this.tmbdId);
        Router.navigate("detail/" + this.tmbdId);
    }

    _focus(newFocusedComponent, prevFocusedComponent) {
        super._focus(newFocusedComponent, prevFocusedComponent);
        this.patch({
            w: poster_w * 1.3,
            h: poster_h * 1.3,
            shader: {type: Lightning.shaders.Outline, stroke: 5}
        })
    }

    _unfocus(newFocusedComponent, prevFocusedComponent) {
        super._unfocus(newFocusedComponent, prevFocusedComponent);
        this.patch({
            w: poster_w,
            h: poster_h,
            shader: null,
        })
    }

}