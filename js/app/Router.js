define([
    'backbone'
], function (Backbone) {

    'use strict';

    var Router = Backbone.Router.extend({

        routes: {
            "/": "index",    // #help
            "articles": "index",  // #search/kiwis
            "articles/:uid": "article",   // #search/kiwis/p7
            "search/:query": "search",  // #search/kiwis
            "search/:query/p:page": "search",   // #search/kiwis/p7
            "about": "about"
        },

        index: function () {

        },

        article: function (uid) {

        },

        search: function (query, page) {

        },

        about: function () {

        },

        contact: function () {

        }

    });

    return Router;

});