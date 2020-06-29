--- 
title: "Continuous integration \\(CI\\) tools"
linktitle: "Continuous integration \\(CI\\) tools"
description: "To enable integration between TestArchitect and a continuous integration (CI) tool, an xUnit-format XML file must be imported into the tool. This XML file is created by extracting the test result of one or more test modules executed by TestArchitect."
weight: 4
aliases: 
    - /TA_Help/Topics/Integration_xUnit.html
keywords: "integration tools, xUnit, tools, continuous integration, Jenkins"
---

To enable integration between TestArchitect and a continuous integration \(CI\) tool, an xUnit-format XML file must be imported into the tool. This XML file is created by extracting the test result of one or more test modules executed by TestArchitect.

1.  Select a test module or test folder for execution, then click **Execute** on the toolbar.

2.  In the Execute Test dialog box, click the **Advanced Settings** tab.

3.  Select the **Export result\(s\) to xUnit** check box to have TestArchitect create an XML file that conforms to xUnit format.

4.  Click ![](/images/TA_Help/Images/btn.browse-ellipsis.01.png) to specify the path where the XML file is saved.

    ![](/images/TA_Help/Images/xUnit_1.png)

5.  In the Open dialog box, specify the path or accept the default path, then click **Open**.

    The specified path now appears in the **Select a destination folder** text box.

6.  Click **Execute**.

    The selected test modules are executed and an XML file that includes the test result data is generated at the specified location.


1.  [Jenkins](/user-guide/integration-with-third-party-tools/continuous-integration-ci-tools/jenkins/)  
TestArchitect incorporates features that allow it to be readily integrated into a Jenkins-based CI environment.




