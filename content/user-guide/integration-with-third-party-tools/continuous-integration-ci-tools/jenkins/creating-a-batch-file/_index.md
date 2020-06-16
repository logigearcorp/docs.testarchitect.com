--- 
title: "Creating a batch file"
linktitle: "Creating a batch file"
description: "To establish a connection between TestArchitect and a Jenkins server, a batch file that includes executed test modules is required."
weight: 1
aliases: 
    - /TA_Help/Topics/Integration_Jenkins_create_batch_file.html
keywords: "Jenkins, creating a batch file"
---

To establish a connection between TestArchitect and a Jenkins server, a batch file that includes executed test modules is required.

1.  Select a test module or test folder for execution, then click **Execute** on the toolbar.

2.  In the Execute Test dialog box, click the **Advanced Settings** tab.

3.  Select the **Export result\(s\) to xUnit** check box.

4.  Click ![](/images/TA_Help/Images/btn.browse-ellipsis.01.png) to specify the path where the XML file is to be saved.

    ![](/images/TA_Help/Images/xUnit_1.png)

5.  In the Open dialog box, specify the path to the Jenkins slave workspace.

    **Note:**

    -   The Jenkins master machine is responsible for controlling and monitoring executed jobs on slave machines.
    -   Jenkins slave machines are responsible for executing jobs.
6.  Click **Open**.

    The specified installation path now appears in the **Select a destination folder** text box.

7.  Click **Generate Batch File**.

    The Creation of batch file complete message appears, letting you know that the batch file creation was successful.




