--- 
title: "No window found matching *<windowName\\>*, defined by *<windowDefinition\\>*, within the timeout of *<value\\>* seconds. Please check the interface definition for *<windowName\\>*, or set a longer timeout with the 'window wait' setting."
linktitle: "No window found matching *<windowName\\>*, defined by *<windowDefinition\\>*, within the timeout of *<value\\>* seconds. Please check the interface definition for *<windowName\\>*, or set a longer timeout with the 'window wait' setting."
description: "Error code: 0x80010004L Common causes AUT change issue, that is when title of the window is changed. Timing issue , that is when the window is not available within a specified timeout, defined in the ..."
weight: 8
aliases: 
    - /TA_FAQ/Topics/0x80010004L-1.html
keywords: "automation errors, 0x80010004L"
---

Error code: 0x80010004L

## Common causes

-   AUT change issue, that is when title of the window is changed.
-   [Timing issue](/TA_Automation/Topics/Automation_practices_Timing.html), that is when the window is not available within a specified timeout, defined in the [window wait](/TA_Automation/Topics/bis_window_wait.html) built-in setting.
-   Scripting issue means improper interface, or improper definition/invalid syntax of [dynamic identifier](/TA_Help/Topics/The_test_language_dynamic_identifiers.html).

## Possible solutions

You can apply the following ways to troubleshoot why the window could not be found:

-   If the AUT is open, check whether the title of the window is changed.
    -   In the Viewer, if the window is unmatched, see the [Property Comparison](/TA_Help/Topics/ug_Inteface_properties_comparison_panel.html) panel to understand why the window is no longer matched. You might need to recapture the interface definition of the window.

        ![](/images/TA_Help/Images/Properties_comparison_panel_interface_entity.png)

    -   In the Viewer, if the window is matched, it might be timing or scripting issue. You might need to modify your test procedures.
        -   Use [**Screenshot Recording**](/TA_Help/Topics/ug_Screenshot_recording.html): You have an instant view of the state of the system at each critical juncture, and instantly know if that state was as expected.
        -   Adjust higher wait time value of the [window wait](/TA_Automation/Topics/bis_window_wait.html) built-in setting.
        -   Verify whether the correct interface is currently used.
-   If the AUT is not available within a given timeout, it might be timing issue. Try adjusting higher wait time value of the [window wait](/TA_Automation/Topics/bis_window_wait.html) built-in setting.




