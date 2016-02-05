define([
    'backbone',
    'app/views/ArticleListView',
    'app/views/AboutView'
], function (Backbone, ArticleListView, AboutView) {

    'use strict';

    var Router = Backbone.Router.extend({

        view: null,

        routes: {
            "articles": "index",  // #search/kiwis
            "articles/:uid": "article",   // #search/kiwis/p7
            "search/:query": "search",  // #search/kiwis
            "search/:query/p:page": "search",   // #search/kiwis/p7
            "about": "about",
            "*path": "index"
        },

        index: function () {
            var view = new ArticleListView();
            this.loadView(view);
        },

        article: function (uid) {

        },

        search: function (query, page) {

        },

        about: function () {
            var view = new AboutView();
            this.loadView(view);
        },

        loadView: function (view) {
            if (this.view) {
                this.view.remove();
                this.view = null;
            }
            this.view = view;
            this.view.render();
        }

    });

    return Router;

});