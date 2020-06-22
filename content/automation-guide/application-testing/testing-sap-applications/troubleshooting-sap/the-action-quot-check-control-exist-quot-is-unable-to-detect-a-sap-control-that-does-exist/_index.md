--- 
title: "The action 'check control exist' is unable to detect a SAP control that does exist."
linktitle: "The action 'check control exist' is unable to detect a SAP control that does exist."
description: "SAP application and TestArchitect must run with the same integrity"
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_SAP_check_control_exist_ts.html
keywords: "SAP, GUI Scripting activated, The action &#34;check control exist&#34; is unable to detect a SAP control that does exist."
---

SAP application and TestArchitect must run with the same integrity

## Situation

This may be caused by running TestArchitect with elevated permissions while running the AUT with normal permissions or vice-versa. In order for TestArchitect to automate the application both TestArchitect Client and the AUT must be run with the same permissions.

## Solution

## 1. Run both with normal privileges.

Open both TestArchitect Client and the AUT by double-clicking on their icon.

## 2. Run both with administrator privileges.

To run both TestArchitect Client and the AUT with Administrative privileges right click on their icon and select **Run as administrator**

## For example:

Run TestArchitect Client as administrator.

![](/images/TA_Automation/Images/sap_ts_check_control_exist_1.png)

Run AUT as administrator.

![](/images/TA_Automation/Images/sap_ts_check_control_exist_2.png)




