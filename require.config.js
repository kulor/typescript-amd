require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        jquery: {
            exports: '$'
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        }
    },
    paths: {
        underscore: 'lib/vendor/underscore',
        jquery: 'lib/vendor/jquery',
        backbone: 'lib/vendor/backbone'
    }
});