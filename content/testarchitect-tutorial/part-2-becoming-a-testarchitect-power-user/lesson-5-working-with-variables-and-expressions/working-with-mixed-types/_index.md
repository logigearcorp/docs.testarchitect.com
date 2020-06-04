--- 
title: "Working with mixed types"
linktitle: "Working with mixed types"
weight: 6
aliases: 
    - /TA_Tutorials/Topics/Working_with_mixed_types.html
---

Combine numeric and string operations in single expressions, operating on both numeric and text values.

1.  In theMy expressionstest module you created previously, create a new test case:

    1.  Place your cell pointer on a line somewhere below the existing set of action lines \(but before the `FINAL` section, if any\).

    2.  Click **Create New Test Case** ![](/images//Images/TA_Tutorials/Images/btn.TAC_toolbar.CreateTestCase.png) on the toolbar.

        A test case line similar to the following is inserted.

        ![](/images//Images/TA_Tutorials/Images/misc.TAC.Test_case_03_line.png)

    3.  In the second column of the new line, assign the test case an ID ofTC 03\(if not already set to that value\).

    4.  Press Tab to advance to the next column, and provide a description for your test case, such asmixing it up.

2.  Add a report action with a concatenation expression combining text and numeric operands:

    ```
    
                text
    report      # "The sales tax in New York is " & 7 & " per cent."
    ```

3.  Add another report action that combines both string and numeric operations, on both types of operand:

    ```
    
                text
    report      # "So the sales tax on a $25000 Grand Am sold in New York is " & (7/100) * 25000 & " dollars."
    ```

    Your test case should now resemble this:

    ![](/images//Images/tut.Vars_and_Exps.Mixed_Expr_01.Test.png)

4.  Execute Test Case 03 of your test.

    With your test displayed in the editor, do the following:

    1.  Click **Execute** ![](/images//Images/TA_Tutorials/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

        The Execute Test dialog box appears.

    2.  In the **Test Modules** panel, expand the tree.

    3.  Ensure that only the check box for test caseTC 03is selected.

    4.  Click **Execute**.

    The status bar \(at the bottom left of the TestArchitect window\) indicates the stages of the test as it progresses.


In the first report, the only numeric operand, the constant 7, has been converted to a string as a result of the concatenation operation. The expression of the second report adds numeric operations, mixing them with concatenation. Note that the numeric operations are performed first, having higher precedence than concatenation; once evaluated, the numeric result is again converted to string for the concatenation.

![](/images//Images/tut.Vars_and_Exps.Mixed_Expr_01.Results.png)

**Parent topic:**[Lesson \#5: Working with variables and expressions](/TA_Tutorials/Topics/Tutorial_Working_with_variables_and_expressions.html)

**Previous topic:**[Mixing types](/TA_Tutorials/Topics/Mixing_types.html)

**Next topic:**[Using variables in mixed expressions](/TA_Tutorials/Topics/Using_variables_in_mixed_expressions.html)

