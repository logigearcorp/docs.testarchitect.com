--- 
title: "date format"
linktitle: "date format"
description: "Description Specify the date format for output. Allowable values Date format: year format–month format–day format . Tip: Use this setting to specify the format of the individual elements (year, month, ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bis_date_format.html
keywords: "built-in settings, date format, settings, date format (settings), format date, date format"
---

## Description

Specify the date format for output.

## Allowable values

Date format: `year format–month format–day format`.

{{<tip>}} Use this setting to specify the format of the individual elements \(year, month, day\) of the output date. To specify the actual order of these elements, use the built-in setting [date order](/automation-guide/action-based-testing-language/built-in-settings/date-time-settings/date-order).

-   **yyyy**

    Four-digit year \(e.g. 2005\).

-   **yy**

    Two-digit year \(e.g. 05\).


-   **mmmm**

    Long month name. All letters are lowercase \(e.g. september\).

-   **Mmmm**

    Long month name. Only the first letter is uppercase \(e.g. September\).

-   **MMMM**

    Long month name. All letters are uppercase \(e.g. SEPTEMBER\).

-   **mmm**

    Short month name. All letters are lowercase \(e.g. sep\).

-   **Mmm**

    Short month name. Only the first letter is uppercase \(e.g. Sep\).

-   **MMM**

    Short month name. All letters are uppercase \(e.g. SEP\).

-   **mm**

    Month number. Prepend a leading zero to month if the month is less than 10 \(e.g. 09\).

-   **m**

    Month number. Do not prepend a leading zero to month \(e.g. 9\).


-   **dddd**

    Long day name. All letters are lowercase \(e.g. wednesday\).

-   **Dddd**

    Long day name. Only the first letter is uppercase \(e.g. Wednesday\).

-   **DDDD**

    Long day name. All letters are uppercase \(e.g. WEDNESDAY\).

-   **ddd**

    Short day name. All letters are lowercase \(e.g. wed\).

-   **Ddd**

    Short day name. Only the first letter is uppercase \(e.g. Wed\).

-   **DDD**

    Short day name. All letters are uppercase \(WED\).

-   **dd**

    Two-digit day \(e.g. 04\).

-   **d**

    One-digit day for days below 10 \(e.g. 4\).


## Default value

`yyyy-mm-dd`

## Note {{< permerlink >}} {#bis_date_format__section_pzn_kxc_rlb} 

SAP controls only support the date format: `yyyy-mm-dd`




**Related information**  


[check native property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check-native-property)

[get native property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/get-native-property)

[set native property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/set-native-property)

