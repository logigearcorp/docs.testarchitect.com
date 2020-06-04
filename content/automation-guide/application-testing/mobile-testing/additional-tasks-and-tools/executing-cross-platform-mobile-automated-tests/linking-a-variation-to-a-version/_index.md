--- 
title: "Linking a variation to a version"
linktitle: "Linking a variation to a version"
weight: 3
aliases: 
    - /TA_Automation/Topics/Mobile_automation_variations_linking.html
---

After creating different types of mobile platforms, you need to link your interfaces/actions to the mobile platforms.

1.  In TestArchitect explorer tree, right-click a user-defined action or an interface entity for which you want to create a variation, and then select **Copy**.

    Variations are used to execute automated tests across platforms.

    For example, if you have a user-defined action called start application that is used to launch an application under test on your mobile device, it is suggested that you create variations of the start application action for each of the Android and iOS platforms.

2.  Right-click the **Actions** node in the TestArchitect explorer tree, and select **Paste as Variation**.

3.  In the Create Variation dialog box, select the **Links to version node** check box.

4.  From the **Select system** drop-down list, select **OS**.

5.  Select **iOS** to link this variation to the iOS platform.

    ![](/images//Images/Mobile_automation_link_variation.png)

6.  Click **OK**.

    The new variation for the iOS platform appears as a node in the TestArchitect explorer tree.

7.  Repeat steps \#1 through \#6 to link a variation of the start application action to the Android platform.


The variations for the Android and iOS platforms appear as nodes in the TestArchitect explorer tree.

![](/images//Images/Mobile_automation_linked_variations_res.png)

**Important:** You must modify the action or interface entity of the respective variations to have TestArchitect execute mobile automated tests on the selected mobile platforms. For example:

![](/images//Images/Mobile_automation_linked_variations_res_details.png)

**Parent topic:**[Executing cross-platform mobile automated tests](/TA_Automation/Topics/Mobile_automation_FAQ_variations_cross_platform.html)

**Previous topic:**[Creating a new version node](/TA_Automation/Topics/Mobile_automation_variations_create_new_version.html)

**Next topic:**[Executing a test with variations](/TA_Automation/Topics/Mobile_automation_variations_executing.html)

