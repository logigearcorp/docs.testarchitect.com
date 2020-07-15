--- 
title: "tap stepper button"
linktitle: "tap stepper button"
description: "Description Increment the value of a stepper control by a specified number of taps. Arguments window TA name of the window. control TA name of the control. button Type of stepper button to tap on. ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_tap_stepper_button.html
keywords: "built-in actions, tap stepper button, tap stepper button (action), iOS (action), tap stepper button, increase value of stepper button, decrease value stepper button, increase or decrease value of stepper button"
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

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Applicable Controls

This action is applicable to the following controls:stepper.

## Example

![](/images/TA_Automation/Images/bia_tap_stepper_button_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_tap_stepper_button_pgm.png)

Result

![](/images/TA_Automation/Images/bia_tap_stepper_button_res.png)

Effect

![](/images/TA_Automation/Images/bia_tap_stepper_button_effect.png)

