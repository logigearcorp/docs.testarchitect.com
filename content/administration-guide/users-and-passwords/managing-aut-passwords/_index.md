--- 
title: "Managing AUT passwords"
linktitle: "Managing AUT passwords"
description: "TestArchitect can save and encrypt passwords which are used for access to an application under test. Encrypted passwords can then be used within tests in combination with the enter built-in action."
weight: 2
aliases: 
    - /TA_Administration/Topics/Manage_password.html
keywords: "password management, managing passwords, password encryption, encrypting password"
---

TestArchitect can save and encrypt passwords which are used for access to an application under test. Encrypted passwords can then be used within tests in combination with the enter built-in action.

Typically, the built-in [enter](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/enter) action is used to automate the process of supplying login credentials when so prompted by the AUT. TestArchitect recognizes the security risk posed by this aspect of the test process, and so allows for encryption of passwords within both the test editor and test results. For example, if you create an automated test procedure that logs into an e-banking system and retrieves the current balance, you would not want unauthorized users to be able to read the login information from the test editor or generated test results.

Password encryption is implemented in such a way that only authorized users \(for example, [administrators](/administration-guide/users-and-passwords/user-administration/) or [test managers](/administration-guide/users-and-passwords/user-administration/)\) can read, modify, and manage passwords. Passwords are managed using the Manage Passwords dialog box.

{{<tip>}} You can copy data from an external application, such as Microsoft Excel™ or Notepad, and then paste the copied data into the Mange Passwords dialog box, or vice-versa.

{{<note>}}

-   The Manage Passwords dialog box is available from the context menu of a project when it is right-clicked \(select **Manage Passwords**\).
-   Password encryption can only be used in combination with the [enter](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/enter) built-in action.

1.  [Adding new AUT passwords](/administration-guide/users-and-passwords/managing-aut-passwords/adding-new-aut-passwords)  
TestArchitect allows new encrypted passwords to be added to all types of controls for security enhancement.
2.  [Editing AUT passwords](/administration-guide/users-and-passwords/managing-aut-passwords/editing-aut-passwords)  
After creating an encrypted password, you can edit it.
3.  [Deleting AUT passwords](/administration-guide/users-and-passwords/managing-aut-passwords/deleting-aut-passwords)  
If you no longer need to use an encrypted password, you can delete it.
4.  [Using encrypted AUT passwords](/administration-guide/users-and-passwords/managing-aut-passwords/using-encrypted-aut-passwords)  
Encrypted passwords can be used in combination with the enter built-in action.
5.  [Rules for executing AUT passwords](/administration-guide/users-and-passwords/managing-aut-passwords/rules-for-executing-aut-passwords)  
A summary of the guidelines for executing encrypted passwords.



