--- 
title: "License keys are unable to be verified when a power outage and connection loss occur"
linktitle: "License keys are unable to be verified when a power outage and connection loss occur"
description: "When both a power outage and connection loss occur on your TestArchitect License Server, you might encounter the following error message on your TestArchitect License Server. This issue might cause ..."
weight: 1
aliases: 
    - /TA_Administration/Topics/adm_LS_troubleshooting_license_keys_not_validated.html
keywords: 
---

When both a power outage and connection loss occur on your TestArchitect License Server, you might encounter the following error message on your TestArchitect License Server.

![](/images/TA_Administration/Images/key_failed_to_validate.png)

This issue might cause the license keys, which have been previously inputted, to no longer be verified successfully on the License Server. Consequently, the keys are completely removed on the License Server.

Solution:

1.  Fix your connection problem.

2.  In the TestArchitect License Server, terminate the License Server service by selecting **File** \> **Terminate**.

    ![](/images/TA_Administration/Images/LS_terminate_service.png)

3.  [Start](/administration-guide/license-server/managing-the-license-server/starting-and-stopping-the-server) the TestArchitect License Server.


The license keys are now verified successfully on the License Server.

