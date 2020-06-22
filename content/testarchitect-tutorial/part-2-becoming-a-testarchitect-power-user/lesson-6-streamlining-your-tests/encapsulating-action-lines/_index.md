--- 
title: "Encapsulating action lines"
linktitle: "Encapsulating action lines"
description: "In this exercise you will refactor your last test case by encapsulating its report action line into a user-defined action."
weight: 6
aliases: 
    - /TA_Tutorials/Topics/Refactoring_test_lines.html
keywords: "encapsulation, folding action lines, example of"
---

In this exercise you will refactor your last test case by encapsulating its report action line into a user-defined action.

1.  In theMy streamliningtest module you created previously, create a new test case:

    1.  Place your cell pointer on a line somewhere below the existing set of action lines \(but before the `FINAL` section, if any\).

    2.  Click **Create New Test Case** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.CreateTestCase.png) on the toolbar.

        A test case line similar to the following is inserted.

        ![](/images/TA_Tutorials/Images/misc.TAC.Test_case_03_line.png)

    3.  In the second column of the new line, assign the test case an ID ofTC 03\(if not already set to that value\).

    4.  Press Tab to advance to the next column, and provide a description for your test case, such asSame-location car rental.

2.  We choose this test case name because its purpose is to initiate an order for a rental car, one which is to be picked up and returned to the same location
3.  Add enough space to the test case \(you can use Ctrl+i to insert rows\) to allow for the following set of action lines to be entered, and then enter them: ![](/images/TA_Tutorials/Images/tut.actions.encapsulation.001.png)

4.  If you have not already done so, start the Car Rental application by selecting **Start** \> **All Programs** \> **TestArchitect** \> **Samples** \> **Car Rental Application**.

    The login window appears.

    ![](/images/TA_Tutorials/Images/app.Car_Rental.Login.unmodified.png)

5.  Navigate to the application window Car Rental-Select Date and Location by clicking **Login**,then **New Order**.

6.  Optionally, you may test your new test case now to ensure that it properly interfaces with the AUT, or you may skip the next step. We will run the test again later, after the action lines have been encapsulated.
7.  Execute test case `TC 03` of your test.

    With your test displayed in the editor, do the following:

    1.  Click **Execute** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

        The Execute Test dialog box appears.

    2.  In the **Test Modules** panel, expand the tree.

    3.  Ensure that only the check box for test caseTC 03is selected.

    4.  Click **Execute**.

    The test modifies the appropriate fields of the Select Date and Location window of the Car Rental application.

8.  Now, in the editor, we will fold all the new action lines into an action.

    1.  Select all the action lines of test case `TC 03`, excluding the TEST CASE header line.

    2.  Right-click within the selection, then click **Create Action**.

    The Create New Action dialog box appears.

    ![](/images/TA_Tutorials/Images/tut.actions.encapsulation.002.png)

    This is very similar to the [Create Action](/TA_Help/Topics/Creating_and_using_actions_using_actions.html) dialog box which appears when you create a new user-defined action from scratch. The big difference here is the **Argument** panel: rather than being empty, this panel is populated with *proposed* arguments. In effect, what TestArchitect is saying is, “Sure, I can fold your action lines into a simple action, but while I'm at it, I've scanned those lines for values, and found a bunch of them. Perhaps you'd like to consider turning some of those values into arguments to the new action. It would certainly make your action a lot more versatile and reusable. \(Oh, and by the way, I have no idea what to name those arguments, so I'm just calling them 'value, value2, value3', etc. Please feel free to give them appropriate names.\)”

9.  Start by giving the new action an appropriate name. Let's call it **choose rental location and dates**.

10. Now, choose which values are to be converted to arguments by selecting their adjacent check boxes. In our case, select the two location values \(Miami and Florida\) and the two date values. Let's also give their arguments appropriate names.

    ![](/images/TA_Tutorials/Images/tut.actions.encapsulation.003.png)

11. Use the **Move Up** and **Move Down** buttons to arrange the arguments into a more sensible order, since that is the sequence in which they will appear when the action is used in a test module. And let's also change the data types of the date arguments to Date:

    ![](/images/TA_Tutorials/Images/tut.actions.encapsulation.005.png)

