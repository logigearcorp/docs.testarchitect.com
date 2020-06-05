--- 
title: "ignore blank space"
linktitle: "ignore blank space"
weight: 3
aliases: 
    - /TA_Automation/Topics/bis_ignore_blank_space.html
---
keyword: [ignore blank space, ignore spaces at the beginning or end of strings, remove both leading and trailing whitespace from strings, trim spaces from beginning and end of strings, strip all spaces at both beginning and ending of string]
---

# ignore blank space

## Description

Ignore spaces at the beginning or end of strings.

## Allowable values

-   **yes**

    Ignore spaces at the beginning or the end of a string

-   **no**

    Do not ignore spaces at the beginning or the end of a string.


## Default value

yes

## Notes

-   By default, TestArchitect trims the leading and trailing spaces from text strings that it captures from the AUT before making the values available to groups of built-in actions that are used to match or compare the values, such as, [check](bia_check.html), [click list item](bia_click_list_item.html), [select](bia_select.html), etc. You now have the option to skip that processing, leaving any leading or trailing spaces in place.
-   The TestArchitect interpreter automatically strips leading and trailing whitespace from argument values. When you want to distinguish between a given string that has leading or trailing spaces and one that doesn't, there are two approaches you can take.

    The following examples demonstrate how we can detect the string " prius" – that is, "prius", with a leading space:

    -   apply the \#char\(\) function with a value of 32 \(ASCII space\) \([learn more](Expressions_functions_char.html)\), and set [ignore blank space](bis_ignore_blank_space.html) to no, so as to avoid trimming spaces from captured AUT property values.

        ```
                   setting                value
        setting    ignore blank space     no
        
                   window                 control    value
        check      view cars              type       #char(32) & "prius"
        ```

    -   Enclose the argument value, including space, in double quotation marks. Preceding that, apply the [remove double quotes from cell](bis_remove_double_quotes_from_cells.html) built-in setting with a value of true to have the interpreter strip the quotation marks. Again, ensure that ignore blank space is set to no to avoid trimming spaces from the captured property value.

        ```
                       setting                             value
        setting        remove double quotes from cell      true
        setting        ignore blank space                  no
                                        
                       window                              control      value
        check          view cars                           type         " prius" 
        ```

-   On web browsers, a space may be in the form of either a white space \(ASCII code \#32\), or a non-breaking space \(ASCII code \#160\). Hence, checking for a space in a property value of a web control may involve applying char\(32\), char\(160\), or both. Note however, that the [standard ASCII only](bis_standard_ASCII_only.html) built-in setting, by default, discards any characters whose decimal ASCII codes are not within the range of 32-127. Consequently, to prevent the loss of ASCII \#160 characters in captured text values, set standard ASCII only to no. For example:

    ```
                 setting                   value
    setting      ignore blank space        no
    setting      standard ASCII only       no
    
                 window                    control    value
    check        name                      type       # char(32) & "prius"
    check        name                      type       # char(160) & "prius"
    ```


**Parent topic:**[Value settings](/TA_Automation/Topics/bis_value.html)

**Previous topic:**[escape sequences](/TA_Automation/Topics/bis_escape_sequences.html)

**Next topic:**[ignore tabs and newlines](/TA_Automation/Topics/bis_ignore_tabs_and_newlines.html)

