--- 
title: "Creating the test"
linktitle: "Creating the test"
weight: 2
aliases: 
    - /TA_Tutorials/Topics/Creating_the_test.html
---
# Creating the test {#Creating_the_test .task}

Build a new test module based on the interface of the Car Rental sample application, and create a simple test that interacts with the AUT.

1.  In the TestArchitect explorer tree, select any item within the current project, then click **Create new test module** ![](../../reuse/../TA_Tutorials/Images/btn.TAC_toolbar.CreateTestModule.png) in the toolbar.

    The New Test Module dialog box appears.

2.  EnterLogin Testas the name, then click **Create**.

    A new test module appears in the main panel, ready for editing.

3.  In the editor, enter Valid login \(Access granted\) as title for TEST CASE **TC01** in the third column.

4.  In the OBJECTIVES section, enter Access is granted for a valid login as description for test objective **TO 01** in the third column.

    Note that **TO 01** under TEST CASE **TC01** is automatically updated to reflect your changes.

5.  In the leftmost cell of a row somewhere in the `INITIAL` section, type [use interface](../../TA_Automation/Topics/bia_use_interface.html), with the argument Car Rental, leaving at least one blank line above it to allow for a header name:

    ![](../Images/tut.Interfacing_with_GUI_02.png)

    **Note:** This tells TestArchitect that you're going to test against an application’s user interface and that the details for the windows and controls can be found in a TestArchitect interface called Car Rental.

    **Note:**

    This TA interface, in contrast to a conventional application user interface, is an entity created in TestArchitect specifically to facilitate interfacing with the Car Rental application. The Car Rental interface consists of a set of worksheet files called interface entities, and is found in the **Interfaces** subtree of the Car Rental project:

    ![](../Images/tut.Interfacing_with_GUI_03.png)

    .

    Refer to [Creating an interface](../../TA_Help/Topics/Interface_def_create_interface.html) for further discussion on the topic of TestArchitect interfaces.

6.  In the test case, add a new action line by typing enter, again in the leftmost cell. \(Note that actions, and only actions, must be entered in the leftmost column of the editor's worksheet.\)

7.  **Note:** [enter](../../TA_Automation/Topics/bia_enter.html) is the standard action used for entering values into controls such as text boxes in the AUT. In this case, this action line is responsible for entering a user name. Note that the [enter](../../TA_Automation/Topics/bia_enter.html) action accepts three arguments: window, control, and value.

    **Note:** You can move your cell pointer to the next cell by hitting the Enter or Tab key. Once in the field for the window argument, hit your space key. Note how this brings up a context-sensitive list of possible window names for the Car Rental AUT. \(These names are defined in the Car Rental interface that you are using.\) The same holds true when you enter the next argument, control.

    Enter the values login, user name, and john into the line's argument fields as shown below:

    ![](../Images/tut.Interfacing_with_GUI_04.png)

    The values for the window and control arguments are the TA names for the Car Rental Login window and its **User name** text box, respectively. \(In this instance, aside from being all lowercase, the two TA names are the same as their “real-world” counterparts, but that need not be the case.\) The interface you have specified with the [use interface](../../TA_Automation/Topics/bia_use_interface.html) action contains a set of mappings of TA names to the actual windows and controls in the AUT, including the Login dialog box, its fields, and its buttons.

8.  A few rows below the enter action line, add a new action line by entering click in the leftmost cell.

    The [**click**](../../TA_Automation/Topics/bia_click.html) action in this action line will be used to click the **Login** button.

    ![](../Images/tut.Interfacing_with_GUI_05.png)

    When you enter the [click](../../TA_Automation/Topics/bia_click.html) action, five arguments appear. TestArchitect displays the names of all possible arguments for an action, though all arguments don't require values. Required arguments are listed first.

    The available arguments for the [click](../../TA_Automation/Topics/bia_click.html) action are detailed below. For the purposes of this tutorial only the first two arguments are required: window and control.

    -   window: The TA name of the window containing the button to be clicked \(the Login window\)
    -   control: The TA name of the control to be clicked \(the **Login** button on the Login window\)
    **Note:** Refer to [Built-in actions](../../TA_Automation/Topics/bia_Built_in_actions.html) of the TestArchitect Automation Guide for details regarding which arguments are required and which are optional for other arguments.

9.  A few rows below your click action line, add a new line by entering [check window exists](../../TA_Automation/Topics/bia_check_window_exists.html) in the leftmost cell.

    The [check window exists](../../TA_Automation/Topics/bia_check_window_exists.html) action is used here to check for the existence of the Car Rental - Welcome window. If login is successful, the application is expected to display that window.

    ![](../Images/tut.Interfacing_with_GUI_07.png)

    When you enter the [check window exists](../../TA_Automation/Topics/bia_check_window_exists.html) action, only the window argument header appears, as that is all the information that the action requires.


You have now created your first test module which actually interacts with an AUT. In this case, your test clicks a button \(**Login**\) on a window, then tests the AUT to ensure that it has responded as expected \(producing the Car Rental-Welcome window\).

Next, you will run your test to ensure that it works as expected.

**Parent topic:**[Lesson \#2: Interfacing with a GUI](../../TA_Tutorials/Topics/Tutorial_Interfacing_with_a_GUI.html)

**Previous topic:**[Starting the sample application](../../TA_Tutorials/Topics/Starting_the_sample_application.html)

**Next topic:**[Running the test](../../TA_Tutorials/Topics/Running_the_test.html)

