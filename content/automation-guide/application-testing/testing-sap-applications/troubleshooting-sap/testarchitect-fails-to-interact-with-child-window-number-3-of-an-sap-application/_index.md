--- 
title: "TestArchitect fails to interact with child window number 3 of an SAP application."
linktitle: "TestArchitect fails to interact with child window number 3 of an SAP application."
weight: 3
aliases: 
    - /TA_Automation/Topics/aut_SAP_unable_interact_3_window.html
keywords: TestArchitect fails to interact with child window number 3 of an SAP application.
---

Describes the workaround solution for user work through the child window number 3 of an SAP application.

**Problem:**

TestArchitect is unable to map a control with the winclass SAPALVGrid to a known class control. This may occur in when SAP has child window depth of 3 or greater \(the main window opens another window, which opens another window\).

**Reason:**

There is a bug with SAP GUI scripting. This causes the child window to be a win32 window and not a SAP window, so TestArchitect cannot see it with normal methods.

**Solution:**

Currently, the workaround is to enable **Accessibility Mode**. Check the **Use accessibility mode** check box under **Accessibility settings** in **SAP GUI Options**. After enabling accessibility mode, you can automate the control using SAP automation methods.

To do that, carry out the following steps:

1.  Open SAP application and logon

2.  In the **SAP Easy Access** window, click on the ![](/images//Images/sap_config_client_1.png) icon then choose **Opiton...**

    ![](/images//Images/sap_config.png)

3.  Finally, click **Apply**


**Parent topic:**[Troubleshooting SAP](/TA_Automation/Topics/aut_SAP.html)

**Previous topic:**[The action "check control exist" is unable to detect a SAP control that does exist.](/TA_Automation/Topics/aut_SAP_check_control_exist_ts.html)

