import {Lightning, Router, Utils} from "@lightningjs/sdk";
import { Icon } from "./Icon";

export class Menu extends Lightning.Component {
    static _template() {
        return {
            y: 595,
            x: 960,
            Menu: {
                rect: true,
                w: 800,
                h: 80,
                y: 500,
                //x: 960,
                //y: 1080,
                mountX: 0.5,
                color: 0x99000000,
                flex: {
                    direction: 'row',
                    justifyContent: 'space-evenly'
                },
                Video: {
                    type: Icon,
                    page: 'video',
                    iconName: 'video',
                    //src: Utils.asset('icons/video-w.png')
                },
                Home: {
                    type: Icon,
                    page: 'home/ben',
                    iconName: 'home',
                    //src: Utils.asset('icons/home-w.png')
                },
                Profile: {
                    type: Icon,
                    page: 'profile',
                    iconName: 'user',
                    //src: Utils.asset('icons/user-w.png')
                },
            },
            Arrow: {
                x: 0,
                y: 450,
                mount: 0.5,
                src: Utils.asset('icons/up-arrow.png')
            }

        }
    }

    _init() {
        this.index = 0;
    }




    _handleRight() {
        if(this.index == this.tag("Menu").children.length-1) return;
        this.index++;
    }

    _handleLeft() {
        if(this.index == 0) return;
        this.index--;
    }

    getCurrentIcon() {
        return this.tag("Menu").children[this.index];
    }

    _getFocused() {
        return this.getCurrentIcon();
    }

    _focus(newFocusedComponent, prevFocusedComponent) {
        super._focus(newFocusedComponent, prevFocusedComponent);
        this.patch({
            smooth: {
                y: 495
            },
            Arrow: {
                rotation: Math.PI,
            }
        })
    }

    _unfocus(newFocusedComponent, prevFocusedComponent) {
        super._unfocus(newFocusedComponent, prevFocusedComponent);
        this.patch({
            smooth: {
                y: 595
            },
            Arrow: {
                rotation: 0,
            }
        })
    }

    _construct() {
        console.log("MENU HERE");
    }
}