--- 
title: "set"
linktitle: "set"
description: "Description Set a new value or state for a specified control. Arguments window TA name of the window. control TA name of the control. value Value or state to which to set the control. Allowable ..."
weight: 16
aliases: 
    - /TA_Automation/Topics/bia_set.html
keywords: "built-in actions, set, set (action), iOS (action), set, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), set value or state for control, set checked or unchecked status for checkbox or radio button, set value for textbox, assign value to textbox"
---

## Description

Set a new value or state for a specified control.

Set the value of a check box to checked or unchecked, or a radio button to checked.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **value**

    Value or state to which to set the control.

    Allowable values:

    -   For controls with binary states \(check box, radio button, or switch control\)
        -   **on**

            Select the control.

        -   **off**

            Clear \(deselect\) the control.

    -   For other controls, allowable values are dependent on the nature of the control \(see Notes\).
    State to which to set the control.

    Allowable values:

    -   **on**

        Select the control.

    -   **off**

        Clear \(deselect\) the control \(check box only\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:check box, date picker, input-checkbox, input-color, input-date, input-datetime, input-datetime-local, input-email, input-month, input-number, input-password, input-radio, input-range, input-search, input-text, input-tel, input-time, input-url, input-week, radio button, rating bar, search bar, slider, switch, text box, text view, calendar.

This action is applicable to the following controls:Calender, check box, DatePicker, DateTimePicker, radio button.

## Notes

-   Possible values for the value argument:
    -   For a text box or text view control, the value argument holds a string value to assign to that control.
    -   For controls that hold a binary state, value must hold a Boolean value \(e.g., on or off\)
    -   For a slider control on iOS, value must hold a numeric value.
    -   Due to idiosyncrasies specific to the desktop web browsers \(Internet Explorer, Google Chrome, and Mozilla Firefox\) and Safari on iOS, the set action is used to modify several HTML controls that would otherwise normally be handled by other actions. They include the following:
        -   **input-date** control: value follows the format specified by the current state of the [date format](/automation-guide/action-based-testing-language/built-in-settings/date-time-settings/date-format) built-in setting. Example: Given a date format setting of yyyy-mm-dd, the correct value for Christmas 2014 is 2014-12-25.
        -   **input-datetime** control: The contents of the value argument consist of a date portion followed by an optional time portion. Formatting rules of the date portion are identical to those of the **date** control \(above\). If an optional time portion is included, the following format is used:

            ```
            Thh:mm:ssTZD
            ```

            , where the symbols have the following meanings:

            -   **T**

                \(literal “T”\)required separator if the time portion is specified

            -   **hh**

                hour, in 24-hour format \(e.g., 22 for 10pm\)

            -   **:**

                \(literal colon\) required separator

            -   **mm**

                minutes \(e.g., 45\)

            -   **ss**

                seconds \(e.g., 03\)

            -   **TZD**

                time zone designator \(Note that Z denotes Zulu, also known as Greenwich Mean Time\)

            As an example, given a date format setting of yyyy-mm-dd, 2014-12-25T23:59Z would be an acceptable value for value.

        -   **input-datetime-local** control: The contents of the value argument again consist of a date portion followed by an optional time portion. Formatting rules of the date portion are identical to those of the **date** control \(above\). If an optional time portion is included, the following format is used:

            ```
            Thh:mm:ss.ms
            ```

            , where the symbols have the following meanings:

            -   **T**

                \(literal “T”\) a required separator if the time portion is specified

            -   **hh**

                hour, in 24-hour format \(e.g., 22 for 10pm\)

            -   **:**

                \(literal colon\) required separator

            -   **mm**

                minutes \(e.g., 45\)

            -   **ss**

                seconds \(e.g., 03\)

            -   **.**

                \(literal dot\) required separator

            -   **ms**

                milliseconds \(e.g., 459\)

            As an example, given a date format setting of yyyy-mm-dd, 2014-12-25T23:59:459 would be an acceptable value for value.

        -   input-month control: value must specify a month and year, and follows the format:

            ```
            yyyy-mm
            ```

            , where

            -   **yyyy**

                four-digit year \(e.g. 2014\)

            -   **-**

                \(literal hyphen\) required separator

            -   **mm**

                month number \(e.g., 12 for December\)

            Example: 2014-12.

        -   input-week control: value must specify a week and year, and follows the format:

            ```
            yyyy-www
            ```

            , where

            -   **yyyy**

                four-digit year \(e.g. 2014\)

            -   **-W**

                \(literal "-W"\) required separator indicating week

            -   **www**

                number of week \(in the range of 1 to 52 or 53, depending on the particular year\)

            Example: 2014-W51

        -   input-time control: value follows the format:

            ```
            hh:mm:ss.ms
            ```

            where

            -   **hh**

                hour, in 24-hour format \(e.g., 22 for 10pm\)

            -   **:**

                \(literal colon\) required separator

            -   **mm**

                minutes \(e.g., 45\)

            -   **ss**

                \(optional\) seconds \(e.g., 03\)

            -   **.**

                \(literal dot.\) required separator if milliseconds is provided

            -   **ms**

                \(optional\) milliseconds \(e.g., 459\)

            Examples: 09:55:32.55, 22:15:35, 16:00

        -   input-range of time for SAP calendar control: value follows the format:

            ```
            yyyy-mm-dd,yyyy-mm-dd
            ```

            where

            -   **yyyy**

                four-digit year \(e.g. 2014\)

            -   **-**

                \(literal hyphen\) required separator

            -   **mm**

                month number \(e.g., 12 for December\)

            -   **-**

                \(literal hyphen\) required separator

            -   **dd**

                day number \(e.g., 12\)

            Examples: 2020-12-25,2020-12-30

-   The set action can serve as a suitable alternative to [enter](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/enter) in some special cases on web platforms, in which enter may trigger an unexpected or undesired event \(examples of which are the Safari data and time controls, discussed above\). Unlike enter, set avoids the triggering of events.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Example - Case 1: Selecting check box

![](/images/TA_Automation/Images/bia_set_aut_2.png)

Action Lines

![](/images/TA_Automation/Images/bia_set_pgm.png)

Result

![](/images/TA_Automation/Images/bia_set_res.png)

Effect

![](/images/TA_Automation/Images/bia_set_aut.png)

## Example - Case 2: Assigning value to text box

![](/images/TA_Automation/Images/bia_set_2_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_set_2_pgm.png)

Result

![](/images/TA_Automation/Images/bia_set_2_res.png)

Effect

![](/images/TA_Automation/Images/bia_set_2_effect.png)
