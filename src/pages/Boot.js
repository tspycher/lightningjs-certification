import { Lightning, Utils, Router } from '@lightningjs/sdk'

export class Boot extends Lightning.Component {

    static _template() {
        return {
            Background: {
                rect: true,
                w: 1920,
                h: 1080,
                color: 0xff1e012c,
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
        console.log("doing some stuff here");

        setTimeout(function() {
            Router.root();
            //Router.navigate("home/ben", {blafasel:"kevin"});
        }, 1000);


    }
}
