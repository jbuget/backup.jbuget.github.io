define([
    'jquery',
    'backbone',
    'handlebars',
    'app/templates/TemplateLoader',
    'app/collections/ArticleList'
], function ($, Backbone, Handlebars, TemplateLoader, ArticleList) {

    'use strict';

    var ArticleListView = Backbone.View.extend({

        el: '#app',

        collection: new ArticleList(),

        initialize: function () {
            var self = this;
            self.registerFormatters();
            self.collection.fetch({
                success: function () { self.render(); }
            });
        },

        registerFormatters: function () {
            Handlebars.registerHelper('articleTitle', function () {
                var html = this.getTitle();
                return new Handlebars.SafeString(html);
            });

            Handlebars.registerHelper('articleContent', function () {
                var html = this.getContent();
                return new Handlebars.SafeString(html);
            });
        },

        render: function () {
            var self = this;
            var context = { articles: this.collection.models };
            TemplateLoader.loadTemplate('article-list.hbs', context, function (html) {
                self.$el.html(html);
                return this;
            });
        }
    });

    return ArticleListView;

});