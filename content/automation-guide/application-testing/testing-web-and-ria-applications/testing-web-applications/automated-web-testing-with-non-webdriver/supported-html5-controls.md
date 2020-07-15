--- 
title: "List of supported HTML5 controls"
linktitle: "Supported HTML5 controls"
description: "A list of the HTML5 controls (tags) that TestArchitect supports for test automation."
weight: 7
aliases: 
    - /TA_Automation/Topics/HTML5_automation_new_tags.html
keywords: "HTML5, tags, controls, web testing, supported HTML5 controls"
---

A list of the HTML5 controls \(tags\) that TestArchitect supports for test automation.

## Semantic/Structural elements

|Controls|Description|
|--------|-----------|
|<article\>|Defines an article.|
|<aside\>|Defines content aside from the page content.|
|<bdi\>|Isolates a part of text that might be formatted in a different direction from other text outside of it.|
|<command\>|Defines a command button that a user can invoke.|
|<details\>|Specifies additional details that the user can view or hide on demand.|
|<figcaption\>|Defines a caption for a <figure\> element.|
|<figure\>|Specifies self-contained content.|
|footer\>|Defines a footer for a document or section.|
|<header\>|Defines a header for a document or section.|
|<hgroup\>|Group heading \(<h1\> to <h6\>\) elements.|
|<mark\>|Defines marked/highlighted text.|
|<meter\>|Defines a scalar measurement within a known range, or a fractional value.|
|<nav\>|Defines navigation links.|
|<output\>|Represents the result of a calculation.|
|<progress\>|Represents the progress of a task.|
|<rp\>|Defines what to show in browsers that do not support ruby annotations \(for East Asian typography\).|
|<rt\>|Defines an explanation/pronunciation of characters \(for East Asian typography\).|
|<ruby\>|Defines a ruby annotation \(for East Asian typography\).|
|<section\>|Defines a section in a document.|
|<summary\>|Defines a visible heading for the <details\> element. The heading can be clicked to view/hide the details.|
|<time\>|Defines a date/time.|

## Media elements

Controls that allow your test to determine such things as the state of an audio or video player \(playing/paused/stopped\), and current loading status.

|Controls|Description|
|--------|-----------|
|<audio\>|Defines sound content.|
|<video\>|Defines a video or movie.|
|<source\>|Defines multiple media resources for media elements \(<video\> and <audio\>\).|
|<embed\>|Defines a container for an external \(non-HTML\) application.|

## Canvas element

Controls that enable you to access the 2D context of a <canvas\> element and use it to verify and simulate drawing.

|Controls|Description|
|--------|-----------|
|<canvas\>|Used to draw graphics, on the fly, using scripting \(usually JavaScript\).|

## SVG element

Identify inline SVG on Web pages, allowing tests to create verifications for displayed 2D drawings.

|Controls|Description|
|--------|-----------|
|<rect\>|The <rect\> element is used to create a rectangle.|
|<circle\>|The <circle\> element is used to create a circle.|
|<ellipse\>|The <ellipse\> element is used to create an ellipse.|
|<line\>|The <line\> element is used to create a line.|
|<polygon\>|The <polygon\> element is used to create a graphic element containing at least three sides.|
|<polyline\>|The <polyline\> element is used to create any shape that consists of only straight lines.|
|<path\>|The <path\> element is used to define a path.|
|<text\>|The <text\> element is used to define a text string.|
|<a\>|The <a\> element is used to create a hyperlink around SVG elements.|
|<altGlyph\>|Provides control over the glyphs used to render particular character data.|
|<altGlyphItem\>|Defines a candidate set of glyph substitutions.|
|<animate\>|Defines how an attribute of an element changes over time.|
|<animateColor\>|Defines a color transformation over time.|
|<animateMotion\>|Causes a referenced element to move along a motion path.|
|<animateTransform\>|Animates a transformation attribute on a target element, thereby allowing animations to control translation, scaling, rotation and/or skewing.|
|<clipPath\>|Clipping is about hiding what normally would be drawn. The stencil which defines what is and what isn't drawn is called a clipping path.|
|<color-profile\>|Specifies a color profile description \(when the document is styled using CSS\).|
|<cursor\>|Defines a platform-independent custom cursor.|
|<defs\>|A container for referenced elements.|
|<desc\>|A text-only description for container elements or graphic elements in SVG \(user agents may display the text as a screentip\).|
|<feBlend\>|Composes two objects together according to a certain blending mode.|
|<g\>|Used to group together elements.|
|<keygen\>|Specifies a key-pair generator field used for forms.|
|<linearGradient\>|Defines a linear gradient.|
|<marker\>|Markers can be placed on the vertices of lines, polylines, polygons and paths.|
|<mask\>|Masking is a combination of opacity values and clipping. Like clipping you can use shapes, text or paths to define sections of the mask.|
|<pattern\>|Defines the coordinates you want the view to show and the size of the view. Then you add shapes into your pattern. The pattern repeats when an edge of the view box \(viewing area\) is hit.|
|<radialGradient\>|Defines a radial gradient.|
|<stop\>|The stops for a gradient.|
|<svg\>|Creates an SVG document fragment.|
|<text\>|Defines a text.|
|<tref\>|References any <text\> element in the SVG document and reuse it.|
|<tspan\>|Identical to the <text\> element but can be nested inside text tags and inside itself.|
|<use\>|Uses a URI to reference a <g\>, <svg\> or other graphical element with a unique id attribute and replicate it.|

## New Input Types  

|Controls|Description|
|--------|-----------|
|color|Used for input fields that should contain a color.|
|date|Used for input fields that should contain a date.|
|datetime|Allows the user to select a date and time \(with time zone\).|
|datetime-local|Allows the user to select a date and time \(no time zone\).|
|email|Used for input fields that should contain an e-mail address.|
|month|Allows the user to select a month and year.|
|number|Used for input fields that should contain a numeric value.|
|range|Used for input fields that should contain a value within a range.|
|search|Used for search fields \(a search field behaves like a regular text field\).|
|tel|Used for input fields that should contain a telephone number.|
|time|Allows the user to select a time \(no time zone\).|
|url|Used for input fields that should contain a URL address.|
|week|Allows the user to select a week and year.|




