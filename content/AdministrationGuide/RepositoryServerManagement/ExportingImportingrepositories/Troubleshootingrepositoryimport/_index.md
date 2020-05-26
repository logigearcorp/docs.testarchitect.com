--- 
title: "Troubleshooting repository import"
linktitle: "Troubleshooting repository import"
weight: 5
aliases: 
    - /TA_Administration/Topics/adm_Importing_repository_troubleshooting.html
---
# Troubleshooting repository import {#concept_vtr_fwy_mm .concept}

A discussion of typical issues you may experience when importing repositories from the Import Repository dialog box, and solutions to these issues.

If TestArchitect is unable to import repository files, the status of each of those files is displayed as Error in the **Import Information** list of the Import Repository dialog box.. Hover your mouse over the Error text to find a related message.

![](../Images/Import_repo_error_dlg.png)

The following table describes the error messages that you may encounter while importing repository files, and their detailed descriptions.

|**Message**|**Description**|
|The **Import Information** list already has a repository with the same name as <repository\_name\>. Please remove duplicated repository name in the **Import Information** list.

|This error is commonly encountered when there is more than one duplicated repository file listed in the **Import Information** list.|
|The server <IP\_address: repository\_port\> already has a repository with the same name as <repository\_name\>. If you want to import <repository\_name\>, check on **overwrite** option, and then click **OK**.|This error occurs when the repository file you are trying to import is identical to an existing repository.|
|The server <IP\_address: repository\_port\> already has a running repository with the same name as <repository\_name\>. If you want to import the <repository\_name\]\>, stop the currently running repository, select the **overwrite** option, and then click **OK** .|An attempt to overwrite an existing repository could not be completed because the existing repository is still running.|
|This file is either corrupted or in invalid format. Check the file and try again.|Often caused when the repository file is corrupted or the file has an invalid format.|

**Parent topic:**[Exporting/Importing repositories](../../TA_Administration/Topics/adm_Exporting_import_repository.html)

**Previous topic:**[Troubleshooting repository export](../../TA_Administration/Topics/adm_Exporting_repository_troubleshooting.html)

