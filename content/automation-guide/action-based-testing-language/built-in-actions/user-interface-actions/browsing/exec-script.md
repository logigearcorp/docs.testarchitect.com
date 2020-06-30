--- 
title: "exec script"
linktitle: "exec script"
description: "Description Execute JavaScript code of a specified web page, or inline JavaScript. Arguments window TA name of the window. script JavaScript code variable (Optional) Variable to receive the value ..."
weight: 11
aliases: 
    - /TA_Automation/Topics/bia_exec_script.html
keywords: "built-in actions, exec script, exec script (action), iOS (action), exec script, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), exect script, execute Javascript, execute Javascript code, run Javascript, run Javascript code"
---

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
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Example - Case 1: Running a snippet of JavaScript

**Action Lines**

![](/images/TA_Automation/Images/bia_exec_script_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_exec_script_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_exec_script_aut.png)

## Example - Case 2: Retrieving a return value

Suppose that you would like to get a value returned from the following snippet of JavaScript code.

```
function addNumber(num1, num2){var sum=num1+num2; return 'Total is '+sum;}; return addNumber(1, 2);
```

**Action Lines**

![](/images/TA_Automation/Images/bia_exec_script_pgm_2.png)

**Result**

![](/images/TA_Automation/Images/bia_exec_script_res_2.png)




