--- 
title: "Date functions"
linktitle: "Date functions"
description: "Date functions compute and convert Gregorian dates to and from Julian day numbers."
weight: 1
aliases: 
    - /TA_Automation/Topics/Expressions_date_functions.html
keywords: "date functions, Julian, date functions, Gregorian, date functions"
---

Date functions compute and convert Gregorian dates to and from Julian day numbers.

"Julian day" refers to a continuous count of days since November 24, 4714 BC. For example, the Julian day number 2,451,545 is equivalent to a Gregorian date of January 1, 2000. The Gregorian calendar is also known as the Western calendar. The benefit of using the Julian day number is that simple arithmetic operations such as addition, subtraction, multiplication, and division can easily be performed on Julian dates. For instance, the following line converts January 15, 2012 to a Julian day number, adds 5 days, and converts the result back to a Gregorian date \(January 20, 2012\).

```
                     name       value
local variable       d          #fd (d (2012, 01, 15) + 5)
```

The action line above assigns the value 2012-01-20 to local variable d.

1.  [d\(yyyy,mm,dd\)](/automation-guide/action-based-testing-language/the-test-language/functions/date-functions/d-yyyy-mm-dd)  
Convert a Gregorian date in numeric form to its equivalent Julian day number.
2.  [today\(\)](/automation-guide/action-based-testing-language/the-test-language/functions/date-functions/today)  
Convert today’s date to its equivalent Julian day number.
3.  [fj\(date\)](/automation-guide/action-based-testing-language/the-test-language/functions/date-functions/fj-date)  
Convert a specific Gregorian date to its equivalent Julian day number.
4.  [year\(Julian number\)](/automation-guide/action-based-testing-language/the-test-language/functions/date-functions/year-julian-number)  
Return the Gregorian year from a Julian date number.
5.  [month\(Julian number\)](/automation-guide/action-based-testing-language/the-test-language/functions/date-functions/month-julian-number)  
Return the Gregorian month number from a Julian date number.
6.  [day\(Julian number\)](/automation-guide/action-based-testing-language/the-test-language/functions/date-functions/day-julian-number)  
Return the Gregorian day of month number from a Julian date number.
7.  [plusy\(Julian number, number of year\)](/automation-guide/action-based-testing-language/the-test-language/functions/date-functions/plusy-julian-number-number-of-year)  
Add a specified number of years to a given Julian date number, then return the result as a Julian number.
8.  [plusm\(Julian number, number of month\)](/automation-guide/action-based-testing-language/the-test-language/functions/date-functions/plusm-julian-number-number-of-month)  
Add a specified number of months to a given Julian date number, then return the result as a Julian number.
9.  [plusd\(Julian number, number of day\)](/automation-guide/action-based-testing-language/the-test-language/functions/date-functions/plusd-julian-number-number-of-day)  
Add a specified number of days to a given Julian date number, then return the result as a Julian number.
10. [plusbd\(Julian number, number of business day\)](/automation-guide/action-based-testing-language/the-test-language/functions/date-functions/plusbd-julian-number-number-of-business-day)  
Add a specified number of business days to a given Julian date number, then return the result as a Julian number.
11. [fd\(Julian number\)](/automation-guide/action-based-testing-language/the-test-language/functions/date-functions/fd-julian-number)  
Convert a Julian date number to its equivalent Gregorian date.
12. [weekday\(Julian number\)](/automation-guide/action-based-testing-language/the-test-language/functions/date-functions/weekday-julian-number)  
Return the day of week numeric value for a given Julian number.



