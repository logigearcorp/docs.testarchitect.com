--- 
title: "tap stepper button"
linktitle: "tap stepper button"
aliases: 
    - /TA_Automation/Topics/bia_tap_stepper_button.html
---
# tap stepper button {#bia_tap_stepper_button .reference}

## Description { .section}

Increment the value of a stepper control by a specified number of taps.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the control.

button
:   Type of stepper button to tap on.

:   Allowable values:

    plus
    :   Increment

    minus
    :   Decrement

taps
:   \(Optional\) Number of times to tap the specified stepper button \(default = 1\).

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes {#section_tll_j2y_mk .section}

-   This built-in action applies only to the iOS operating system.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls { .section}

This action is applicable to the following controls:stepper.

## Example { .section}

![](../Images/bia_tap_stepper_button_aut.png)

**Action Lines**

![](../Images/bia_tap_stepper_button_pgm.png)

**Result**

![](../Images/bia_tap_stepper_button_res.png)

**Effect**

![](../Images/bia_tap_stepper_button_effect.png)

**Parent topic:**[Stepper](../../TA_Automation/Topics/bia_Stepper.html)

