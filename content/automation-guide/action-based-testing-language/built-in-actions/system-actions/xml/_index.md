--- 
title: "XML"
linktitle: "XML"
description: "This section contains information on XML automation."
weight: 10
aliases: 
    - /TA_Automation/Topics/bia_XML.html
keywords: "XML, overview, XML automation"
---

This section contains information on XML automation.

## {{< expand >}} Overview

The Extensible Markup Language \(XML\) is used for the creation of structured documents that are both human- and machine-readable. The content of a document is organized into meaningful elements that are wrapped in tags, similar in manner and appearance to HTML tags. XML tags may include attributes, which are annotations that convey additional meaning. In addition to conveying meaning, tags and attributes can ease the task of locating and manipulating portions of the document.

TestArchitect offers support for XML automation, allowing you to perform verification and comparison operations on XML data, store test data in XML format, and do web service testing.

Specifically, TestArchitect provides this support with built-in actions that allow you to perform XPath \(XML Path Language\) queries to search for information in target XML content. An XPath expression uses a path notation for addressing parts of an XML document. For example, the expression `book[@type="Fiction"]` refers to the <book\> elements whose type attribute is set to `"Fiction"`.

{{<note>}} As you may have surmised, in order to perform XPath queries to find XML elements by their tags and attributes, you must be familiar with XPath syntax. A tutorial on XML and XPath is beyond the scope of this help system. For more information on XPath, you can refer to this [XPath Tutorial](https://www.w3schools.com/xml/xpath_intro.asp).

## {{< expand >}} Supported XML-related built-in actions

TestArchitect provide the following actions:

-   [check xml query result](/automation-guide/action-based-testing-language/built-in-actions/system-actions/xml/check-xml-query-result): Compare an XPath query result against an expected string and return a Passed or Failed result accordingly.
-   [get xml query result](/automation-guide/action-based-testing-language/built-in-actions/system-actions/xml/get-xml-query-result): Query an XML string by XPath and store the result.

## {{< expand >}} Supported versions

-   XML 1.0,
-   XML 2.0,
-   XPath 1.0,
-   and XPath 2.0.

## {{< expand >}} Prerequisites

Each of the XML-based built-in actions operates on XML text that is present in an argument. \(That is, the actions do not operate directly on XML files.\) In most scenarios, the target XML content originates from a file, and hence you will want to load that content into a variable. The most direct means of doing this is to use the built-in action [get text file](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/get-text-file), prior to calling the XML-based action.

For instance: the following test procedure initially loads an XML document's content using the [get text file](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/get-text-file) action. Afterwards, get xml query result is used by passing the variable holding the XML content to the xml argument. In this scenario, get xml query result selects the root element inventory.

```
                       file                 variable
get text file          D:\bookstore.xml     >>bookstore

                        xml                 xpath          variable
get xml query result    #bookstore          /inventory     >>allbooks
```

1.  [check xml query result](/automation-guide/action-based-testing-language/built-in-actions/system-actions/xml/check-xml-query-result)  

2.  [get xml query result](/automation-guide/action-based-testing-language/built-in-actions/system-actions/xml/get-xml-query-result)  





