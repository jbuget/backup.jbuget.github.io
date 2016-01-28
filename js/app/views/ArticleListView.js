define([
    'jquery',
    'backbone',
    'handlebars',
    'app/templates/ArticleListTemplate'
], function ($, Backbone, Handlebars) {

    'use strict';

    var ArticleListView = Backbone.View.extend({

        el: '#article-list',

        template: Handlebars.compile($("#article-list-template").html()),

        articles: [],

        initialize: function () {
            var self = this;
            Prismic.Api('https://jbuget.cdn.prismic.io/api', function (err, Api) {
                Api.form('everything')
                    .ref(Api.master())
                    .query(Prismic.Predicates.at("document.type", "article")).submit(function (err, response) {
                        self.articles = response.results;
                        self.render();
                    });
            });
        },

        render: function () {
            var context = { articles: this.articles };
            var html = this.template(context);
            this.$el.html(html);
            return this;
        }

    });

    return ArticleListView;

});