define([
    'jquery',
    'handlebars'
], function ($, Handlebars) {

    'use strict';

    var TemplateLoader = {

        loadTemplate: function (path, options) {
            $.ajax({
                url: 'templates/' + path, //ex. js/templates/mytemplate.handlebars
                cache: true,
                success: function(data) {
                    var source    = data;
                    var template  = Handlebars.compile(source);
                    var html = template(options.context);
                    if (options.success) {
                        options.success(html);
                    }
                }
            });
        }
    };

    return TemplateLoader;
});

