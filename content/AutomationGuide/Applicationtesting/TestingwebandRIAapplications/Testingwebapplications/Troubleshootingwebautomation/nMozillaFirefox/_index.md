--- 
title: "Can TestArchitect capture pop-up windows without titles in Mozilla Firefox?"
linktitle: "Can TestArchitect capture pop-up windows without titles in Mozilla Firefox?"
weight: 4
aliases: 
    - /TA_FAQ/Topics/faq.howto.web_automation_capturing_popup_window.html
---
# Can TestArchitect capture pop-up windows without titles in Mozilla Firefox? {#web_automation_capturing_popup_window .task}

**A**: Some Mozilla Firefox pop-up windows do not have titles. TestArchitect is unable capture these windows. To allow TestArchitect to capture them, the titles must appear. To solve this issue, follow the steps outlined below:

1.  Open Mozilla Firefox and type about:config into the address bar.

    A warning page appears.

2.  Click the **I'll be careful, I promise!** button.

3.  Clear the **Show this warning next time** check box to disable this warning page next time.

4.  Locate the prompts.tab\_modal.enabled option. Double-click it to change the default value from TRUE to FALSE.


Titles will now appear on these pop-up windows in Firefox.

You can now use either the [Interface Viewer](../../TA_Help/Topics/Interface_def_Viewer.html) or [Identify](../../TA_Help/Topics/Interface_def_client_interface_tool_identify.html) method in TestArchitect to capture the pop-up windows.

**Parent topic:**[Troubleshooting web automation](../../TA_Automation/Topics/web_troubleshooting.html)

