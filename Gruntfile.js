var toml = require("yamljs");
var S = require("string");

var CONTENT_PATH_PREFIX = "content";

module.exports = function(grunt) {

    grunt.registerTask("lunr-index", function() {

       

        var indexPages = function() {
            var pagesIndex = [];
            
            grunt.file.recurse(CONTENT_PATH_PREFIX, function(abspath, rootdir, subdir, filename) {
               
                var contentSearch = processFile(abspath, filename);
                if(contentSearch) {
                    pagesIndex.push(contentSearch);
                }
                
            });

            return pagesIndex;
        };

        

        var processFile = function(abspath, filename) {
            var pageIndex;

            if (S(filename).endsWith(".html")) {
                pageIndex = processHTMLFile(abspath, filename);
            } 
            if (S(filename).endsWith(".md")) {
                pageIndex = processMDFile(abspath, filename);
            }

            return pageIndex;
        };

        var processHTMLFile = function(abspath, filename) {
            var content = grunt.file.read(abspath);
            var pageName = S(filename).chompRight(".html").s;
            var href = S(abspath)
                .chompLeft(CONTENT_PATH_PREFIX).s;
            return {
                title: pageName,
                keywords: frontMatter.keywords,
                description: frontMatter.description,
                href: href,
                content: S(content).trim().stripTags().collapseWhitespace().s
            };
        };

        var processMDFile = function(abspath, filename) {
            var content = grunt.file.read(abspath);
            var pageIndex;
            // First separate the Front Matter from the content and parse it
            content = content.split("---");
            var frontMatter="";
            try {
                //grunt.log.writeln(content);
                if(content[1])
                frontMatter = toml.parse(content[1].trim());
            } catch (e) {
                grunt.log.writeln(abspath);
                grunt.log.writeln(e.message);
            }

            var href = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(".md").s;
            // href for index.md files stops at the folder name
            if (filename === "index.md" || filename === "_index.md") {
                href = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(filename).s;
            }

            if (frontMatter.title) {
                // Build Lunr index for this page
                var showdown  = require('showdown'),
                converter = new showdown.Converter(),
               
                pageIndex = {
                    title: S(converter.makeHtml(frontMatter.title)).stripTags("em", "p").s,
                    keywords: frontMatter.keywords,
                    description: frontMatter.description ? S(converter.makeHtml(frontMatter.description)).stripTags("em", "p").s : "",
                    href: href,
                    content: (S(converter.makeHtml(content[2])).collapseWhitespace().s).replace(/(<([^>]+)>)/ig,"")
                };
            }
            

            return pageIndex;
        };

        grunt.file.write("PagesIndex.json", JSON.stringify(indexPages()));
        grunt.log.ok("Index built");
    });
};