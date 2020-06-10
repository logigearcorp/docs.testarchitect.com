--- 
title: "Folding repetition into a loop"
linktitle: "Folding repetition into a loop"
weight: 3
aliases: 
    - /TA_Tutorials/Topics/tut_looping_examples.html
---

How to use loop control actions to handle iterative processes.

1.  In theMy streamliningtest module you created previously, create a new test case:

    1.  Place your cell pointer on a line somewhere below the existing set of action lines \(but before the `FINAL` section, if any\).

    2.  Click **Create New Test Case** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.CreateTestCase.png) on the toolbar.

        A test case line similar to the following is inserted.

        ![](/images/TA_Tutorials/Images/misc.TAC.Test_case_02_line.png)

    3.  In the second column of the new line, assign the test case an ID ofTC 02\(if not already set to that value\).

    4.  Press Tab to advance to the next column, and provide a description for your test case, such asloop it.

2.  Copy the first two local variable action lines from Test Case `TC 01` \(*not* from the `INITIAL` section\), and paste them lines into the new test case.

3.  Under your new action lines, enter a repeat action in the left-most column.

    Note that an until action is automatically inserted several lines below the repeat action. Together, these two actions form a loop in which all action lines appearing between them are repeatedly executed until a condition is satisfied. That condition is specified in the until action's condition to stop argument.

4.  Insert additional blank rows after the repeat action, so that the repeat and until lines are at least nine rows apart. \(Note that you can press Ctrl+I to insert rows above the cell pointer.\)

    This allows two action lines to be inserted into the loop.

5.  Select one of the report action lines from Test Case `TC 01`, copy it, then paste it under the repeat action line of `TC 02`.

6.  Under that line \(but before the until action line\), enter the following action line:

    ```
    
                       variable        value
    local variable     car price       # car price + 5000                    
    ```

    With this line, during execution, the local variable car price is incremented with each iteration of the repeat/until loop, achieving the same thing as each of the last two local variable lines of the first test case `TC 01`.

7.  Finally, enter the expression `# car price > 30000` as the condition to stop argument of the until action.

    This comparison expression serves as the terminating condition of the repeat/until loop. It is evaluated each time the until statement is executed. If false, execution returns to the first action line under the repeat. If true, the loop is exited, and execution continues with the next action line under the until.

    Your test case should now resemble the following:

    ![](/images//Images/tut.Reusability.Test02.png)

8.  Execute Test Case 02 of your test.

    With your test displayed in the editor, do the following:

    1.  Click **Execute** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

        The Execute Test dialog box appears.

    2.  In the **Test Modules** panel, expand the tree.

    3.  Ensure that only the check box for test caseTC 02is selected.

    4.  Click **Execute**.

    The status bar \(at the bottom left of the TestArchitect window\) indicates the stages of the test as it progresses.

9.  In the test results, click the **View detailed results per test line** link to open the detailed test lines on a web browser.

10. On the **Result Details** tab, view the output of the report action lines, which are identical to those of test case `TC 01`.

    ![](/images//Images/tut.Reusability.Test02_Results.png)


Given the small size of `TC 01` \(only three redundant report actions\), it does not pose much of a problem. But if it were required to produce more report lines for a wider range of car prices \(at a constant incremental change in value\), the test would need to grow in proportion to the number of reports required. By contrast, the same can be accomplished in Test Case `TC 02` without any additional action lines – only an adjustment of its repeat/until loop's terminating condition would be required.

**Parent topic:**[Lesson \#6: Streamlining your tests](/TA_Tutorials/Topics/Tutorial_Building_an_action_definition.html)

**Previous topic:**[Creating a case for looping](/TA_Tutorials/Topics/Creating_loops.html)

**Next topic:**[User-defined actions](/TA_Tutorials/Topics/High-level_actions.html)

