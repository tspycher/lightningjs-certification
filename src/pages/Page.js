import {Lightning, Utils, Router} from '@lightningjs/sdk'
import Routes from "../lib/routes";

export class Page extends Lightning.Component {

    static _template() {
        return {
            Background: {
                rect: true,
                w: 1920,
                h: 1080,
                color: 0xff1e012c,
            },
        }
    }

    pageTransition(pageIn, pageOut) {
        return 'fade';
    }

    _init() {
    }
}
