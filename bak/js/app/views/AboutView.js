define([
    'jquery',
    'backbone',
    'handlebars',
    'app/templates/TemplateLoader'
], function ($, Backbone, Handlebars, TemplateLoader) {

    'use strict';

    var AboutView = Backbone.View.extend({

        el: '#app',

        initialize: function () {
        },

        render: function () {
            var self = this;
            TemplateLoader.loadTemplate('about.hbs', {
                success: function (html) {
                    self.$el.html(html);
                    return this;
                }
            });
        }

    });

    return AboutView;
});

