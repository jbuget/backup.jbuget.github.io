define([
    'jquery',
    'handlebars'
], function ($, Handlebars) {

    'use strict';

    var TemplateLoader = {

        loadTemplate: function (path, context, callback) {
            $.ajax({
                url: 'templates/' + path, //ex. js/templates/mytemplate.handlebars
                cache: true,
                success: function(data) {
                    var source    = data;
                    var template  = Handlebars.compile(source);
                    var html = template(context);
                    if (callback) {
                        callback(html);
                    }
                }
            });
        }
    };

    return TemplateLoader;
});

