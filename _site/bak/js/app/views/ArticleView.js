define([
    'jquery',
    'backbone',
    'handlebars',
    'app/templates/TemplateLoader',
    'app/models/Article'
], function ($, Backbone, Handlebars, TemplateLoader, Article) {

    'use strict';

    var ArticleView = Backbone.View.extend({

        el: '#app',

        uid: null,

        initialize: function (uid) {
            var self = this;
            self.registerFormatters();
            self.uid = uid;
        },

        registerFormatters: function () {
            var self = this;
            Handlebars.registerHelper('_articleUid', function () {
                var html = self.model.getUid();
                return new Handlebars.SafeString(html);
            });

            Handlebars.registerHelper('_articleTitle', function () {
                var html = self.model.getTitle();
                return new Handlebars.SafeString(html);
            });

            Handlebars.registerHelper('_articleExcerpt', function () {
                var html = self.model.getExcerpt();
                return new Handlebars.SafeString(html);
            });

            Handlebars.registerHelper('_articleContent', function () {
                var html = self.model.getContent();
                return new Handlebars.SafeString(html);
            });
        },

        render: function () {
            var self = this;
            Prismic.Api('https://jbuget.cdn.prismic.io/api', function (err, Api) {
                Api.form('everything')
                    .ref(Api.master())
                    .query(Prismic.Predicates.at("my.article.uid", self.uid)).submit(function (err, response) {
                        //self.models = response.results;
                        if (err && options && options.error) {
                            options.error(self, response, options)
                        }
                        if (response) {
                            var document = response.results[0];
                            self.model = new Article(document);
                            TemplateLoader.loadTemplate('article.hbs', {
                                context: {
                                },
                                success: function (html) {
                                    self.$el.html(html);
                                    return self;
                                }
                            });
                        }
                    });
            });
        },

        _removeElement: function () {
            this.$el.empty();
        }


    });

    return ArticleView;
});