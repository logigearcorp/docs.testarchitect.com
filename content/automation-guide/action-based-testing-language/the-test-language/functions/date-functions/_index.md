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

1.  [d\(yyyy,mm,dd\)](/TA_Automation/Topics/Expressions_functions_d.html)  
Convert a Gregorian date in numeric form to its equivalent Julian day number.
2.  [today\(\)](/TA_Automation/Topics/Expressions_functions_today.html)  
Convert today’s date to its equivalent Julian day number.
3.  [fj\(date\)](/TA_Automation/Topics/Expressions_functions_fj.html)  
Convert a specific Gregorian date to its equivalent Julian day number.
4.  [year\(Julian number\)](/TA_Automation/Topics/Expressions_functions_year.html)  
Return the Gregorian year from a Julian date number.
5.  [month\(Julian number\)](/TA_Automation/Topics/Expressions_functions_month.html)  
Return the Gregorian month number from a Julian date number.
6.  [day\(Julian number\)](/TA_Automation/Topics/Expressions_functions_day.html)  
Return the Gregorian day of month number from a Julian date number.
7.  [plusy\(Julian number, number of year\)](/TA_Automation/Topics/Expressions_functions_plusy.html)  
Add a specified number of years to a given Julian date number, then return the result as a Julian number.
8.  [plusm\(Julian number, number of month\)](/TA_Automation/Topics/Expressions_functions_plusm.html)  
Add a specified number of months to a given Julian date number, then return the result as a Julian number.
9.  [plusd\(Julian number, number of day\)](/TA_Automation/Topics/Expressions_functions_plusd.html)  
Add a specified number of days to a given Julian date number, then return the result as a Julian number.
10. [plusbd\(Julian number, number of business day\)](/TA_Automation/Topics/Expressions_functions_plusbd.html)  
Add a specified number of business days to a given Julian date number, then return the result as a Julian number.
11. [fd\(Julian number\)](/TA_Automation/Topics/Expressions_functions_fd.html)  
Convert a Julian date number to its equivalent Gregorian date.
12. [weekday\(Julian number\)](/TA_Automation/Topics/Expressions_functions_weekday.html)  
Return the day of week numeric value for a given Julian number.



