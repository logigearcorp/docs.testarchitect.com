--- 
title: "Working with string variables"
linktitle: "Working with string variables"
weight: 3
aliases: 
    - /TA_Tutorials/Topics/Working_with_string_variables.html
---

You can use variables to store text strings, which can be used in place of string literals in your cell expressions.

**Before proceeding:** Ensure that you have completed the steps of the last exercise. You will continue to work with the string ops test case.

1.  Add three local variable action lines to the bottom of your existing test case:

    ```
    
                        name          value
    local variable	  city	      Dallas                    
    local variable	  state         Texas                    
    local variable      country       USA              
    ```

    The local variable action does two things:

    -   creates a local variable with a specified name \(e.g., city\)
    -   stuffs a value \(e.g., Dallas\) into it.
2.  Add the following report action line:

    ```
    
                text
    report      # "Pickup city: " & city & ", " & state & ", " & country                  
    ```

    This report line is essentially identical to that of row 16, except that three of the string constants have been replaced by variables.

    Your entire test case should now look something like this:

    ![](/images//Images/tut.Vars_and_Exps.Strings.Test.full.png)

3.  With your test module displayed in the TestArchitect editor, click **Execute** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

    The Execute Test dialog box appears.

4.  Click **Execute**.

    The status bar \(at the bottom left of the TestArchitect window\) indicates the stages of the test as it progresses. Upon test completion the newly generated results page is displayed.


As seen in the results, once the expression in row 24 is evaluated, and the three local variables are resolved to the values they hold, the results are identical to those produced by the first two action lines:

![](/images//Images/tut.Vars_and_Exps.Strings.TestFull_Results.png)

**Parent topic:**[Lesson \#5: Working with variables and expressions](/TA_Tutorials/Topics/Tutorial_Working_with_variables_and_expressions.html)

**Previous topic:**[Using string expressions](/TA_Tutorials/Topics/Using_string_expressions.html)

**Next topic:**[Performing numeric operations](/TA_Tutorials/Topics/Performing_numeric_operations.html)

