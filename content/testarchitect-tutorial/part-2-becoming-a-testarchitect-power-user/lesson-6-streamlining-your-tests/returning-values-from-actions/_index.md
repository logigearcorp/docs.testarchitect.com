--- 
title: "Returning values from actions"
linktitle: "Returning values from actions"
weight: 7
aliases: 
    - /TA_Tutorials/Topics/Returning_values_from_actions.html
---

In this exercise you expand the functionality of your new action by having it derive some values and return them to the calling entity.

If you haven't done so already, please complete the exercise [Encapsulating action lines](Refactoring_test_lines.html). You will be expanding upon the work you did there.

We will extend the action choose rental location and dates by having it return two values to the calling entity: the duration, in days, of the rental period, and the total price for the rental. In order to allow it to calculate the total price, we will also add an argument so that we can supply it with the daily rental rate.

1.  In TestArchitect, go to the information subtab of the choose rental location and dates action and add three new arguments: daily rate, price and duration. Click **Apply**.

    ![](/images//Images/tut.actions.encapsulation.013.png)

2.  Before we complete our revision of choose rental location and dates , let's update our call to it in the test module.
3.  Return to test case `TC 04 (call the encapsulated action)` in your test module, My streamlining. Insert a few spaces under the `TEST CASE` heading, and add the following two variable declarations:

    ![](/images//Images/tut.actions.encapsulation.014.png)

    **Note:** These variables will be used to accept the values returned from the action call: d will hold the car rental duration, and p will hold the total rental price.

4.  Next, select the leftmost cell of the choose rental location and dates action line \(the call that holds the action name\), press function key F2, and then press Enter.

    The effect of this sequence is to resubmit the action name to the editor, causing the argument header list to be refreshed. Because you earlier \(Step 1\) added new arguments to the action, their names now appear in the header line.

5.  Under the argument headers daily rate, price and duration, enter the values 30, \>\>p and \>\>d, respectively.

    Note that the double chevrons \(\>\>\) preceding the p and d are optional, and have no functional effect. The double chevron is actually just a useful reminder to anyone reading the file that associated argument is one that effectively returns a value.

    At this point, your test case should look like this:

    ![](/images//Images/tut.actions.encapsulation.015.with_chevrons.png)

    So the value for daily rate, which is 30 dollars per day, is simply being passed into the action. By contrast, the variables d and p pass in nothing, but are instead expected to hold values returned from the action.

    **Tip:** It's interesting to note that, from the standpoint of the action being called, the values passed in the duration and price arguments are no different than, say, the rental city argument. That is, in each case they are simply passing in strings \( “d”, “p”, and “Miami”, respectively\). The fact that d and p have been declared as local variables has no effect on the action call. Instead, we are using the duration and price arguments to inform the called action that the *names* of the variables it should write to are d and p.

6.  Below the action call, add the following report action:

    ![](/images//Images/tut.actions.encapsulation.016.png)

    This will allow us to confirm that the proper values have been returned from our action call.

7.  Now let's finish creating the logic for the action.
8.  Open the choose rental location and dates action, and click on the **Editor** subtab.

9.  Append the following action lines to the end of the file:

    ![](/images//Images/tut.actions.encapsulation.017.png)

    Let's look at these lines in order:

    -   The first line sets the built-in date order setting, specifying that the format of any dates encountered are expected to be in the order of month-day-year.
    -   The local variable action line calculates the difference in days between the rental pickup and drop off dates, and places the value into the variable number of days, which it creates on the spot. \(The expression here uses TestArchitect's [fj\(\) function](/TA_Automation/Topics/Expressions_functions_fj.html) to convert the dates to Julian numbers before subtracting one from the other.\)
    -   Notice now that the next two set variable action lines have the expression indicator \(\#\) present in not only their value arguments, but in their variable arguments as well. Take the first case: Clearly, this is where the return values for the duration argument is set, but how? The answer is that, duration carries the string “d”, passed into it from the calling action line. The \# symbol causes duration to be evaluated, effectively making the action line equivalent to:

        ```
                         variable    value
        set variable     d           # number of days
        ```

        Recall that d is declared as a local variable in the test case `TC 04`. According to the [scoping rules for local variables](/TA_Automation/Topics/The_test_language_variables.html#li_qyh_ccq_qr), dynamic scoping, d is also visible to this action's current invocation, being a child of `TC 04`. Hence, the value of number of days is loaded into d, and that number becomes available to `TC 04` when control returns to it.

        **Note:** Note that only the set variable action should be used for setting return values. The action [local variable](/TA_Automation/Topics/bia_local_variable.html) in this context would create a new variable, one whose scope would vanish upon return to the calling entity. [global variable](/TA_Automation/Topics/bia_global_variable.html), by contrast, would create a global variable that would have scope upon return, but would lack visibility due to the existence of a more localized variable of the same name.

10. Now return your test module My streamlining, by clicking on its tab or double-clicking its node in the TestArchitect explorer tree.

11. Ensure that the Car Rental application is running and displaying the Select Date and Location window. Skip the next two steps if it is.
12. If you have not already done so, start the Car Rental application by selecting **Start** \> **All Programs** \> **TestArchitect** \> **Samples** \> **Car Rental Application**.

    The login window appears.

    ![](/images//Images/TA_Tutorials/Images/app.Car_Rental.Login.unmodified.png)

13. Navigate to the application window Car Rental-Select Date and Location by clicking **Login**,then **New Order**.

14. Execute test case `TC 04` of your test.

    With your test displayed in the editor, do the following:

    1.  Click **Execute** ![](/images//Images/TA_Tutorials/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

        The Execute Test dialog box appears.

    2.  In the **Test Modules** panel, expand the tree.

    3.  Ensure that only the check box for test caseTC 04is selected.

    4.  Click **Execute**.

    As in the previous exercise, the test modifies the appropriate fields of the Select Date and Location window of the Car Rental application. In addition, upon conclusion, it issues a report line, which you can view by clicking the **Result Details** subtab of the results, and observing the last line:

    ```
    78:  Car rental duration: 14 days, at a price of $420
    ```


**Parent topic:**[Lesson \#6: Streamlining your tests](/TA_Tutorials/Topics/Tutorial_Building_an_action_definition.html)

**Previous topic:**[Encapsulating action lines](/TA_Tutorials/Topics/Refactoring_test_lines.html)

**Next topic:**[Summary: What you learned](/TA_Tutorials/Topics/Summary_Building_action_definition.html)

