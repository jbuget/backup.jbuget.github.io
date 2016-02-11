define([
    'backbone',
    'app/Router'
], function (Backbone, Router) {

    'use strict';

    new Router();
    Backbone.history.start();
});