--- 
title: "Creating interface definitions"
linktitle: "Creating interface definitions"
weight: 2
aliases: 
    - /TA_Tutorials/Topics/Creating_interface_definitions.html
---
# Creating interface definitions {#tit_creating_interface_definitions .task}

Create interface definitions to enable a test to interact with an application window.In this first exercise, you will create definitions manually. In a later exercise, you will use the TestArchitect Interface Viewer to verify the definitions you created and create further definitions.

**Before proceeding:** Ensure that you are logged in to the SampleRepository. In the TestArchitect explorer tree, expand the Car Rental project.

1.  Expand the **Interfaces** node of the Car Rental project. The interface **Car Rental** is displayed as a subnode of **Interfaces**. Expand it as well.

    A set of nodes representing interface entities is displayed beneath the Car Rental interface.

    ![](../Images/tut.TAX.Interfaces.Car_Rental.png)

    **Note:** If you're wondering why a project might have more than a single interface, the typical reason is that the system under test may have more than a single application, and it makes sense to have one interface per application.

2.  Right-click the **Car Rental** interface node and select **New Interface Entity**.

    The New Interface Entity dialog box appears.

3.  Type my login in the **name** field, and click **Create**.

    A new interface entity worksheet opens in the test editor, ready for your input.

    **Note:** Typically, you will create an interface entity for each window or dialog box in the application under test — or at least for the windows and dialog boxes that you intend to test.

4.  Now you will create interface definitions, each of which maps a GUI element \(window or control\) to a TA name. As seen in [Lesson \#2: Interfacing with a GUI](Tutorial_Interfacing_with_a_GUI.html), TA names are used by the tests you create to refer to the GUI elements of the AUT.

    Two types of interface definitions exist: interface entity setting, to map a TA name to a window, and interface element, to map a TA name to a control \(or HTML element\). These definitions are implemented as built-in actions, but ones which are valid only in the context of an interface entity \(not in a test module or action.\)

    Begin by linking this interface entity to the Car Rental application's Login window. The interface entity setting action links the TA name which you’ve already chosen \(my login, the name of your interface entity\) to a window by specifying a property of that window and its value.

5.  In the leftmost cell of a row near the top of the editor, type interface entity setting. Press Tab.

    Headers for arguments setting and value appear over the adjacent cells.

6.  Type title for the setting argument. Press Tab and type Car Rental-Login for the value. Press Enter.

    You have now associated the window whose title property is Car Rental-Login with the TA name **my login**.

    **Note:** title is the property most commonly used for identifying windows. Also, note the importance of this property-value pair being unique across all application windows that may be instantiated on the test system during testing.

7.  Now map the **User name** textbox control of the Login window to a TA name.
8.  Select a cell a few rows down in column **A** and type interface element. Press Tab.

    Headers for arguments ta name and ta class appear over the adjacent cells.

9.  As a value for ta name, enter my user name. Press Tab. In the next cell, for **ta class**, type textbox. Press Tab.

    TestArchitect maintains a set of class names, or TA classes, that it applies to GUI controls. textbox is a TA class.

10. The TA name **my user name** references a control of TA class textbox, but to fully identify the control, you must specify at least one property-value pair in the interface element line. This is done in adjacent columns. Enter the property name as the header and the identifying property value beneath it.
11. Press the Up Arrow key and type label. Press Down Arrow and type User name.

    The TA name **my user name** now identifies a control that:

    -   exists in the Car Rental-Login window,
    -   is of class textbox, and
    -   has a property named label which has the value User name.
    .

    **Tip:** When a single property-value pair is insufficient to ensure that a control is uniquely identified, use additional property-value pairs in adjacent columns of the interface element action.

12. Click **Save** ![](../../reuse/../TA_Tutorials/Images/btn.TAC_toolbar.SaveFile.png) on the toolbar.


You have created a new interface entity that points to the Car Rental-Login window, along with a single interface element that points to a control.

![](../Images/tut.Interface_defs.IntEnt01.png)

**Note:**

For any given window or dialog box of an AUT, you can have more than one interface entity. For example, if you haven’t deleted anything, you now have two interface entities that reference the Car Rental-Login window: my login, which you just created, and login, which came with the sample repository.

Now that you have created some interface definitions manually, you can use the Interface Viewer to verify them.

**Parent topic:**[Lesson \#3: Working with interface definitions](../../TA_Tutorials/Topics/Tutorial_Working_with_interface_definitions.html)

**Previous topic:**[Interface mapping](../../TA_Tutorials/Topics/Interface_mapping_discussion.201401.html)

**Next topic:**[Interface Viewer](../../TA_Tutorials/Topics/Interface_Viewer.html)

**Related information**  


[Interface definitions](../../TA_Help/Topics/ABT_interface_def.html)

[Interface definitions](../../TA_Help/Topics/Interface_def.html)

