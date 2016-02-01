define([
    'jquery',
    'backbone',
    'handlebars',
    'app/templates/TemplateLoader',
    'app/collections/ArticleList'
], function ($, Backbone, Handlebars, TemplateLoader, ArticleList) {

    'use strict';

    var ArticleView = Backbone.View.extend({

        el: '#app',

        initialize: function (uid) {
            var self = this;
            self.registerFormatters();
            self.model = new Article();
            self.collection.fetch({
                uid: uid,
                success: function () { self.render(); }
            });
        },

        registerFormatters: function () {
            Handlebars.registerHelper('articleUid', function () {
                var html = this.getUid();
                return new Handlebars.SafeString(html);
            });

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
            var context = { article: this.model };
            TemplateLoader.loadTemplate('article.hbs', context, function (html) {
                self.$el.html(html);
                return this;
            });
        }


    });

    return ArticleView;
});