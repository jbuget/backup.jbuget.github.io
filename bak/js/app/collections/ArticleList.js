define([
    'jquery',
    'backbone',
    'app/models/Article'
], function ($, Backbone, Article) {

    'use strict';

    var ArticleList = Backbone.Collection.extend ({

        model: Article,

        fetch: function (options) {
            var self = this;
            Prismic.Api('https://jbuget.cdn.prismic.io/api', function (err, Api) {
                Api.form('everything')
                    .ref(Api.master())
                    .query(Prismic.Predicates.at("document.type", "article"))
                    .submit(function (err, response) {
                        if (err && options && options.error) {
                            options.error(self.models, response, options)
                        }
                        if (response.results) {
                            response.results.forEach(function (element) {
                                self.add(new Article(element));
                            });
                            if (options && options.success) {
                                options.success(self.models, response, options);
                            }
                        }
                    });
            });
        }
    });

    return ArticleList;
});