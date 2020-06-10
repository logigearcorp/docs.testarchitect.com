--- 
title: "tap stepper button"
linktitle: "tap stepper button"
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_tap_stepper_button.html
keywords: "tap stepper button, increase value of stepper button, decrease value stepper button, increase or decrease value of stepper button"
---

## Description

Increment the value of a stepper control by a specified number of taps.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **button**

    Type of stepper button to tap on.

    Allowable values:

    -   **plus**

        Increment

    -   **minus**

        Decrement

-   **taps**

    \(Optional\) Number of times to tap the specified stepper button \(default = 1\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies only to the iOS operating system.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:stepper.

## Example

![](/images//Images/bia_tap_stepper_button_aut.png)

**Action Lines**

![](/images//Images/bia_tap_stepper_button_pgm.png)

**Result**

![](/images//Images/bia_tap_stepper_button_res.png)

**Effect**

![](/images//Images/bia_tap_stepper_button_effect.png)

**Parent topic:**[Stepper](/TA_Automation/Topics/bia_Stepper.html)

