--- 
title: "exec script"
linktitle: "exec script"
weight: 11
aliases: 
    - /TA_Automation/Topics/bia_exec_script.html
---
keyword: [exect script, execute Javascript, execute Javascript code, run Javascript, run Javascript code]
---

# exec script

## Description

Execute JavaScript code of a specified web page, or inline JavaScript.

## Arguments

-   **window**

    TA name of the window.

-   **script**

    JavaScript code

-   **variable**

    \(Optional\) Variable to receive the value which is returned from the executed snippets of JavaScript code.

-   **exception**

    \(Optional\) Variable to receive the exception thrown in JavaScript, if any.


## Applicable Systems/Platforms

Use of this action to obtain value and exception message returned from the executed snippet of JavaScript code \(for the variable and exception arguments\) is supported on the following systems/platforms:

-   Windows:
    -   Internet Explorer
    -   Mozilla Firefox
    -   Microsoft Edge
    -   Google Chrome

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   To execute multiple commands in sequence, separate them with semi-colon \( ; \) delimiters in the script argument.
-   script argument: It may contain native JavaScript code, calls to JavaScript functions within the specified web page, or a mix of the two.
-   variable argument:
    -   This built-in action only retrieves the value from a JavaScript function with the declaration of the [return](https://www.w3schools.com/jsref/jsref_return.asp) statement. \(See the example below.\)
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   exception argument:
    -   The message is returned based on specific web platforms.
    -   If the value in argument exception has not been declared, the action creates it as a global.
    -   If the exception argument's value is left empty, TestArchitect supplies a global variable with the name \_exception.
-   To specify a string, please enclose it in single quotes \(the character '\).
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [window wait](bis_window_wait.html).

## Example - Case 1: Running a snippet of JavaScript

**Action Lines**

![](/images//Images/bia_exec_script_pgm.png)

**Result**

![](/images//Images/bia_exec_script_res.png)

**Effect**

![](/images//Images/bia_exec_script_aut.png)

## Example - Case 2: Retrieving a return value

Suppose that you would like to get a value returned from the following snippet of JavaScript code.

```
function addNumber(num1, num2){var sum=num1+num2; return 'Total is '+sum;}; return addNumber(1, 2);
```

**Action Lines**

![](/images//Images/bia_exec_script_pgm_2.png)

**Result**

![](/images//Images/bia_exec_script_res_2.png)

**Parent topic:**[Browsing](/TA_Automation/Topics/bia_browsing.html)

**Previous topic:**[enter value in popup](/TA_Automation/Topics/bia_enter_value_in_popup.html)

**Next topic:**[fire event](/TA_Automation/Topics/bia_fire_event.html)

