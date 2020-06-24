--- 
title: "Mapping a TestArchitect project to a Quality Center project"
linktitle: "Mapping a TestArchitect project to a Quality Center project"
description: "Integration between projects in TestArchitect and Quality Center requires that a mapping first be established between the two projects. Mapping a TestArchitect project to a project in Quality Center allows tests be transferred bidirectionally, test results to be posted from TestArchitect to Quality Center, and tests to be run from Quality Center."
weight: 3
aliases: 
    - /TA_Help/Topics/Integration_QC_connecting_repo_to_QC_server_step_2.html
keywords: "Quality Center, mapping projects, HP Quality Center, projects, mapping TestArchitect to Quality Center, mapping, TestArchitect to Quality Center, integration, mapping projects"
---

Integration between projects in TestArchitect and Quality Center requires that a mapping first be established between the two projects. Mapping a TestArchitect project to a project in Quality Center allows tests be transferred bidirectionally, test results to be posted from TestArchitect to Quality Center, and tests to be run from Quality Center.

Ensure that the TestArchitect repository hosting your project has [been configured to connect with the Quality Center server](/TA_Help/Topics/Integration_QC_connecting_repo_to_QC_server_step_1.html).

To map a TestArchitect project to a Quality Center project:

1.  In the TestArchitect explorer tree, double-click the TestArchitect project to be mapped to a Quality Center project.

    The **Project** tab appears in the editor.

2.  In the **Source** field, specify the Quality Center domain name followed by the Quality Center project name, separated by a back slash \( \\ \).

    In the following example, TestArchitect's Car Rental project is mapped to the BABYBOOM project in the LGVN domain of Quality Center. Note that the **Source** field of Car Rental's information screen must contain LGVN\\BABYBOOM.

    ![](/images/TA_Help/Images/map_TA_project_to_QC_step2.png)

    {{<important>}}

    -   It is recommended that a new TestArchitect project be created to map to the Quality Center project. Once mapped, you can create test modules and import Quality Center tests into the modules.
    -   When creating the Quality Center domain name or project name, please do not use underscores. A connection cannot be achieved if either project name contains underscores.
3.  Click **Apply**.

    To ensure that the syntax of the value written to the **Source** field is correct, right-click on the project's **Tests** node and hover your mouse pointer over **Upload to External Server**. The selection **Upload to Quality Center** should be enabled.


{{<note>}} Be aware that the end result only this process only has the effect of saving the essential connection information for later use, as opposed to attempting a connection. It is only later, when direct communication between projects is attempted, that you will receive confirmation that your connection data is correct.