12. Now add a description for your action, and clear the **Replace selected script by new action** check box. You might also opt to remove the values under the **Value** column. \(Values here become the default values of their respective arguments when the action is created.\)

    ![](/images/TA_Tutorials/Images/tut.actions.encapsulation.007.png)

13. Now click **Create**.

    The new action, choose rental location and dates, is generated, encapsulating the action lines that were selected, and creating argument actions for the values you selected. Click on the action's tab to view it:

    ![](/images/TA_Tutorials/Images/tut.actions.encapsulation.008.png)

14. Note that our action is highly parameterized, except for two items. First, it selects the application window's **Return car at the same location** check box \(line 11\), without giving the calling entity a choice in the matter. That's OK, because we have chosen to define this action as being specifically for single-location rentals. But it also specifies \(line 20\) that the rental country is the United States, which prevents this action from being usable for Canadian locations. \(Note that the Argument panel we just saw didn't give us an option related to the rental country because the related action is a click, whose arguments are just UI items. Unlike enter or set, it doesn't involve any value-based arguments.\) So let's modify the action to make it more versatile.
15. Click on the **Information** subtab of the action and add rental country to the bottom of the arguments list.

    ![](/images/TA_Tutorials/Images/tut.actions.encapsulation.009.png)

16. Click back on the **Editor** subtab and answer **Yes** when asked if you want to save the changes.

17. Now, replace the contents of the control argument of the click action line with the expression `# "pickup country " & rental country`:

    ![](/images/TA_Tutorials/Images/tut.actions.encapsulation.010.png)

    Your action now accepts a rental country argument, which accepts the values US or Canada.

{{<note>}} Actually, the action itself will accept any values, but only the values US and Canada \(of any case\) will have a meaningful effect and not result in an error.

18. Return to the test module My streamlining, and create another test case:

    1.  Place your cell pointer on a line somewhere below the existing set of action lines \(but before the `FINAL` section, if any\).

    2.  Click **Create New Test Case** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.CreateTestCase.png) on the toolbar.

        A test case line similar to the following is inserted.

        ![](/images/TA_Tutorials/Images/misc.TAC.Test_case_04_line.png)

    3.  In the second column of the new line, assign the test case an ID ofTC 04\(if not already set to that value\).

    4.  Press Tab to advance to the next column, and provide a description for your test case, such ascall the encapsulated action.

    5.  Insert some blank lines \(Ctrl + i\) under the `TEST CASE` header, so that the test case has at least 10 rows.

19. Place the cell pointer into the leftmost cell at least three rows beneath the `TEST CASE` header, enter the name of the action you just created, and press Enter.

    The actions is displayed along with header labels reflecting the arguments you created in your action:

    ![](/images/TA_Tutorials/Images/tut.actions.encapsulation.011.png)

20. Complete the action line by adding values to the arguments. Use any values you wish or, to duplicate the effect of your previous test case, use the identical values:

    ![](/images/TA_Tutorials/Images/tut.actions.encapsulation.012.png)

21. Execute test case `TC 04` of your test.

    With your test displayed in the editor, do the following:

    1.  Click **Execute** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

        The Execute Test dialog box appears.

    2.  In the **Test Modules** panel, expand the tree.

    3.  Ensure that only the check box for test caseTC 04is selected.

    4.  Click **Execute**.

    The test modifies the appropriate fields of the Select Date and Location window of the Car Rental application. If you opted to execute test case `TC 03` earlier, and you have chosen to use the same data values, you should now see identical results.


You have seen how to encapsulate an existing set of action lines into a user-defined action in TestArchitect. The judicious use of user-defined actions is key to writing good tests with the Action Based Testing methodology, ones that are more readable, maintainable, modular and reusable.

Folding your action lines into a functionally-equivalent action is a useful convenience. As you learn to write ABT tests, however, you should become better and better at knowing in advance what functionality should be incorporated into actions, and implement such functions as discrete actions in the first place. To know how to create a user-defined action from scratch, see [Creating new actions](/TA_Help/Topics/Creating_and_using_actions_using_actions.html).

In this lesson, we've seen, among other things, how values are passed from a calling entity into an action. Next, we will learn how values can be returned from your action to the caller.




