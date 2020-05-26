--- 
title: "Performing numeric operations"
linktitle: "Performing numeric operations"
weight: 4
aliases: 
    - /TA_Tutorials/Topics/Performing_numeric_operations.html
---
# Performing numeric operations {#Performing_numeric_operations .task}

Your action arguments may contain numeric operations, such as addition and division. Such operations can operate on both numeric literals as well as variables.

1.  In theMy expressionstest module you created previously, create a new test case:

    1.  Place your cell pointer on a line somewhere below the existing set of action lines \(but before the `FINAL` section, if any\).

    2.  Click **Create New Test Case** ![](../../reuse/../TA_Tutorials/Images/btn.TAC_toolbar.CreateTestCase.png) on the toolbar.

        A test case line similar to the following is inserted.

        ![](../../reuse/../TA_Tutorials/Images/misc.TAC.Test_case_02_line.png)

    3.  In the second column of the new line, assign the test case an ID ofTC 02\(if not already set to that value\).

    4.  Press Tab to advance to the next column, and provide a description for your test case, such asnumeric ops.

2.  Add the following two report action lines to your test case:

    ```
    
                text
    report      # 20 + 10 * 5
    report      # (20 + 10) * 5
    ```

    If you are familiar with operator precedence, you know that these two expressions are evaluated differently. In the first action line, the multiplication is performed first, then the addition. The second expression makes use of parentheses to force the addition to be performed first.

3.  Add two more action lines, to create and set two local variables:

    ```
    
                       name         value
    local variable     x            4
    local variable     y            # 20 + 10 * 5
    ```

    **Note:** A variable may be set to a numeric value as well as a string, with no need to explicitly declare the variable's data type. Also notice that the value argument in a local variable action line can hold an expression as well as a constant.

    **Tip:** During an editing session, entering the *\#* symbol in an empty argument cell triggers an autocomplete pop-up window containing a list of variables thought to be within scope at that position in the action lines. Use the Up and Down arrow keys to select one, should you need it inserted at that point. You can bring back the pop-up list at any further point in the expression by pressing Ctrl + Space

4.  Finally, add a report action line:

    ```
    
                  text
    report        # x * y
    ```

    In this case, the expression involved consists of an operation on variables, rather than constants.

5.  Your test case should now resemble this:

    ![](../Images/tut.Vars_and_Exps.Numeric_01.Test.full.png)

6.  Execute Test Case 02 of your test.

    With your test displayed in the editor, do the following:

    1.  Click **Execute** ![](../../reuse/../TA_Tutorials/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

        The Execute Test dialog box appears.

    2.  In the **Test Modules** panel, expand the tree.

    3.  Ensure that only the check box for test caseTC 02is selected.

    4.  Click **Execute**.

    The status bar \(at the bottom left of the TestArchitect window\) indicates the stages of the test as it progresses.


As expected, the expressions in rows 32 and 33 yield different results, due to a differing order of operations. Line 40 displays the result of an expression involving variables.

![](../Images/tut.Vars_and_Exps.Numeric_01.TestFull_Results.png)

**Parent topic:**[Lesson \#5: Working with variables and expressions](../../TA_Tutorials/Topics/Tutorial_Working_with_variables_and_expressions.html)

**Previous topic:**[Working with string variables](../../TA_Tutorials/Topics/Working_with_string_variables.html)

**Next topic:**[Mixing types](../../TA_Tutorials/Topics/Mixing_types.html)

