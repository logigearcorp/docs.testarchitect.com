--- 
title: "No matching UI object found for *<controlName\\>* within the timeout of *<value\\>* seconds. Please check the interface definition for *<controlName\\>*, or set a longer timeout with the 'object wait' setting."
linktitle: "No matching UI object found for *<controlName\\>* within the timeout of *<value\\>* seconds. Please check the interface definition for *<controlName\\>*, or set a longer timeout with the 'object wait' setting."
description: "Error code: 0x80010009L Common causes AUT change, that is, previously-captured TA properties are changed, or the control no longer exists. Timing issue , that is, the control is not available within a ..."
weight: 16
aliases: 
    - /TA_FAQ/Topics/0x80010009L.html
keywords: "automation errors, 0x80010009L"
---

Error code: 0x80010009L

## Common causes

-   AUT change, that is, previously-captured TA properties are changed, or the control no longer exists.
-   [Timing issue](/TA_Automation/Topics/Automation_practices_Timing.html), that is, the control is not available within a specified timeout, defined in the [object wait](/TA_Automation/Topics/bis_object_wait.html) built-in setting.
-   Scripting issue, that is, improper definition/invalid syntax of [dynamic identifier](/TA_Help/Topics/The_test_language_dynamic_identifiers.html).

## Possible solutions

You can apply the following ways to troubleshoot why the control could not be found:

-   If the AUT is open, check whether the previously-captured TA properties of the control are changed.
    -   In the Viewer, if the control is unmatched, see the [Property Comparison](/TA_Help/Topics/ug_Inteface_properties_comparison_panel.html) panel to understand why the control is no longer matched. You might need to recapture new TA property/value.

        ![](/images/TA_Help/Images/Properties_comparison_panel.png)

    -   In the Viewer, if the control is still matched, it might be timing or scripting issue. You might need to modify your test procedures.
        -   Use [**Screenshot Recording**](/TA_Help/Topics/ug_Screenshot_recording.html): You have an instant view of the state of the system at each critical juncture, and instantly know if that state was as expected.
        -   Adjust higher wait time value of the [object wait](/TA_Automation/Topics/bis_object_wait.html) built-in setting.
-   If the control is not available within the specified timeout, it might be timing issue. Adjust higher wait time value of the [object wait](/TA_Automation/Topics/bis_object_wait.html) built-in setting.
-   It is suggested that after updating the test procedures, you double-check the control’s existence by using the [check control exists](/TA_Automation/Topics/bia_check_control_exists.html) built-in action.




