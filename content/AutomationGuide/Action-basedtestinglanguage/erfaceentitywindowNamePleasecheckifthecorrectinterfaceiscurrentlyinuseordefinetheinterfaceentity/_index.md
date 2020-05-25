--- 
title: "No settings \\('title', 'doc title' or 'handle', etc.\\) defined for interface entity *<windowName\\>*. Please check if the correct interface is currently in use, or define the interface entity."
linktitle: "No settings \\('title', 'doc title' or 'handle', etc.\\) defined for interface entity <windowName\\>. Please check if the correct interface is currently in use, or define the interface entity."
aliases: 
    - /TA_FAQ/Topics/0x80010002L.html
---
# No settings \('title', 'doc title' or 'handle', etc.\) defined for interface entity *<windowName\>*. Please check if the correct interface is currently in use, or define the interface entity. {#reference_0x80010002L .reference}

Error code: 0x80010002L

## Problem { .section}

This happens because the specified window is not defined yet.

## Solution { .section}

-   Create the desired interface entity \(window\), and re-run the test. \([Learn more](../../TA_Help/Topics/Interface_def_Adding.html).\)
-   If the windows is already defined, ensure that you are using the correct interface. If you do not want to set the [default interface](../../TA_Help/Topics/Interface_def_set_default_interface.html), you might use the [use interface](../../TA_Automation/Topics/bia_use_interface.html) built-in action.

**Parent topic:**[Diagnosing and resolving automation errors](../../TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[TestArchitect is unable to retrieve clipboard.](../../TA_FAQ/Topics/0x80016003L.html)

**Next topic:**[TestArchitect is unable to find the specified column header. Please check that the column header <index\> in the <controlName\> control, which resides in the <windowName\> window, exists.](../../TA_FAQ/Topics/0x80010407L.html)

