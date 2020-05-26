--- 
title: "get modal definition"
linktitle: "get modal definition"
weight: 8
aliases: 
    - /TA_Automation/Topics/bia_get_modal_definition.html
---
# get modal definition {#bia_get_modal_definition .reference}

## Description { .section}

Retrieve the definition of the current modal dialog box.

## Arguments { .section}

variable
:   \(Optional\) Variable to receive the returned value.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   variable argument:
    -   The returned variable contains values of the following TA properties: title, parent title, and handle of the modal dialog box.
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   Use the get modal definition built-in action in combination with the [on modal action](bia_on_modal_action.html) built-in action to handle the unexpected modal dialog box properly.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Systems/Platforms { .section}

Use of this action is supported on the following systems/platforms:Windows.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [load invisible controls](bis_load_invisible_controls.html), [object wait](bis_object_wait.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [page wait](bis_page_wait.html), [window wait](bis_window_wait.html).

## Example { .section}

**Scenario**: You are aware of the fact that the AUT under development is, at times, capable of throwing unexpected exceptions, resulting in the appearance of modal dialogs. You wish to allow your test to handle such exceptions gracefully wherever they may occur, by dismissing the dialog, so that automation may continue. You also want to record the error message displayed by the dialog. Hence, you want the action lines handling this contingency to:

1.  capture screenshots when the modal dialog box unexpectedly appears, using the built-in [capture screen](bia_capture_screen.html) action;
2.  click the **Continue** button, which such exception dialogs are always expected to have, to dismiss the dialog and allow automation to proceed; and
3.  Allow for the possibility that a modal dialog other than the standard “Unhandled exception” dialog has appeared, one that lacks a **Continue** button. Hence, if your procedure is unable to find a **Continue** button, simply attempt to close the modal dialog box with a built-in [close window](bia_close_window.html) action.

![](../Images/bia_on_modal_action_aut.png)

**Action Lines**

![](../Images/bia_on_modal_action_pgm.png)

**Result**

At line \#19 in the test procedure during the automated run, an unexpected modal dialog box appears. This triggers the modal dialog handler action to dismiss the dialog. Subsequently, TestArchitect resumes normal automation starting with the last action \(line \#19\) executed prior to the invoking of the handler action.

![](../Images/bia_on_modal_action_res.png)

**Parent topic:**[Window](../../TA_Automation/Topics/bia_Window.html)

**Previous topic:**[focus window](../../TA_Automation/Topics/bia_focus_window.html)

**Next topic:**[get window property](../../TA_Automation/Topics/bia_get_window_property.html)

