--- 
title: "get text background color"
linktitle: "get text background color"
description: "Description Retrieve color code of the text background, in hexadecimal. Arguments window TA name of the window. control (Optional) TA name of the control. drawing function (Optional) TestArchitect ..."
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_get_text_background_color.html
keywords: "built-in actions, get text background color, get text background color (action), retrieve background color of text, get background color of specified text, get backcolor of specified text"
---

## {{< expand >}} Description

Retrieve color code of the text background, in hexadecimal.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **control**

    \(Optional\) TA name of the control.

-   **drawing function**

    \(Optional\) TestArchitect detects the text fragment drawn by several drawing functions.

    Allowable values:

    -   DrawTextA: Retrieve texts drawn by the [DrawTextA](https://msdn.microsoft.com/en-us/library/dd162498(v=vs.85).aspx) function \(ANSI name\).
    -   DrawTextW: Retrieve texts drawn by the [DrawTextW](https://msdn.microsoft.com/en-us/library/dd162498(v=vs.85).aspx) function \(Unicode name\).
    -   TextOutA: Retrieve texts drawn by the [TextOutA](https://msdn.microsoft.com/en-us/library/dd145133(v=vs.85).aspx) function \(ANSI name\).
    -   TextOutW: Retrieve texts drawn by the [TextOutA](https://msdn.microsoft.com/en-us/library/dd145133(v=vs.85).aspx) function \(Unicode name\).
    -   ExtTextOutA: Retrieve texts drawn by the [ExtTextOutA](https://msdn.microsoft.com/en-us/library/dd162713(v=vs.85).aspx) function \(ANSI name\).
    -   ExtTextOutW: Retrieve texts drawn by the [ExtTextOutW](https://msdn.microsoft.com/en-us/library/dd162713(v=vs.85).aspx) function \(Unicode name\).
    {{<note>}}

    -   If the argument's value is omitted, by default, TestArchitect retrieve texts drawn by all drawing functions above.
    -   To use multiple values at a time, use semi-colon \( ; \) as delimiters between values.
-   **text**

    String representing the [bitmap text fragment](/user-guide/support/glossary-of-terms/bitmap-text-fragment) to be searched for.

-   **index**

    \(Optional\) Specifies a minimum number of instances of the search text that must be discovered within the active area for the target [bitmap text fragment](/user-guide/support/glossary-of-terms/bitmap-text-fragment) to be considered as found \(default = 1\).

-   **variable**

    \(Optional\) Variable to receive the returned value.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Applicable Systems/Platforms {{< permerlink >}} {#get_text_background_color__section_Applicable.Systems.Platforms} 

Use of this action is supported on the following systems/platforms:

-   Windows: Win32, WinForms.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## {{< expand >}} Notes

-   This built-in action always employs the [Graphics Device Interface](/automation-guide/action-based-testing-language/the-test-language/text-recognition-techniques) \(GDI\) technique. In other words, [Optical Character Recognition](/automation-guide/action-based-testing-language/the-test-language/text-recognition-techniques) \(OCR\) technique is not available for this action.
-   text argument:
    -   While the [case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive) built-in setting applies to the property values used to identify the correct window or control for this action, the action's GDI text identification functionality is also case sensitive, and is affected by the value of this setting.
    -   It is highly recommended that you apply [wildcards](/user-guide/support/glossary-of-terms/wildcard) for this argument's value, since the text re-drawn by given drawing functions might contain surrounding noise. For example: given a value of \{Administration.\*\}, TestArchitect searches for texts whose string beginnings match Administration. In more general terms, this argument accepts regular expressions.
-   drawing function argument:
    -   By default, when the argument's value is omitted, this built-in action automatically employs all available drawing functions. This might significantly cause a performance issue, since every drawing function will be in turn verified.
    -   To determine which exact drawing functions should be employed to enhance automation performance, use the **Text Recognition** feature available in the Interface Viewer. \([Learn more](/user-guide/interface-definitions/the-interface-viewer/other-functionalities/text-recognition-interface-viewer).\)
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_get_text_background_color_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_text_background_color_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_text_background_color_res.png)




