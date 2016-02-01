define([
    'jquery',
    'backbone'
], function ($, Backbone) {

    'use strict';

    var Article = Backbone.Model.extend({

        document: {},

        initialize: function (document) {
            this.document = document;
        },

        getUid: function () {
            return this.document.getText('article.uid');
        },

        getTitle: function () {
            return this.document.getText('article.title');
        },

        getContent: function() {
            return this.document.getStructuredText('article.content').asHtml({});
        },

        fetch: function (options) {
            var self = this;
            Prismic.Api('https://jbuget.cdn.prismic.io/api', function (err, Api) {
                Api.form('everything')
                    .ref(Api.master())
                    .query(Prismic.Predicates.at("my.article.uid", options.uid)).submit(function (err, response) {
                        //self.models = response.results;
                        if (err && options && options.error) {
                            options.error(self, response, options)
                        }
                        if (response) {
                            self.document = response;
                            if (options && options.success) {
                                options.success(self, response, options);
                            }
                        }
                    });
            });

        }
    });

    return Article;
});