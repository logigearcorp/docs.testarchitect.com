--- 
title: "Using local help documentation in offline mode on Windows"
linktitle: "Using local help documentation in offline mode on Windows"
description: "How to use local help documentation in offline mode on Windows."
weight: 1
aliases: 
    - /TA_UsingHelpSystem/Topics/hs_local_help_Windows.html
keywords: "Compiled HTML Help, local help documentation, offline mode, CHM, local help documentation, offline mode"
---

How to use local help documentation in offline mode on Windows.

Perform the following steps:

1.  Trust testarchitect.com site in your computer. By open Internet Options

    ![](/images/TA_UsingHelpSystem/Images/troubleshoot1.png)

2.  Select **Security** tab then click on **Local intranet** and **Sites** button.

    ![](/images/TA_UsingHelpSystem/Images/troubleshoot2.png)

3.  In **Local Intranet** window, select **Automatically detect intranet network** then click **Advanced** button.

    ![](/images/TA_UsingHelpSystem/Images/troubleshoot3.png)

4.  Enter https://www.testarchitect.com into **Add this wedsite to zone** textbox. Then click **Add** button.

    ![](/images/TA_UsingHelpSystem/Images/troubleshoot4.png)

5.  Open [Release Notes website](https://www.testarchitect.com/support/documentation/release-notes).

6.  On the left-hand side of the page, select your desired version of TestArchitect Release Notes.

    For example: TestArchitect 8.3 Update 2.

7.  On the right-hand side of the page, click **Download TestArchitect Help.**

8.  Select an appropriate standalone package version based on the operating system installed on your machine.

    For Windows, the TestArchitectClientHelp.chm will be downloaded into your machine.

9.  Place TestArchitectClientHelp.chm under the following directory \{TA\_DATA\_DIR\}\\tahelp.

    For example: C:\\Users\\Public\\LogiGear\\TestArchitect\\tahelp

    ![](/images/TA_UsingHelpSystem/Images/chm_directory_structure.png)


Now you can use local help documentation in [offline mode](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/preferences#li.Use_online_help) on your machine.



