--- 
title: "Authentication and access rights"
linktitle: "Authentication and access rights"
weight: 3
aliases: 
    - /TA_Help/Topics/Lab_manager_authentication.html
---
# Authentication and access rights {#Lab_manager_Authentication_access_rights .concept}

Lab Manager uses the same login credentials and has the same access rights as those of a TestArchitectrepository.

A Lab Manager session is always specific to a given TestArchitect repository. Your access rights within the session are determined by your access rights within the specified repository. When you log in to Lab Manager, you must specify a repository for which you have login credentials, along with the user name and password. After you log in to a given Lab Manager session, you can monitor test runs initiated from any repositories, regardless of your user rights with respect to those repositories.

Lab Manager offers two levels of access: administration which is granted to the administrator and test manager groups, and non-administration which is granted to all other functional groups.

-   When you log in as a user of a repository for which you have administration privileges, you can view TestArchitect controllers/devices and their test sessions, add and delete controllers/devices, and terminate test runs on any controller/device.
-   If you log in to Lab Manager with non-administration credentials, you have full viewing rights to the information available in the current session, but you cannot reconfigure the session such as adding or removing controllers/devices and terminating test processes.

**Note:** Icons for controller/device modification, test termination and configuration are unavailable on the Lab Manager Toolbar if you logged in to the session as a non-administration user.

![](../Images/ug_labmanager01.png)

**Parent topic:**[Lab Manager](../../TA_Help/Topics/Lab_manager.html)

**Previous topic:**[Installation and configuration](../../TA_Help/Topics/Lab_manager_install_configure.html)

**Next topic:**[Starting Lab Manager](../../TA_Help/Topics/Lab_manager_starting.html)

**Related information**  


[User administration](../../TA_Administration/Topics/User_administration.html)

