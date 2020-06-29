--- 
title: "Preparing a web browser for testing Silverlight applications"
linktitle: "Preparing a web browser for testing Silverlight applications"
description: "To allow TestArchitect to work properly with a Silverlight application embedded into a web page, you may need to prepare your web browser."
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Silverlight_apps_prepraring_browser.html
keywords: "Silverlight testing, preparing browsers"
---

To allow TestArchitect to work properly with a Silverlight application embedded into a web page, you may need to prepare your web browser.

{{<warning>}} Microsoft ceased development of Silverlight. However, Silverlight continues working in TestArchitect.

## Clearing the browser cache

It is a good idea to clear your browser's cache prior to testing. This ensures that the AUT is retrieved from its original location rather than pulled out of cache, which can be a problem if the two versions differ. If an older version of the application is loaded from cache, TestArchitect may be unable make the application testable.

To clear caches in Internet Explorer, do the following:

1.  Open Internet Explorer.
2.  Select **Tools \(via the Gear Icon\)** \> **Safety** \> **Delete browsing history**.

    **Fastpath:** Alternatively, use the keyboard shortcut Ctrl + Shift + Del.

3.  Select the **Temporary Internet files and website files** check box.
4.  Click the **Delete** button.

## Setting the zoom ratio to 100%

When testing Silverlight applications, TestArchitect requires that the zoom ratio in the browser be set to 100% for all tested pages. Otherwise the locations of GUI elements on the page will not match their stored coordinates. For information on how you can change the zoom ratio of a web page in your web browser, see [Setting 100% zoom](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-non-webdriver/preparing-web-browsers/preparing-internet-explorer-for-web-testing/setting-100-zoom).



