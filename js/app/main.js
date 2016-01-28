define(['jquery', 'handlebars'], function ($, Handlebars) {

    'use strict';

    Handlebars.registerHelper('title', function () {
        var html = this.getText('article.title');
        return new Handlebars.SafeString(html);
    });

    Handlebars.registerHelper('content', function () {
        var html = this.getStructuredText('article.content').asHtml({});
        return new Handlebars.SafeString(html);
    });

    function render(articles) {
        var source = $("#articles-template").html();
        var template = Handlebars.compile(source);
        var context = {articles: articles};
        var html = template(context);
        $("#articles").html(html);
    }

    Prismic.Api('https://jbuget.cdn.prismic.io/api', function (err, Api) {
        // You can use the Api object inside this block
        console.log("References: ", Api.data.refs);

        Api.form('everything')
            .ref(Api.master())
            .query(Prismic.Predicates.at("document.type", "article")).submit(function (err, response) {
                var articles = response.results;
                render(articles);
            });
    });
});