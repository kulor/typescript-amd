/// <amd-dependency path="backbone" />
/// <reference path="../d.ts/jquery.d.ts" />
/// <reference path="../d.ts/backbone.d.ts" />
/// <reference path="../d.ts/require.d.ts" />
'use strict';
var Backbone = require('backbone');
var $ = require('jquery');

export class Greeter extends Backbone.View {
    // Private message only accesable to each view instance
    greetMessage: string;

    constructor () {
        // Attach your prototype members here to be avaialable
        // before calling super() which will wipe your settings
        this.el = $('#app');
        this.events = {
            'click': 'clickHandler'
        }

        // Ensure super is called last or your View won't work properly
        super ();
    }
    
    clickHandler (e) {
        console.log('element clicked', e);
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
