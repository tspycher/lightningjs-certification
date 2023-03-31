import { Lightning } from "@lightningjs/sdk";

export class MovieBox extends Lightning.Component {
    static _template() {
        return {
            rect: true,
            w: 250,
            h: 400,
            color: 0xfffa00f0,
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

}