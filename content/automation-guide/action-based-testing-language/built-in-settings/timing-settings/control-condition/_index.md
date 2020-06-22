--- 
title: "control condition"
linktitle: "control condition"
description: "Description Waits for given TA properties of controls to satisfy specified conditions before UI-interactive actions are executed. Value Units Dynamic identifier expression that evaluates to a Boolean ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bis_control_condition.html
keywords: "built-in settings, control condition, settings, control condition (settings), wait for control property to satisfy conditions"
---

## Description

Waits for given TA properties of controls to satisfy specified conditions before [UI-interactive actions](/TA_Automation/Topics/timing_classifying_actions.html) are executed.

## Value Units

Dynamic identifier expression that evaluates to a Boolean True or False

## Default Value

None

## Applicable Systems/Platforms

Use of this built-in setting is supported on all systems/platforms.

## Notes

-   This built-in setting only takes effect on UI-interactive actions, such as, [enter](/TA_Automation/Topics/bia_enter.html), [select](/TA_Automation/Topics/bia_select.html), [click](/TA_Automation/Topics/bia_click.html), and [type](/TA_Automation/Topics/bia_type.html).
-   The definition of readiness of a TA property is based on your preferences. Particularly, a TA property is ready when it satisfies all conditions, defined in the control condition setting, before UI-interactive actions are executed.
-   To define lists of conditionals to be met for each type of control, use dynamic identifier format. \([Learn more](/TA_Help/Topics/The_test_language_dynamic_identifiers.html).\)
-   To wait for all types of controls, you have either of two options:
    -   No TA class is required. For example, for all types of controls, wait until visible=true and enable=true conditions are satisfied.

        ```
                    setting               value
        setting     control condition     [visible=true, enable=true]
        ```

    -   Declare ta class=\{.\*\}. For example, for all types of controls, wait until visible=true and enable=true conditions are satisfied.

        ```
                    setting               value
        setting     control condition     [ta class={.*}, visible=true, enable=true]
        ```

-   To specify multiple types of controls at a time, separate each set of TA class with a comma. For example:
    -   For **textbox**, wait until visible=true, enable=true, and editable=true conditions are satisfied. Additionally, for **button**, wait until visible=true and enable=true conditions are met.

        ```
                   setting              value
        setting    control condition    [ta class=textbox, visible=true, enabled=true, editable=true],[ta class=button, visible=true, enable=true]
        ```

    -   For all types of controls, wait until visible=true and enable=true conditions are satisfied. However, for **textbox** only, wait until visible=true, enable=true, and editable=true conditions are met.

        ```
                   setting              value
        setting    control condition    [ta class={.*}, visible=true, enabled=true],[ta class=textbox, visible=true, enable=true, editable=true]
        ```

-   When one of the defined TA properties is invalid or does not exist, the control condition setting is ignored.
-   You can quickly obtain the [dynamic identifier](/TA_Help/Topics/The_test_language_dynamic_identifiers.html#note_g5t_bjt_rw) of given UI controls by using **Copy Definition** from the [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html) or the [point-to-identify tool](/TA_Help/Topics/Interface_def_Viewer_identify.html).
-   The timeout value waiting for TA properties until all defined conditions are met is specified in the [control conditional wait](/TA_Automation/Topics/bis_control_condition_wait.html) built-in setting.

## Example

Suppose that you'd like to test a flight booking web page with the following steps:

1.  Click control **departure**, an input-text, to select a departure date.
2.  Once the departure date is selected, the page enables control **arrival**, also an-input text, after a certain amount of time.
3.  Subsequently, click **arrival** to select an arrival date.

Normally, the test procedure you declare may not handle the timing issue when the **arrival** control is enabled after an amount of time. Consequently, during automation playback, there is a possibility that, although the **arrival** control is not yet enabled and visible, UI-interactive actions still interact with that control, which might cause the automation to fail.

Let's define the readiness state of input-text controls \(visible=true, enabled=true\) by using control condition, along with the wait time by using control condition wait.

![](/images/TA_Automation/Images/bis_control_condition_pgm.png)




