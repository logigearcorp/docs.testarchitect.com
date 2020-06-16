--- 
title: "How to capture interfaces to run cross-browser tests?"
linktitle: "How to capture interfaces to run cross-browser tests?"
description: "Suppose that you need to test the website www.google.com on different types of web browsers: Internet Explorer, Mozilla Firefox and Google Chrome. The unique and stable property you want to use to ..."
weight: 2
aliases: 
    - /TA_FAQ/Topics/faq.howto.web_automation_capture_interfaces_cross_browsers.html
keywords: "FAQ, cross-browser testing"
---

Suppose that you need to test the website `www.google.com` on different types of web browsers: Internet Explorer, Mozilla Firefox and Google Chrome. The unique and stable property you want to use to capture the interface of a webpage is title. Only problem is, each browser appends its own little "plug" to the title of the webpage, as follows:

-   On Internet Explorer, the title is Google - Windows Internet Explorer.
-   On Mozilla Firefox, the title is Google – Mozilla Firefox.
-   On Google Chrome, the title is Google – Google Chrome

You may ask: *Do I need different interface definitions for each of Internet Explorer, Firefox and Chrome?*

**Solution**: No, you do *not* need to capture three interface definitions for each browser. Simply use a wildcard \(\{.\*\}\) to allow for the differences between browsers.

1.  Capturing HTML pages \(windows\):

    If you have captured the interface definition of the webpage on one browser \(e.g., Internet Explorer\), just replace the non-common text with the wildcard \{.\*\}, with the following steps:

    1.  Open the interface definition of this webpage.
    2.  Focus on the row interface element setting and change `Google - Windows Internet Explorer` to \{Google.\*\}.
    3.  Click **Save** ![](/images/TA_Automation/Images/save_toolbar_btn.png) on the toolbar.
    If you did not yet capture the interface for the webpage, and you want to make your interface definition generic enough to use across browsers, here's another approach:

    1.  Open the [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer_Starting.html) and, in the UI explorer, select the node for the browser displaying `www.google.com`.
    2.  In the **Properties** tab, observe the title property.
    3.  Double-click title's **Value** field, and then change the **Value** into, for this example, \{Google .\*\} to match any HTML page \(window\) whose string starts with Google.
    4.  Click **Save** ![](/images/TA_Automation/Images/btn_Interface_Viewer-Save.png) on the Interface Viewer.
2.  Capturing controls:

    We recommend that you capture interface elements with stable and unique properties across browsers, such as name, id, etc.

    -   If the unique properties are slightly different on different browsers, use the wildcard \(\{.\*\}\) , as discussed above.
    -   If the unique properties do not have same or similar values across browsers, you can use Variations. Refer to [Variations](/TA_Help/Topics/Variations.html) to learn how to create a variation and run the same test modules across different browsers/platforms.

**Tip:** In order to launch a specific browser from your test, use the [use browser](/TA_Automation/Topics/bis_use_browser.html) built-in setting.


