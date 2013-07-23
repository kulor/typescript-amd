import Greeter = module('lib/greeter');
var greeter = new Greeter.Greeter;
export var app = {
    start: function() {
        greeter.greet('James');
        greeter.render();
    }
}