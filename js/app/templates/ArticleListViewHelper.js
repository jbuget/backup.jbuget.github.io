define([
    'handlebars'
], function (Handlebars) {

    'use strict';

    Handlebars.registerHelper('articleTitle', function () {
        var html = this.getText('article.title');
        return new Handlebars.SafeString(html);
    });

    Handlebars.registerHelper('articleContent', function () {
        var html = this.getStructuredText('article.content').asHtml({});
        return new Handlebars.SafeString(html);
    });

});