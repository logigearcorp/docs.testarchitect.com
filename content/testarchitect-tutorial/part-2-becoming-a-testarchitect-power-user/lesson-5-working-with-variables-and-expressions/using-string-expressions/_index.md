--- 
title: "Using string expressions"
linktitle: "Using string expressions"
weight: 2
aliases: 
    - /TA_Tutorials/Topics/Using_string_expressions.html
---

How to use concatenation to manipulate text in action arguments.

**Before proceeding:** Ensure that you are logged in to the SampleRepository. In the TestArchitect explorer tree, expand the Car Rental project.

1.  In the TestArchitect explorer tree, select any item within the current project, then click **Create new test module** ![](/images//Images/TA_Tutorials/Images/btn.TAC_toolbar.CreateTestModule.png) in the toolbar.

    The New Test Module dialog box appears.

2.  In the **Name** field, type My expressions, then click **Create**.

3.  **Note:** The new test module appears in the editor with a default template containing suggested basic components for a well-designed test. For this lesson, you only need the TEST CASE section.

    In the editor, delete all content except for the TEST CASE line. Optionally, you can also delete any blank lines above the TEST CASE line.

    You are now ready to begin writing your action lines.

4.  In the third column of the TEST CASE line, provide a useful description, such as string ops.

5.  Enter the following action lines:

    ```
    
                text
    report      Pickup city: Dallas, Texas, USA
    report      # "Pickup city: " & "Dallas" & ", " & "Texas" & ", " & "USA"                   
    ```

    Your test case should now resemble this:

    ![](/images//Images/tut.Vars_and_Exps.Strings.Test.02.png)

6.  With your test module displayed in the TestArchitect editor, click **Execute** ![](/images//Images/TA_Tutorials/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

    The Execute Test dialog box appears.

7.  Click **Execute**.

    The status bar \(at the bottom left of the TestArchitect window\) indicates the stages of the test as it progresses. Upon test completion the newly generated results page is displayed.


The argument of the first report action line \(row 15\) is treated as a literal string, requiring no further evaluation. By contrast, the second report action line begins with a \# symbol, and so is treated as an expression. It uses the concatenation operator \(&\) to merge several string constants.

**Note:** Note that, within an expression, string constants must be enclosed in quotation marks. An argument cell containing only a simple text string, as in row 15, needs no quotation marks.

The results in both cases are identical:

![](/images//Images/tut.Vars_and_Exps.Strings.Test02_Results.png)

**Parent topic:**[Lesson \#5: Working with variables and expressions](/TA_Tutorials/Topics/Tutorial_Working_with_variables_and_expressions.html)

**Previous topic:**[Understanding variables and expressions](/TA_Tutorials/Topics/Understanding_variables_and_expressions.html)

**Next topic:**[Working with string variables](/TA_Tutorials/Topics/Working_with_string_variables.html)

