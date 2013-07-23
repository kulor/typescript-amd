/// <amd-dependency path="backbone" />
/// <reference path="../d.ts/jquery.d.ts" />
/// <reference path="../d.ts/backbone.d.ts" />
/// <reference path="../d.ts/require.d.ts" />
var Backbone = require('backbone');
var $ = require('jquery');

export class Greeter extends Backbone.View {
    el: HTMLElement;
    greetMessage: string;

    constructor () {
        this.el = $('#app');
        super ();
    }
    greet (name: string) {
        this.greetMessage = "Hello, " + name;
        return this.greetMessage;
    }

    render () {
        this.$el.html(this.greetMessage);
        return this;
    }
}
