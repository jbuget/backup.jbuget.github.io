requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
        "app": "../app",
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min",
        "bootstrap": "//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min",
        "underscore": "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min",
        "backbone": "//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min",
        "handlebars": "//cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.amd.min",
        "prismic": "prismic/prismic.io.min"
    },
    "shim": {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'Bootstrap'
        }
    }
});

// Load the main app module to start the app
requirejs(['jquery', 'bootstrap', 'underscore', 'backbone', 'handlebars', 'prismic'], function () {
    requirejs(["app/Main"]);
});