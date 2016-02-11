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

            Handlebars.registerHelper('articleExcerpt', function () {
                var html = this.getExcerpt();
                return new Handlebars.SafeString(html);
            });
        },

        render: function () {
            var self = this;
            self.collection.fetch({
                success: function () {
                    TemplateLoader.loadTemplate('article-list.hbs', {
                        context: {
                            articles: self.collection.models
                        },
                        success: function (html) {
                            self.$el.html(html);
                            return self;
                        }
                    });
                }
            });
        },

        _removeElement: function() {
            this.$el.empty();
        }

    });

    return ArticleListView;

});