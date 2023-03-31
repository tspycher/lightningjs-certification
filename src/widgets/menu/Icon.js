import {Lightning, Utils, Router} from "@lightningjs/sdk";

export class Icon extends Lightning.Component {
    static _template() {
        return {
            w: 50,
            h: 50,
            y: 10,
        };
    }

    _init() {
        this.patch({
            src: Utils.asset('icons/' + this.iconName + '-w.png')
        })
    }

    _focus(newFocusedComponent, prevFocusedComponent) {
        this.patch({
            src: Utils.asset('icons/' + this.iconName + '-o.png')
        })
    }

    _unfocus(newFocusedComponent, prevFocusedComponent) {
        this.patch({
            src: Utils.asset('icons/' + this.iconName + '-w.png')
        })
    }

    _handleEnter() {
        Router.focusPage();
        Router.navigate(this.page);
    }
}