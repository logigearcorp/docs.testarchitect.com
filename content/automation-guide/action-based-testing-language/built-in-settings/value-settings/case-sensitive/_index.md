--- 
title: "case sensitive"
linktitle: "case sensitive"
weight: 1
aliases: 
    - /TA_Automation/Topics/bis_case_sensitive.html
keywords: "case sensitive, enable case sensitivity, enable case insensitivity, distinguish between lower case and upper case texts, do not distinguish between lower case and upper case texts"
---

## Description

Should differences in case \(uppercase vs. lowercase\) of letters be considered in string comparisons?

## Allowable values

-   yes, no
-   true, false
-   on, off
-   1, 0

## Allowable values

yes, no

## Default value

no

## Notes

-   This setting affects all built-in actions that interact with an application's user interface, and is applied to the property values that are used for identification of the windows and controls. Unless otherwise noted, it is also applied in all text comparison functions of the built-in actions, as seen in the example below.
-   Note that, this setting does not support testing [cloud services](aut_app_cloud_testing.html). In this case, you are required to perform an exact match.

## Example

## Test Lines

![](/images//Images/bis_case_sensitive_pgm.png)

## Result

![](/images//Images/bis_case_sensitive_res.png)

**Parent topic:**[Value settings](/TA_Automation/Topics/bis_value.html)

**Next topic:**[escape sequences](/TA_Automation/Topics/bis_escape_sequences.html)

