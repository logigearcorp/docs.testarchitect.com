--- 
title: "Managing AUT passwords"
linktitle: "Managing AUT passwords"
weight: 2
aliases: 
    - /TA_Administration/Topics/Manage_password.html
---

TestArchitect can save and encrypt passwords which are used for access to an application under test. Encrypted passwords can then be used within tests in combination with the enter built-in action.

Typically, the built-in [enter](/TA_Automation/Topics/bia_enter.html) action is used to automate the process of supplying login credentials when so prompted by the AUT. TestArchitect recognizes the security risk posed by this aspect of the test process, and so allows for encryption of passwords within both the test editor and test results. For example, if you create an automated test procedure that logs into an e-banking system and retrieves the current balance, you would not want unauthorized users to be able to read the login information from the test editor or generated test results.

Password encryption is implemented in such a way that only authorized users \(for example, [administrators](/TA_Administration/Topics/User_administration.html) or [test managers](/TA_Administration/Topics/User_administration.html)\) can read, modify, and manage passwords. Passwords are managed using the Manage Passwords dialog box.

**Tip:** You can copy data from an external application, such as Microsoft Excel™ or Notepad, and then paste the copied data into the Mange Passwords dialog box, or vice-versa.

**Note:**

-   The Manage Passwords dialog box is available from the context menu of a project when it is right-clicked \(select **Manage Passwords**\).
-   Password encryption can only be used in combination with the [enter](/TA_Automation/Topics/bia_enter.html) built-in action.

1.  [Adding new AUT passwords](/TA_Administration/Topics/Manage_password_add.html)  
TestArchitect allows new encrypted passwords to be added to all types of controls for security enhancement.
2.  [Editing AUT passwords](/TA_Administration/Topics/Manage_password_edit.html)  
After creating an encrypted password, you can edit it.
3.  [Deleting AUT passwords](/TA_Administration/Topics/Manage_password_delete.html)  
If you no longer need to use an encrypted password, you can delete it.
4.  [Using encrypted AUT passwords](/TA_Administration/Topics/Manage_password_usage.html)  
Encrypted passwords can be used in combination with the enter built-in action.
5.  [Rules for executing AUT passwords](/TA_Administration/Topics/Manage_password_graphical_summary.html)  
A summary of the guidelines for executing encrypted passwords.

**Parent topic:**[Users and passwords](/TA_Administration/Topics/adm_users_and_passwords.html)

**Previous topic:**[User administration](/TA_Administration/Topics/User_administration.html)

