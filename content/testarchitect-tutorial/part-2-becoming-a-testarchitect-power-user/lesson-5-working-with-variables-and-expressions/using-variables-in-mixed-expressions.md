--- 
title: "Using variables in mixed expressions"
linktitle: "Using variables in mixed expressions"
description: "Use numeric and string variables, as well as constants, in your mixed expressions."
weight: 7
aliases: 
    - /TA_Tutorials/Topics/Using_variables_in_mixed_expressions.html
keywords: "mixed expressions, expressions, built-in actions, local variable, local variable (action)"
---

Use numeric and string variables, as well as constants, in your mixed expressions.

1.  In theMy expressionstest module you created previously, create a new test case:

    1.  Place your cell pointer on a line somewhere below the existing set of action lines \(but before the `FINAL` section, if any\).

    2.  Click **Create New Test Case** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.CreateTestCase.png) on the toolbar.

        A test case line similar to the following is inserted.

        ![](/images/TA_Tutorials/Images/misc.TAC.Test_case_04_line.png)

    3.  In the second column of the new line, assign the test case an ID ofTC 04\(if not already set to that value\).

    4.  Press Tab to advance to the next column, and provide a description for your test case, such asadding variables to the mix.

2.  Create several local variable action lines, as follows:

    ```
    
                          name               value
    local variable        car model          Grand Am
    local variable        car price          25000
    local variable        state of sale      New York
    local variable        sales tax          7                 
    ```

3.  Add the following report action, which performs string and numeric operations on both constants and variables:

    ```
    
                text
    report      # "Sales tax on a $" & car price & " " & car model & " sold in " & state of sale & " is " & (sales tax / 100) * car price & " dollars."
    ```

4.  Now create another set of local variable action lines to assign new values to the variables:

    ```
    
                          variable            value
    local variable        car model           Prius
    local variable        car price           42000
    local variable        state of sale       Texas
    local variable        sales tax           4                   
    ```

5.  Select the row of the report action line in its entirety \(headers included\), and press Ctrl+C to copy.

6.  Move your cell pointer a few rows past the last local variable line, and press Ctrl+V to paste.

    Your test case should now resemble this:

    ![](/images/TA_Tutorials/Images/tut.Vars_and_Exps.Mixed_Expr_Var_01.Test.png)

7.  Execute Test Case 04 of your test.

    With your test displayed in the editor, do the following:

    1.  Click **Execute** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

        The Execute Test dialog box appears.

    2.  In the **Test Modules** panel, expand the tree.

    3.  Ensure that only the check box for test caseTC 04is selected.

    4.  Click **Execute**.

    The status bar \(at the bottom left of the TestArchitect window\) indicates the stages of the test as it progresses.


You have just seen how string and numeric variables and constants can be combined into expressions using both types of operations \(string and numeric\). You have also performed the same operation on two similar sets of data. Note that the second set of local variable action lines does not create new variables, because local variables with those names and exact same scope already exist. It does, however, replace the contents of those local variables with new values.

{{<note>}} Later on, you will see how repetitive operations such as the identical report action lines can benefit from [encapsulation](/user-guide/support/glossary-of-terms/action-encapsulationn1eTveA), which makes your tests more powerful and reusable, and test writing more efficient.

![](/images/TA_Tutorials/Images/tut.Vars_and_Exps.Mixed_Expr_Var_01.Results.png)




