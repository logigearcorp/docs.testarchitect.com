--- 
title: "No matching UI object found for <controlName> within the timeout of <value> seconds. Please check the interface definition for <controlName>, or set a longer timeout with the 'object wait' setting."
linktitle: "No matching UI object found for <controlName> within the timeout of <value> seconds. Please check the interface definition for <controlName>, or set a longer timeout with the 'object wait' setting."
description: "Error code: 0x80010009L Common causes AUT change, that is, previously-captured TA properties are changed, or the control no longer exists. Timing issue , that is, the control is not available within a ..."
weight: 16
aliases: 
    - /TA_FAQ/Topics/0x80010009L.html
keywords: "automation errors, 0x80010009L"
---

Error code: 0x80010009L

## Common causes

-   AUT change, that is, previously-captured TA properties are changed, or the control no longer exists.
-   [Timing issue](/automation-guide/action-based-testing-language/the-test-language/timing/), that is, the control is not available within a specified timeout, defined in the [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait) built-in setting.
-   Scripting issue, that is, improper definition/invalid syntax of [dynamic identifier](/user-guide/interface-definitions/dynamic-identifiers).

## Possible solutions

You can apply the following ways to troubleshoot why the control could not be found:

-   If the AUT is open, check whether the previously-captured TA properties of the control are changed.
    -   In the Viewer, if the control is unmatched, see the [Property Comparison](/user-guide/interface-definitions/the-interface-viewer/interpreting-the-interface-viewer/properties-comparison-panel) panel to understand why the control is no longer matched. You might need to recapture new TA property/value.

        ![](/images/TA_Help/Images/Properties_comparison_panel.png)

    -   In the Viewer, if the control is still matched, it might be timing or scripting issue. You might need to modify your test procedures.
        -   Use [**Screenshot Recording**](/user-guide/finding-bugs-with-testarchitect/screenshot-recording/): You have an instant view of the state of the system at each critical juncture, and instantly know if that state was as expected.
        -   Adjust higher wait time value of the [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait) built-in setting.
-   If the control is not available within the specified timeout, it might be timing issue. Adjust higher wait time value of the [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait) built-in setting.
-   It is suggested that after updating the test procedures, you double-check the control’s existence by using the [check control exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check-control-exists) built-in action.



