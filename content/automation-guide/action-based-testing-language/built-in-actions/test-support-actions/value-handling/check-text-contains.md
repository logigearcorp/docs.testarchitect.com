--- 
title: "check text contains"
linktitle: "check text contains"
description: "Description Check for the existence of a specified string of text within another string. Result is Passed if the substring is found ; otherwise Failed . Arguments text Text string to be tested. ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_text_contains.html
keywords: "built-in actions, check text contains, check text contains (action), check if text contains specific string, check if string contains substring, check whether string contains specific words, verify if text contains specific characters, verify whether string contains substring"
---

## Description

Check for the existence of a specified string of text within another string. Result is Passed ifthe substring is found; otherwise Failed.

## Arguments

-   **text**

    Text string to be tested.

-   **fragment**

    Target text to search for.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes {{< permerlink >}} {#bia_check_text_contains__section.notes} 

-   This action is useful for determining whether a string captured at runtime contains the target string of interest.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only).

## Example

Action Lines

![](/images/TA_Automation/Images/bia_check_text_contains_pgm.png)

Result

![](/images/TA_Automation/Images/bia_check_text_contains_res.png)



