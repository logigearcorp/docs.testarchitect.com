--- 
title: "get text background color"
linktitle: "get text background color"
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_get_text_background_color.html
---
keyword: [get text background color, retrieve background color of text, get background color of specified text, get backcolor of specified text]
---

# get text background color

## Description

Retrieve color code of the text background, in hexadecimal.

## Arguments

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
    **Note:**

    -   If the argument's value is omitted, by default, TestArchitect retrieve texts drawn by all drawing functions above.
    -   To use multiple values at a time, use semi-colon \( ; \) as delimiters between values.
-   **text**

    String representing the [bitmap text fragment](/images//Images/TA_Glossary/Topics/glossaryTextFragment.html) to be searched for.

-   **index**

    \(Optional\) Specifies a minimum number of instances of the search text that must be discovered within the active area for the target [bitmap text fragment](/images//Images/TA_Glossary/Topics/glossaryTextFragment.html) to be considered as found \(default = 1\).

-   **variable**

    \(Optional\) Variable to receive the returned value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms:

-   Windows: Win32, WinForms.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Notes

-   This built-in action always employs the [Graphics Device Interface](aut_text_recognition_techniques.html) \(GDI\) technique. In other words, [Optical Character Recognition](aut_text_recognition_techniques.html) \(OCR\) technique is not available for this action.
-   text argument:
    -   While the [case sensitive](bis_case_sensitive.html) built-in setting applies to the property values used to identify the correct window or control for this action, the action's GDI text identification functionality is also case sensitive, and is affected by the value of this setting.
    -   It is highly recommended that you apply [wildcards](/TA_Glossary/Topics/glossaryWildcard.html) for this argument's value, since the text re-drawn by given drawing functions might contain surrounding noise. For example: given a value of \{Administration.\*\}, TestArchitect searches for texts whose string beginnings match Administration. In more general terms, this argument accepts regular expressions.
-   drawing function argument:
    -   By default, when the argument's value is omitted, this built-in action automatically employs all available drawing functions. This might significantly cause a performance issue, since every drawing function will be in turn verified.
    -   To determine which exact drawing functions should be employed to enhance automation performance, use the **Text Recognition** feature available in the Interface Viewer. \([Learn more](/TA_Help/Topics/ug_Interface_viewer_text_recognition.html).\)
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Example

![](/images//Images/bia_get_text_background_color_aut.png)

**Action Lines**

![](/images//Images/bia_get_text_background_color_pgm.png)

**Result**

![](/images//Images/bia_get_text_background_color_res.png)

**Parent topic:**[Optical Character Recognition](/TA_Automation/Topics/bia_OCR.html)

**Previous topic:**[does text exist](/TA_Automation/Topics/bia_does_text_exist.html)

**Next topic:**[get text color](/TA_Automation/Topics/bia_get_text_color.html)

