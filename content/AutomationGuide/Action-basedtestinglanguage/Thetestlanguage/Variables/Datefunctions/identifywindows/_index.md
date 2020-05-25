--- 
title: "identify windows"
linktitle: "identify windows"
aliases: 
    - /TA_Automation/Topics/bia_identify_windows.html
---
# identify windows {#bia_identify_windows .reference}

## Description { .section}

Find all windows matching a definition and assign their physical IDs to variables.

## Arguments { .section}

definition
:   TA name of an interface entity.

variable1, variable2, … variableN
:   Names of the variable\(s\) to receive the returned TA handles. All but the first are optional.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   Use this action in situations where you want your test to be able to interface with two or more windows to which the same definition \(that is, interface entity\) applies.
-   Subsequent to using this action, a returned TA handle may be used in place of the TA name of an interface entity in the window argument of any action. \(When working with a variable holding a TA handle, precede it with the expression identifier, \#.\)
-   A TA handle is a composite of both the handle returned by the host operating system \(hWnd in Windows\), and the name of the interface entity definition for that window. The first part allows TestArchitect to uniquely identify a specific window in the system under test, independent of any interface entity definition, so that two or more instances of the same window may be separately addressed by the test actions. The second part allows the window to be associated with an interface entity, thus providing access to the TA names of the window's controls.
-   variable arguments:
    -   Create as many variable arguments as are required to handle the expected number of instances of the window specified in definition. Note that the headers should be removed from any unused variable arguments.
    -   If the variables in argumentsvariable1, variable2, etc.have not been declared, the action creates them as globals.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [window wait](bis_window_wait.html).

## Applicable Controls { .section}

This action is applicable to the following controls:window.

## Example { .section}

![](../Images/bia_identify_window_aut.png)

**Action Lines**

![](../Images/bia_identify_window_pgm.png)

**Result**

In the example, you see that each matching window, based on the specified definition, is assigned an unique handle number \(identifier\) as follows:

-   The unique handle number of the first window will be 133132.
-   The unique handle number of the second window will be 657472.
-   The unique handle number of the third window will be 198728.

From each matching window, perform different operations as follows:

-   Enter a value to the username control on the matching window, whose handle number is 133132, and then verify the entered value.
-   Enter a value to the password control on the matching window, whose handle number is 657472, and then verify the entered value.
-   Click the **Spanish** button to switch to Spanish language on the matching window, whose handle number is 198728.

![](../Images/bia_identify_window_res.png)

**Effect**

![](../Images/bia_identify_window_effect.png)

**Parent topic:**[Window](../../TA_Automation/Topics/bia_Window.html)

**Previous topic:**[get window property](../../TA_Automation/Topics/bia_get_window_property.html)

**Next topic:**[maximize](../../TA_Automation/Topics/bia_maximize.html)

