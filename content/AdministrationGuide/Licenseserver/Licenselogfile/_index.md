--- 
title: "License log file"
linktitle: "License log file"
weight: 9
aliases: 
    - /TA_Administration/Topics/adm_License_server_log_file.html
---
# License log file {#concept_my1_zby_h4 .concept}

The license log file tracks license requests submitted to the license server. It can be helpful in interpreting events and problems.

To open and view license log files, click the **Open License Log Folder** ![](../Images/Open_license_log_file_btn.png) button on the License Server Control Panel. TestArchitect opens the location containing all license usage statistic log files. This location, established during TestArchitect license server's installation, defaults to the following:

-   Windows: C:\\Users\\Public\\LogiGear\\TestArchitect\\LicenseServer\\logging
-   Linux: /usr/local/logigear/testarchitect/data/ls/logging
-   macOS: Note that the TestArchitect License Server is not currently supported on macOS.

**Important:** The TestArchitect License Server stores a single log file for each month. You may configure the length of time for files to be retained. \([Learn more](adm_License_server_log_file_configuration.html).\)

The license log file of a given TestArchitect license server consists of records containing information on license requests submitted by client machines, and the outcomes of those requests. This information is stored to a .CSV log file and formatted as below:

|Date|Time|Session ID|Machine|Requested License|Status|Notes|
|----|----|----------|-------|-----------------|------|-----|
|5/1/2014|13:30|1|192.168.167.162-LGVN1236-WIN7.logigear.com|Universal|Accepted| |
|5/2/2014|14:30|2|192.168.167.163-LGVN1237-WIN7.logigear.com|Universal|Accepted| |
|5/3/2014|15:30|3|192.168.167.164-LGVN1238-WIN7.logigear.com|Universal|Denied|No available licenses|
|5/3/2014|16:30|1|192.168.167.162-LGVN1236-WIN7.logigear.com|Universal|Accepted|License rescinded from client|
|5/4/2014|17:30|2|192.168.167.163-LGVN1237-WIN7.logigear.com|Universal|Accepted|License rescinded from client|

The contents of the log file records are as follows:

-   **Date**: The date stamp specifying when TestArchitect License Server received a request from a client machine, or released a license to a client machines.
-   **Time**: The time stamp specifying when TestArchitect License Server received a request from a client machine, or released a license to a client machines.
-   **Session ID**: An identifying number linking related records. A given license session lasts for the period of time that a client holds a license, so that the same session ID is assigned to the record of a client requesting a license and the subsequent reclaiming of that license by the license server. In cases where a license request is immediately denied by the license server, the session is considered to be limited to that one transaction, and is assigned to only one log record.
-   **Machine**: The client machine involved in the transaction with the TestArchitect license server.
-   **Requested License**: The license type involved in the transaction.
-   **Status**: The outcome of the client machine's request, or result of a server-initiated action: Accepted or Denied.
-   **Notes**: Further information regarding the request. Possible messages are displayed below.

    |Message|Description|
    |-------|-----------|
    |No available licenses.|TestArchitect License Server receives a license request from a client machine, but the server has no available licenses of the type requested.|
    |No valid licenses available|Any licenses available on the license server have expired.|
    |No Agent license available; assigned <license type\> license instead|TestArchitect License Server receives a request for an Agent license. Having no Agent licenses available in the pool, the server instead allocates an available Universal license to the requesting client.|
    |License rescinded from client|The license server reclaims a license from a client machine.|
    |Request denied. No valid licenses available|The request is denied. TestArchitect has determined that there are no available unexpired licenses.|


-   **[Configuring license log file](../../TA_Administration/Topics/adm_License_server_log_file_configuration.html)**  
How to configure the number of retained license log files.

**Parent topic:**[License server for TestArchitect](../../TA_Administration/Topics/LS_TA_License_server.html)

**Previous topic:**[Managing licenses](../../TA_Administration/Topics/LS_TA_managing_licenses.html)

**Next topic:**[Troubleshooting the TestArchitect License Server](../../TA_Administration/Topics/adm_LS_troubleshooting.html)

