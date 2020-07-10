--- 
title: "page wait state"
linktitle: "page wait state"
description: "Description Specifies whether the page wait built-in setting applies to the complete loading of a web page, or to the loading of a page only up to the point where it is in an interactive state. ..."
weight: 11
aliases: 
    - /TA_Automation/Topics/bis_page_wait_state.html
keywords: "built-in settings, page wait state, settings, page wait state, page wait state (settings), page wait state, page"
---

## {{< expand >}} Description

Specifies whether the [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait) built-in setting applies to the complete loading of a web page, or to the loading of a page only up to the point where it is in an interactive state.

## {{< expand >}} Allowable Values

-   complete: Within the page wait time, page is required to fully load.
-   interactive: Within the page wait time, page is required to load to the point where its DOM elements are accessible.

## {{< expand >}} Default Value

complete

## {{< expand >}} Applicable Systems/Platforms

Use of this built-in setting is supported on the following systems/platforms: Internet Explorer.

## {{< expand >}} Notes

-   The page wait state built-in setting affects the readyState property of a document, the loading state of the document. \([Learn more](https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState).\)
-   Possible values:
    -   complete: The document and all sub-resources have finished loading fully.
    -   interactive: The document has finished loading and the document has been parsed but sub-resources, such as, images, stylesheets, and frames are still loading. A user, or automation, now can interact with the object, even though it is not fully loaded.
-   If your automated test only accesses DOM elements, it is suggested that you set the value to interactive to avoid the case where the page unexpectedly does not finish loading fully within the specified page wait time, despite being available for interaction. By so doing, you can avoid unnecessary automation errors.

## {{< expand >}} Example

Suppose that in test case TC 01 you only want to wait until a page finishes loading interactively, so that you can access the DOM elements quickly, including **username** and **password** controls. By contrast, in test case TC 02, in order to verify CSS files applied to the given page, your test must wait until a page finishes loading fully.

**Action Lines**

![](/images/TA_Automation/Images/bis_page_wait_state_pgm.png)




