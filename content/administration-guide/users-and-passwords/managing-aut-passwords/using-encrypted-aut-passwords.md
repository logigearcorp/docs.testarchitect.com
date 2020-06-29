--- 
title: "Using encrypted AUT passwords"
linktitle: "Using encrypted AUT passwords"
description: "Encrypted passwords can be used in combination with the enter built-in action."
weight: 4
aliases: 
    - /TA_Administration/Topics/Manage_password_usage.html
keywords: "managing passwords, using encrypted passwords"
---

Encrypted passwords can be used in combination with the enter built-in action.

Suppose, for example, that your test needs to verify the login process of a live system. You are required to ensure that the secrecy of the login password supplied for the test be maintained. Hence, once entered into the test editor, the password must remain secure from prying eyes.

1.  In the test editor, at the appropriate spot in the test procedure, insert an [enter](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/enter) action line for supplying the password to the AUT

2.  Specify the value argument by wrapping the predefined **Logical Name** for the password \(defined in the Manage Passwords dialog box\) between double brackets \[\[ \]\]. \(Refer to [Rules for executing AUT passwords](/administration-guide/users-and-passwords/managing-aut-passwords/rules-for-executing-aut-passwords).\)

    For example: `[[Car Rental password]]`

    {{<tip>}} There are two methods available for retrieving the **Logical Name**:

    -   **Option 1**: Using the Manage Passwords dialog box:
        1.  In the TestArchitect explorer tree right-click the project node and select **Manage Passwords**.
        2.  In the Manage Passwords dialog box, right-click the **Logical Name** that you want to use, then select **Copy**.
        3.  Paste the copied data into the value argument of the [enter](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/enter) action in the test editor. The double brackets are added automatically.
    -   **Option 2**: Using the auto-complete drop-down list:
        1.  In the test editor, in the cell beneath the value argument of the [enter](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/enter) action, press Ctrl + Spacebar on your keyboard. TestArchitect auto-complete functionality suggests all possible passwords already defined for that control in the Manage Passwords dialog box.
        2.  Select a password and press Enter. The double brackets are generated automatically.
3.  Execute the test.


When your test completes executing, TestArchitect displays the test results page automatically. In the test results, the password's logical name, rather than the unencrypted password itself, is displayed to prevent its inadvertent disclosure.

![](/images/TA_Administration/Images/Manage_password_result.png)




