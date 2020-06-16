var toml = require("yamljs");
var S = require("string");

var CONTENT_PATH_PREFIX = "content";

module.exports = function(grunt) {

    grunt.registerTask("lunr-index", function() {

        grunt.log.writeln("Build pages index");

        var indexPages = function() {
            var pagesIndex = [];
            grunt.file.recurse(CONTENT_PATH_PREFIX, function(abspath, rootdir, subdir, filename) {
                grunt.verbose.writeln("Parse file:",abspath);
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
                href: href,
                content: S(content).trim().stripTags().stripPunctuation().s
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
                pageIndex = {
                    title: frontMatter.title,
                    tags: frontMatter.tags,
                    href: href,
                    content: S(content[2]).trim().stripTags().stripPunctuation().s
                };
            }
            

            return pageIndex;
        };

        grunt.file.write("content/PagesIndex.json", JSON.stringify(indexPages()));
        grunt.log.ok("Index built");
    });
};