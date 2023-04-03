import { Lightning, Utils, Router } from '@lightningjs/sdk'

export class Boot extends Lightning.Component {

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
                alpha: 0.1,
                // blocked by cors
                //src: "https://assets.production.n8r.net/posterwall/poster_3440x1440.png"
                src: Utils.asset('images/poster_3440x1440.png'),
            },
            Logo: {
                mountX: 0.5,
                mountY: 0.5,
                x: 960,
                y: 540,
                w: 200,
                h: 146,
                src: Utils.asset('images/logo.png'),
            },
            Text: {
                mount: 0.5,
                x: 960,
                y: 720,
                text: {
                    text: "Tom's Certification App",
                    fontFace: 'Regular',
                    fontSize: 64,
                    textColor: 0xfffafafa,
                },
            }
        }
    }

    _init() {
        setTimeout(function() {
            Router.root();
        }, 2000);
    }
}
