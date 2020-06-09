--- 
title: "press device buttons"
linktitle: "press device buttons"
weight: 21
aliases: 
    - /TA_Automation/Topics/bia_press_device_buttons.html
---
keyword: [press device buttons, press buttons, press physical buttons, push buttons]
---

# press device buttons

## Description

Simulate the pressing of a physical button on a mobile device.

## Arguments

-   **buttons**

    Button to press.

    Supported values/buttons:

    -   \{power\}
    -   \{camera\}
    -   \{volume up\}
    -   \{volume down\}
    -   \{home\}
    -   \{back\}
    -   \{menu\}
    -   \{search\} 
-   **duration**

    \(Optional\) Time duration for which to simulate the pressing and holding of the physical button \(units: milliseconds; default = 1000\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: Android.

## Notes

-   Only one button may be specified in a single action line.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html).

## Example

![](/images//Images/bia_press_device_buttons_aut_2.png)

**Action Lines**

![](/images//Images/bia_press_device_buttons_pgm_2.png)

**Parent topic:**[Device](/TA_Automation/Topics/bia_device.html)

**Previous topic:**[pinch](/TA_Automation/Topics/bia_iOS_pinch.html)

**Next topic:**[scroll to view](/TA_Automation/Topics/bia_iOS_scroll_to_view.html)

