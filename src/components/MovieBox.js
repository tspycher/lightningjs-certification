import { Lightning } from "@lightningjs/sdk";

const poster_w = 150,
      poster_h = 200;
export class MovieBox extends Lightning.Component {

    static _template() {
        return {
            //rect: true,
            w: poster_w,
            h: poster_h,
            mount: 0.5,
            src: this.bindProp("boxPoster"),

            //flexItem:{ margin: 10 },
            /*Label: {
                text: {
                    text: this.bindProp("boxName"),
                    fontFace: 'Regular',
                    fontSize: 18,
                    textColor: 0xffffffff,
                }
            },*/
        }
    }

    _handleEnter() {
        console.log(this.tmbdId);
    }
    _focus(newFocusedComponent, prevFocusedComponent) {
        super._focus(newFocusedComponent, prevFocusedComponent);
        this.patch({
            w: poster_w*1.2,
            h: poster_h*1.2,
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