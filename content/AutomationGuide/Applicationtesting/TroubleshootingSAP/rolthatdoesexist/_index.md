--- 
title: 'The action "check control exist" is unable to detect a SAP control that does exist.'
linktitle: 'The action "check control exist" is unable to detect a SAP control that does exist.'
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_SAP_check_control_exist_ts.html
---
# The action "check control exist" is unable to detect a SAP control that does exist. {#concept_afk_5kt_jdb .concept}

SAP application and TestArchitect must run with the same integrity

## Situation {#section_tns_mmg_2kb .section}

This may be caused by running TestArchitect with elevated permissions while running the AUT with normal permissions or vice-versa. In order for TestArchitect to automate the application both TestArchitect Client and the AUT must be run with the same permissions.

## Solution {#section_gqb_rmg_2kb .section}

## 1. Run both with normal privileges. {#section_m11_mtg_2kb .section}

Open both TestArchitect Client and the AUT by double-clicking on their icon.

## 2. Run both with administrator privileges. {#section_hqh_wyl_2kb .section}

To run both TestArchitect Client and the AUT with Administrative privileges right click on their icon and select **Run as administrator**

## For example: {#section_xm1_1zl_2kb .section}

Run TestArchitect Client as administrator.

![](../Images/sap_ts_check_control_exist_1.png)

Run AUT as administrator.

![](../Images/sap_ts_check_control_exist_2.png)

**Parent topic:**[Troubleshooting SAP](../../TA_Automation/Topics/aut_SAP.html)

**Previous topic:**[How to activate SAP GUI Scripting](../../TA_Automation/Topics/aut_SAP_gui_scripting_activate.html)

**Next topic:**[TestArchitect fails to interact with child window number 3 of an SAP application.](../../TA_Automation/Topics/aut_SAP_unable_interact_3_window.html)

