--- 
title: "identify windows"
linktitle: "identify windows"
description: "Description Find all windows matching a definition and assign their physical IDs to variables. Arguments definition TA name of an interface entity. variable1, variable2, … variableN Names of the ..."
weight: 10
aliases: 
    - /TA_Automation/Topics/bia_identify_windows.html
keywords: "built-in actions, identify windows, TA handle, identify windows (action), Safari, macOS (action), identify windows, macOS, Safari (action), Identify windows"
---

## {{< expand >}} Description

Find all windows matching a definition and assign their physical IDs to variables.

## {{< expand >}} Arguments

-   **definition**

    TA name of an interface entity.

-   **variable1, variable2, … variableN**

    Names of the variable\(s\) to receive the returned TA handles. All but the first are optional.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   Use this action in situations where you want your test to be able to interface with two or more windows to which the same definition \(that is, interface entity\) applies.
-   Subsequent to using this action, a returned TA handle may be used in place of the TA name of an interface entity in the window argument of any action. \(When working with a variable holding a TA handle, precede it with the expression identifier, \#.\)
-   A TA handle is a composite of both the handle returned by the host operating system \(hWnd in Windows\), and the name of the interface entity definition for that window. The first part allows TestArchitect to uniquely identify a specific window in the system under test, independent of any interface entity definition, so that two or more instances of the same window may be separately addressed by the test actions. The second part allows the window to be associated with an interface entity, thus providing access to the TA names of the window's controls.
-   variable arguments:
    -   Create as many variable arguments as are required to handle the expected number of instances of the window specified in definition. Note that the headers should be removed from any unused variable arguments.
    -   If the variables in argumentsvariable1, variable2, etc.have not been declared, the action creates them as globals.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:window.

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_identify_window_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_identify_window_pgm.png)

**Result**

In the example, you see that each matching window, based on the specified definition, is assigned an unique handle number \(identifier\) as follows:

-   The unique handle number of the first window will be 133132.
-   The unique handle number of the second window will be 657472.
-   The unique handle number of the third window will be 198728.

From each matching window, perform different operations as follows:

-   Enter a value to the username control on the matching window, whose handle number is 133132, and then verify the entered value.
-   Enter a value to the password control on the matching window, whose handle number is 657472, and then verify the entered value.
-   Click the **Spanish** button to switch to Spanish language on the matching window, whose handle number is 198728.

![](/images/TA_Automation/Images/bia_identify_window_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_identify_window_effect.png)




