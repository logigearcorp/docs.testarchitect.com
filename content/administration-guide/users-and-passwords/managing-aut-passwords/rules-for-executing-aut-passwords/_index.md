--- 
title: "Rules for executing AUT passwords"
linktitle: "Rules for executing AUT passwords"
weight: 5
aliases: 
    - /TA_Administration/Topics/Manage_password_graphical_summary.html
---

A summary of the guidelines for executing encrypted passwords.

The following flowchart presents TestArchitect's process for executing encrypted passwords invoked by a test.

![](/images//Images/Manage_password_flowchart_2.png "Verification process for encrypted password execution")

## Note

-   If steps \#1 or \#2 fail in the verification process, TestArchitect considers the data specified in the value argument of the [enter](/TA_Automation/Topics/bia_enter.html) action to be the actual password, without encryption, to be transmitted to the AUT.
-   If steps \#3, \#4, or \#5 fail in the verification process, TestArchitect again considers the data specified in the value argument of the [enter](/TA_Automation/Topics/bia_enter.html) action to be the actual password, without encryption, to be transmitted to the AUT. Additionally, generated test results include the following warning message: Some elements do not meet the requirements for obtaining the encrypted password. The value of value argument that you entered was used as an actual unencrypted password.

**Parent topic:**[Managing AUT passwords](/TA_Administration/Topics/Manage_password.html)

**Previous topic:**[Using encrypted AUT passwords](/TA_Administration/Topics/Manage_password_usage.html)

