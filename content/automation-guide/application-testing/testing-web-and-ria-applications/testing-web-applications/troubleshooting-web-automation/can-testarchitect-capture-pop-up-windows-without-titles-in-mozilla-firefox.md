--- 
title: "Can TestArchitect capture pop-up windows without titles in Mozilla Firefox?"
linktitle: "Can TestArchitect capture pop-up windows without titles in Mozilla Firefox?"
description: "A : Some Mozilla Firefox pop-up windows do not have titles. TestArchitect is unable capture these windows. To allow TestArchitect to capture them, the titles must appear. To solve this issue, follow ..."
weight: 4
aliases: 
    - /TA_FAQ/Topics/faq.howto.web_automation_capturing_popup_window.html
keywords: "FAQ, capturing pop-up window without title (Mozilla Firefox), capturing pop-up window without title (Mozilla Firefox), pop-up window without title (Mozilla Firefox), capturing"
---

**A**: Some Mozilla Firefox pop-up windows do not have titles. TestArchitect is unable capture these windows. To allow TestArchitect to capture them, the titles must appear. To solve this issue, follow the steps outlined below:

1.  Open Mozilla Firefox and type about:config into the address bar.

    A warning page appears.

2.  Click the **I'll be careful, I promise!** button.

3.  Clear the **Show this warning next time** check box to disable this warning page next time.

4.  Locate the prompts.tab\_modal.enabled option. Double-click it to change the default value from TRUE to FALSE.


Titles will now appear on these pop-up windows in Firefox.

You can now use either the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/) or [Identify](/user-guide/interface-definitions/interface-capturing-commands/point-to-identify-tool/) method in TestArchitect to capture the pop-up windows.


