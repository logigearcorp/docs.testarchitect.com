--- 
title: "Creating mappings with the Interface Viewer"
linktitle: "Creating mappings with the Interface Viewer"
weight: 4
aliases: 
    - /TA_Tutorials/Topics/Using_the_Interface_Viewer.html
---
# Creating mappings with the Interface Viewer {#Using_the_Interface_Viewer .task}

Use the Interface Viewer to create mappings for user interface elements.

**Before proceeding:**Ensure that the my login interface entity file has been saved and is displayed in the editor.

1.  If you have not already done so, start the Car Rental application by selecting **Start** \> **All Programs** \> **TestArchitect** \> **Samples** \> **Car Rental Application**.

    The login window appears.

    ![](../../reuse/../TA_Tutorials/Images/app.Car_Rental.Login.unmodified.png)

2.  **Important:** This window is the target of the interface entity you created in the last exercise. Recall that you created an interface element mapped to a **User name** control. To avoid any confusion, note that there are two controls on this window that relate to User name. One is of TA class label, and has its caption property set to User name. You have not mapped this control, so your interface entity knows nothing of its existence. To the right of this control is a **textbox** control, with a label property set to User name. This is the control you have mapped to:

![](../Images/tut.Car_Rental.Login.User_name_controls.png)

3.  Click the Interface Viewer button ![](../Images/btn.TAC_toolbar.Interface_Viewer.png) on the toolbar.

    TestArchitect Client is minimized, and the Interface Viewer utility launches.

4.  In the Interface Viewer's UI explorer panel \(at left\), expand the **textbox** subnode of the **MY LOGIN\(Car Rental-Login\)** tree by clicking its icon ![](../Images/icn.Interface_Viewer.Expansion_indicator.png). Optionally, go ahead and expand a few other subnodes. Select the **MY USER NAME** subnode under **textbox**.

    ![](../Images/tut.Interface_Viewer.MY_LOGIN_mapped.png)

    ![](../Images/tut.Interface_Viewer.MY_LOGIN_mapped.captions_for.png)

    If the node for the Car Rental-Login window does not include the text MY LOGIN, it is not mapped to your interface entity, and the reason is most likely that you did not have the my login interface entity open in the editor when you launched the Interface Viewer.

    **Note:** Note the two green check marks ![](../Images/icn.Interface_Viewer.Green_check_mark.png) in the UI Explorer. These indicate successful mappings between

    -   the open interface entity, MY LOGIN, and its matching window, Car Rental-Login
    -   the interface element for TA name **MY USER NAME** and the control with label = User name \(as indicated in the Properties panel\).
    **Note:** TA names are case *insensitive*, and are always displayed in upper case in the Interface Viewer's **UI explorer Tree**.

5.  So far the only control that your interface definition enables you to work with is the **User name** control, due to the mapping you created manually. Now you will use the Interface Viewer to create another interface element definition.
6.  Expand the node for the class password text by clicking the ![](../Images/icn.Interface_Viewer.Expansion_indicator.png) icon next to it.

    A single child node appears indicating an unmapped **Password** field:

    ![](../Images/tut.Interface_Defs.Int_Ent.Password_node01.png)

7.  Double-click the **Password** subnode.

    The Interface Viewer creates a tentative mapping for this control \(tentative because it has not yet been written to the interface entity\), with a suggested TA name of PASSWORD.

    ![](../Images/tut.Interface_Defs.Int_Ent.Password_node02.png)

8.  **Note:** This new mapping can be saved to the existing interface entity. Before saving, rename the mapping with your own TA name:

    1.  Right-click the **Password** subnode and select **Rename**.

    2.  Type my password and Press Enter.

        ![](../Images/tut.Interface_Defs.Int_Ent.Password_node03.png)

    3.  With the label property selected, select the role property on the **TA Properties** tab.

        ![](../Images/tut.Interface_Defs.Int_Ent.Password_node04.png)

9.  Click Save ![](../Images/btn.Interface_Viewer_toolbar.SaveFile.png) and close the Interface Viewer.

    A new interface element for the **Password** textbox control is now included in the interface entity, which should resemble the following figure:

    ![](../Images/tut.Interface_Defs.IntEnt02.png)

    **Note:** During a test run, when TestArchitect reads this line, it will interpret it as

    “Within the window whose TA name is **my login**, assign the TA name **my password** to the control which is of class password text and has the properties label and role set to Password and password text, respectively.”

    **Note:** In case you're wondering, yes, this is overkill. In fact, because there is only one control of class password text in the entire window, both of the two property-value pairs at the end of the definition could be removed. If so, TestArchitect would still be able to uniquely identify the control.


Next, you will put your interface definitions to use in a test.

**Parent topic:**[Lesson \#3: Working with interface definitions](../../TA_Tutorials/Topics/Tutorial_Working_with_interface_definitions.html)

**Previous topic:**[Interface Viewer](../../TA_Tutorials/Topics/Interface_Viewer.html)

**Next topic:**[Using interface definitions](../../TA_Tutorials/Topics/Using_interface_definitions.html)

**Related information**  


[The Interface Viewer](../../TA_Help/Topics/Interface_def_Viewer.html)

