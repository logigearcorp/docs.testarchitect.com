--- 
title: "escape sequences"
linktitle: "escape sequences"
weight: 2
aliases: 
    - /TA_Automation/Topics/bis_escape_sequences.html
---
# escape sequences {#reference_hqf_4dc_ts .reference}

## Description { .section}

Determines whether, during test execution, escape sequences should be supported during string processing.

## Allowable values { .section}

yes/true
:   Executes automated tests with support for escape sequences.

no/false
:   Executes in the legacy mode. That is, character strings that would otherwise be treated as escape sequences are *not* given special treatment.

## Default value { .section}

no/false

## Notes { .section}

-   In order to maintain backward support for legacy test procedures \(those prior to TestArchitect version [8.2](../../TA_ReleaseNotes/DITA_source/Whats_New_8.2.html)\), the default value of the escape sequences setting is No/False. However, for new tests, it is highly recommended that you set escape sequences to Yes/True, to allow for the added functionality.
-   Escape sequences in TestArchitect are character combinations consisting of a backslash \(\\\) followed by a letter or sequence of digits. The full set of supported escape sequences is a subset of those used by [Microsoft Visual Studio](https://msdn.microsoft.com/en-us/library/h21280bw.aspx). The following table lists those that are supported in the current version of TestArchitect.

    |Escape Sequence|Represents|
    |---------------|----------|
    |\\b|Backspace

|
    |\\f|Formfeed|
    |\\n|Newline|
    |\\r|Carriage Return|
    |\\t|Horizontal Tab|
    |\\v|Vertical Tab|
    |\\\\|Backslash|
    |\\'|Single quote mark|
    |\\"|Double quote mark|
    |\\?|Question mark|
    |\\nnn|The character whose [ASCII](http://www.asciitable.com/) value is nnn, where nnn is an octal number. For example, \\042 represents a double quotation mark. Note that only codes in the range of \\0-\\377 \(0-255 decimal\) are supported.|
    |\\xhh|The character whose [ASCII](http://www.asciitable.com/) value is hhh, where hhh is a hexadecimal number. For example, \\x22 represents a double quotation mark. Note that only codes in the range of \\x0-\\xFF \(0-255 decimal\) are supported.|

-   Escape sequences in TestArchitect must be used within expressions, that is, in strings that begin with a number \(\#\) symbol.

## Example { .section}

The following test procedure illustrates the use of some escape sequences to produce desired characters.

**Test Lines**

![](../Images/bis_escape_sequences_pgm.png)

**Parent topic:**[Value settings](../../TA_Automation/Topics/bis_value.html)

**Previous topic:**[case sensitive](../../TA_Automation/Topics/bis_case_sensitive.html)

**Next topic:**[ignore blank space](../../TA_Automation/Topics/bis_ignore_blank_space.html)

