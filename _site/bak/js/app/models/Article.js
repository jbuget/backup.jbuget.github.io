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
            return this.document.uid;
        },

        getTitle: function () {
            return this.document.getText('article.title');
        },

        getExcerpt: function () {
            var excerpt = this.document.getStructuredText('article.excerpt');
            return excerpt ? excerpt.asHtml({}) : this.getContent();
        },

        getContent: function() {
            var content = this.document.getStructuredText('article.content');
            return content ? content.asHtml({}) : "<p>[The article is empty]</p>";
        }

 });

    return Article;
});