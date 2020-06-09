--- 
title: "control condition wait"
linktitle: "control condition wait"
weight: 4
aliases: 
    - /TA_Automation/Topics/bis_control_condition_wait.html
---
keyword: [control condition wait, maximum wait time for control's properties to satisfy conditions]
---

# control condition wait

## Description

The maximum wait time for TA properties to satisfy the conditions of the control condition setting.

**Note:** The TA properties and their conditions are defined in the [control condition](control_condition.html) built-in setting.

## Value Units

seconds

## Default Value

5

## Applicable Built-in Settings

This built-in setting only takes effect when it is used in combination with the [control condition](control_condition.html) built-in setting.

## Example

Suppose that you'd like to test a flight booking web page with the following steps:

1.  Click control **departure**, an input-text, to select a departure date.
2.  Once the departure date is selected, the page enables control **arrival**, also an-input text, after a certain amount of time.
3.  Subsequently, click **arrival** to select an arrival date.

Normally, the test procedure you declare may not handle the timing issue when the **arrival** control is enabled after an amount of time. Consequently, during automation playback, there is a possibility that, although the **arrival** control is not yet enabled and visible, UI-interactive actions still interact with that control, which might cause the automation to fail.

Let's define the readiness state of input-text controls \(visible=true, enabled=true\) by using control condition, along with the wait time by using control condition wait.

![](/images//Images/bis_control_condition_pgm.png)

**Parent topic:**[Timing settings](/TA_Automation/Topics/bis_timing.html)

**Previous topic:**[control condition](/TA_Automation/Topics/bis_control_condition.html)

**Next topic:**[double click time](/TA_Automation/Topics/bis_double_click_time.html)

