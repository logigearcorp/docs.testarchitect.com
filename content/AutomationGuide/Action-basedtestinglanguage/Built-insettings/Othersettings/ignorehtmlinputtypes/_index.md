--- 
title: "ignore html input types"
linktitle: "ignore html input types"
weight: 7
aliases: 
    - /TA_Automation/Topics/bis_ignore_html_input_types.html
---
# ignore html input types {#bis_ignore_html_input_types .reference}

## Description { .section}

Determines whether, during test execution, the legacy captured controls of HTML input types should be taken into consideration.

## Allowable values { .section}

yes
:   Executes the automated test with legacy HTML5 input control types.

no
:   Executes the automated test with new supported HTML5 input control types.

## Default value { .section}

no

## Notes { .section}

-   In the current version TestArchitect, each of the HTML5 input types of the **<input\>** element \(including **input-color**, **input-date**, **input-datetime**, **input-datetime-local**, **input-email**, **input-month**, **input-number**, **input-range**, **input-search**, **input-tel**, **input-time**, **input-url**, and **input-week**\) is mapped to its own TA class. \(Refer to [List of supported HTML5 controls](HTML5_automation_new_tags.html) for details.\) Prior to TestArchitect version 8.1 Update 3, all these controls were mapped to the input-text TA class. In order to continue using these mappings for automation playback in this version, set ignore html input types to yes \(see Example below\).
-   TestArchitect does not support automation playback in mixed mode. That is, with a setting of yes, all your **<input\>** control type mappings must be legacy \(that is, mapped to TA class input-text\). Conversely, with ignore html input types set to no, only the new one-to-one **<input\>** control type mappings \(that is, **input-color** to input-color, **input-date** to input-date, etc.\) are acceptable. Any attempt to do otherwise results in an automation problem at runtime, informing you that no matching UI object could be found.

## Example { .section}

Suppose that you already captured a given **input-search** control as an input-text TA class in a previous version of TestArchitect. Now you want to continue using this legacy mapping for running automation.

![](../Images/bis_ignore_html_input_types_aut_1.png)

**Test Lines**

![](../Images/bis_ignore_html_input_types_pgm_1.png)

**Result**

![](../Images/bis_ignore_html_input_types_res_1.png)

**Parent topic:**[Other settings](../../TA_Automation/Topics/bis_other.html)

**Previous topic:**[enable click hook](../../TA_Automation/Topics/bis_enable_click_hook.html)

**Next topic:**[inverse color](../../TA_Automation/Topics/bis_inverse_color.html)

