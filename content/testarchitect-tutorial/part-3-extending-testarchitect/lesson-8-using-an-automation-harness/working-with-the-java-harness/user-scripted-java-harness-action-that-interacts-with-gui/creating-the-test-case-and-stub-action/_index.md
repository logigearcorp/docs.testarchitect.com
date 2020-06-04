--- 
title: "Creating the test case and stub action"
linktitle: "Creating the test case and stub action"
weight: 3
aliases: 
    - /TA_Tutorials/Topics/Creating_the_test_case_and_stub_action_1_Java.html
---

After implementing the scripted code that interacts with the target application, set up a stub action for the editor, and create the action lines to set up and call the associated action.

1.  Begin by opening TestArchitect Client, then expand the Car Rental project of the TestArchitect explorer tree.
2.  As in the prior exercise, begin by creating a stub action in the TestArchitect client. Name itcheck row count, and supply it with the following arguments and data types:

    ![](/images//Images/TA_Tutorials/Images/tut.Harness.mod_py_file.action_check_row_count.png)

    Note that "Interface Entity" and "Interface Element" have been specified as the data types for the window and table arguments. This allows anyone entering thecheck row countaction in a test to have access to these arguments' respective drop-down autocomplete lists.

3.  Assuming you performed the last exercise, you should have a test module named My scripted tests. If not, go ahead and[create it.](Creating_the_test_case_and_stub_action_Java.html#stepsection.harness.java.create_tm)
4.  Add a new test case to test module My scripted tests. Title this new test case `Test user-scripted action interacting with aut`. Optionally, add a test objective action beneath it, referencing objective `TO 01`, since we're still testing theJava harness \(see below\).

5.  You will be testing your new action against the Car Rental application, so go up to the `INITIAL` section and add a line to ensure that your test uses the correct interface:

    ![](/images//Images/TA_Tutorials/Images/tm.use_interface.car_rental.png)

6.  In your new test case, and an action line to invoke the action with some real data:

    ![](/images//Images/tut.Harness.Test03.java.png)

7.  Save your work.


This is all you need to properly call your user-scripted action from the TestArchitect client. In this particular invocation of the check row count action, you are counting the number of rows of **orders table** that have the value Ford Mustang Coupe in their **Car Type** column, with the expectation that the total will be 2.  \(If the count is indeed 2, your action passes; if not, it fails.\) The action is to be performed on the View Orders window:

![](/images//Images/TA_Tutorials/Images/app.Car_Rental.View_Orders.unmodified.png)

If, as above, there are indeed 2 rows of the **orders table** in which the **Car Type** column holds Ford Mustang Coupe, you can expect your test to pass.

You are now ready to try out your new action.

**Parent topic:**[User-scripted Java harness action that interacts with GUI](/TA_Tutorials/Topics/Creating_a_harness_action_that_interacts_with_a_GUI_Java.html)

**Previous topic:**[Scripting a Java-based GUI-interfacing action](/TA_Tutorials/Topics/Scripting_a_GUI-interfacing_action_Java.html)

**Next topic:**[Viewing the test results](/TA_Tutorials/Topics/Viewing_the_test_results_2_Java.html)

