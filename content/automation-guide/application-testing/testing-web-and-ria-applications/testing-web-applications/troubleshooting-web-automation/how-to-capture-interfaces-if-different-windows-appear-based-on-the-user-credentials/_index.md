--- 
title: "How to capture interfaces if different windows appear based on the user credentials?"
linktitle: "How to capture interfaces if different windows appear based on the user credentials?"
description: "Suppose that you need to test a member-specific home webpage whose GUI may be different based on the user credentials after access is granted. You may ask: Do I need different interface definitions ..."
weight: 8
aliases: 
    - /TA_FAQ/Topics/faq.howto.web_automation_capture_interfaces_user_credentials.html
keywords: 
---

Suppose that you need to test a member-specific home webpage whose GUI may be different based on the user credentials after access is granted.

You may ask: *Do I need different interface definitions for each of the different member home pages?*

**Solution**: You do *not* need to capture various interface definitions for each of the different member home pages, such as administrator or non-administrator home page. Just observe the member home page to find the main menu control. For example:

![](/images/TA_Automation/Images/ug_labmanager01.png)

And then capture that main menu control:

1.  Open the [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer_Starting.html).
2.  From the Interface Viewer, we recommend capturing interface elements with stable and unique properties across member home pages, such as name, id, etc.
    -   If the unique properties are slightly different across different member home pages, you can use the wildcard \(\{.\*\}\) to ignore the differences.
    -   If the unique properties do not have the same values, you can select the process property to match the type of browser where the member home page is open. For example:

        -   On Internet Explorer, the process property is iexplore.exe.
        -   On Mozilla Firefox, the process property is firefox.exe.
        -   On Google Chrome, the process property is chrome.exe.
        {{<tip>}} If there are more than one instances of a given browser open simultaneously, use the [identify window](/TA_Automation/Topics/bia_identify_windows.html) action to handle the instances.



