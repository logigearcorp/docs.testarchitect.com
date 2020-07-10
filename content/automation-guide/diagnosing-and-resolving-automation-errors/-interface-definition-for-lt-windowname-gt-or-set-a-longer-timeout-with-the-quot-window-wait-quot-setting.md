--- 
title: "No window found matching <windowName> within the timeout of <value> seconds. Please check the interface definition for <windowName>, or set a longer timeout with the 'window wait' setting."
linktitle: "No window found matching <windowName> within the timeout of <value> seconds. Please check the interface definition for <windowName>, or set a longer timeout with the 'window wait' setting."
description: "Error code: 0x80010004L Common causes AUT change issue, that is when title of the window is changed. Timing issue , that is when the window is not available within a specified timeout, defined in the ..."
weight: 7
aliases: 
    - /TA_FAQ/Topics/0x80010004L.html
keywords: "automation errors, 0x80010004L"
---

Error code: 0x80010004L

## {{< expand >}} Common causes

-   AUT change issue, that is when title of the window is changed.
-   [Timing issue](/automation-guide/action-based-testing-language/the-test-language/timing/), that is when the window is not available within a specified timeout, defined in the [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait) built-in setting.
-   Scripting issue means improper interface, or improper definition/invalid syntax of [dynamic identifier](/user-guide/interface-definitions/dynamic-identifiers).

## {{< expand >}} Possible solutions

You can apply the following ways to troubleshoot why the window could not be found:

-   If the AUT is open, check whether the title of the window is changed.
    -   In the Viewer, if the window is unmatched, see the [Property Comparison](/user-guide/interface-definitions/the-interface-viewer/interpreting-the-interface-viewer/properties-comparison-panel) panel to understand why the window is no longer matched. You might need to recapture the interface definition of the window.

        ![](/images/TA_Help/Images/Properties_comparison_panel_interface_entity.png)

    -   In the Viewer, if the window is matched, it might be timing or scripting issue. You might need to modify your test procedures.
        -   Use [**Screenshot Recording**](/user-guide/finding-bugs-with-testarchitect/screenshot-recording/): You have an instant view of the state of the system at each critical juncture, and instantly know if that state was as expected.
        -   Adjust higher wait time value of the [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait) built-in setting.
        -   Verify whether the correct interface is currently used.
-   If the AUT is not available within a given timeout, it might be timing issue. Try adjusting higher wait time value of the [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait) built-in setting.




