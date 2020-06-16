--- 
title: "Return values"
linktitle: "Return values"
description: "Actions can be written to return values to test modules or actions that call them."
weight: 1
aliases: 
    - /TA_Tutorials/Topics/Return_values.html
keywords: "return values, actions, returning values from, user-defined actions, returning values from, values, return, set variable, used for return values"
---

Actions can be written to return values to test modules or actions that call them. These may be calculated results, or values retrieved from a system with which the action is interfacing.

User-defined actions can be made to return values to the calling entity \(either a test module or another action\). From the perspective of the calling entity, the returned values are available in variables placed in argument positions of the calling action line.

Look at the example below:

![](/images/TA_Tutorials/Images/return_values.tm.01.png)

**Tip:** double chevrons \(\>\>\) in front of q are r have no functional effect. They are just used to imply that the associated arguments will return values.

Line 16 calls the action named division results that perform a division operation. The two values, the operands of a division \(numerator and denominator\) are passed into division results. The remaining other values - the integral quotient \>\>q and the remainder \(modulus\) \>\>r of the division - are received back from the action.

The definition of division results shows that all four arguments are specified in argument actions similarly, regardless of whether or not they are intended to return values. The action consists of two set variable actions, one of which produces the integer quotient of the division operation, and the other produces the remainder:

![](/images/TA_Tutorials/Images/return_values.action.01.png)

Running the test produces the following report for line 19 of test case `TC 01`:

![](/images/TA_Tutorials/Images/return_values.results.01.png)

Let's examine this example more closely:

```
                    numerator    denominator    quotient    remainder
division results    13           5              >>q         >>r
```

-   When `TC 01` calls division results, 13 and 5 are passed to the action as the first variables. Meanwhile, quotient and remainder hold the values of \>\>q and \>\>r respectively.
-   During the execution of division results, the set variable built-in action on line 9 works as follows:

    ```
                    variable        value
    set variable    #quotient       #numberator\denominator 
    ```

    -   The value argument contains an integer division of "13 divided by 5".
    -   The result of the integer division is assigned to the variable quotient which is q.
    -   This line equates to:

        ```
                        variable    value
        set variable    q          2 
        ```


-   Similarly, the set variable built-in action on line 10 works as follow:

    ```
                    variable        value
    set variable    #remainder      #numberator%denominator 
    ```

    -   The value argument contains a modulo operation of "13 divided by 5".
    -   The result of the modulo operation is assigned to the variable remainder which is r.
    -   This line equates to:

        ```
                        variable    value
        set variable    r           3 
        ```


**Note:**

-   By default, lexical scoping is enabled.
-   The variables q and r are treated as global ones.
-   To create an action that returns values to variables, you can use the set variable action.


