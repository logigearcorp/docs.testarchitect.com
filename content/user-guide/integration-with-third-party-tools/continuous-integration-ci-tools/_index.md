--- 
title: "Continuous integration \\(CI\\) tools"
linktitle: "Continuous integration \\(CI\\) tools"
weight: 4
aliases: 
    - /TA_Help/Topics/Integration_xUnit.html
---

To enable integration between TestArchitect and a continuous integration \(CI\) tool, an xUnit-format XML file must be imported into the tool. This XML file is created by extracting the test result of one or more test modules executed by TestArchitect.

1.  Select a test module or test folder for execution, then click **Execute** on the toolbar.

2.  In the Execute Test dialog box, click the **Advanced Settings** tab.

3.  Select the **Export result\(s\) to xUnit** check box to have TestArchitect create an XML file that conforms to xUnit format.

4.  Click ![](/images//Images/btn.browse-ellipsis.01.png) to specify the path where the XML file is saved.

    ![](/images//Images/xUnit_1.png)

5.  In the Open dialog box, specify the path or accept the default path, then click **Open**.

    The specified path now appears in the **Select a destination folder** text box.

6.  Click **Execute**.

    The selected test modules are executed and an XML file that includes the test result data is generated at the specified location.


1.  [Jenkins](/TA_Help/Topics/Integration_Jenkins.html)  
TestArchitect incorporates features that allow it to be readily integrated into a Jenkins-based CI environment.

**Parent topic:**[Integration with third-party tools](/TA_Help/Topics/Integration_def.html)

**Previous topic:**[Team Foundation Server integration](/TA_Help/Topics/ug_MTM_def.html)

**Next topic:**[JIRA integration](/TA_Help/Topics/JIRA_Integration.html)

