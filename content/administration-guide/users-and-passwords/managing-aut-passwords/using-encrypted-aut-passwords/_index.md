--- 
title: "Using encrypted AUT passwords"
linktitle: "Using encrypted AUT passwords"
weight: 4
aliases: 
    - TA_Administration/Topics/Manage_password_usage.html
---

Encrypted passwords can be used in combination with the enter built-in action.

Suppose, for example, that your test needs to verify the login process of a live system. You are required to ensure that the secrecy of the login password supplied for the test be maintained. Hence, once entered into the test editor, the password must remain secure from prying eyes.

1.  In the test editor, at the appropriate spot in the test procedure, insert an [enter](../../TA_Automation/Topics/bia_enter.md) action line for supplying the password to the AUT

2.  Specify the value argument by wrapping the predefined **Logical Name** for the password \(defined in the Manage Passwords dialog box\) between double brackets \[\[ \]\]. \(Refer to [Rules for executing AUT passwords](Manage_password_graphical_summary.md).\)

    For example: `[[Car Rental password]]`

    **Tip:** There are two methods available for retrieving the **Logical Name**:

    -   **Option 1**: Using the Manage Passwords dialog box:
        1.  In the TestArchitect explorer tree right-click the project node and select **Manage Passwords**.
        2.  In the Manage Passwords dialog box, right-click the **Logical Name** that you want to use, then select **Copy**.
        3.  Paste the copied data into the value argument of the [enter](../../TA_Automation/Topics/bia_enter.md) action in the test editor. The double brackets are added automatically.
    -   **Option 2**: Using the auto-complete drop-down list:
        1.  In the test editor, in the cell beneath the value argument of the [enter](../../TA_Automation/Topics/bia_enter.md) action, press Ctrl + Spacebar on your keyboard. TestArchitect auto-complete functionality suggests all possible passwords already defined for that control in the Manage Passwords dialog box.
        2.  Select a password and press Enter. The double brackets are generated automatically.
3.  Execute the test.


When your test completes executing, TestArchitect displays the test results page automatically. In the test results, the password's logical name, rather than the unencrypted password itself, is displayed to prevent its inadvertent disclosure.

![](/images/TA_Administration/Images/Manage_password_result.png)

**Parent topic:**[Managing AUT passwords](../../TA_Administration/Topics/Manage_password.md)

**Previous topic:**[Deleting AUT passwords](../../TA_Administration/Topics/Manage_password_delete.md)

**Next topic:**[Rules for executing AUT passwords](../../TA_Administration/Topics/Manage_password_graphical_summary.md)

