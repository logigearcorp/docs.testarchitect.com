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

## {{< expand >}} Situation {{< permerlink >}} {#concept_afk_5kt_jdb__section_tns_mmg_2kb} 

This may be caused by running TestArchitect with elevated permissions while running the AUT with normal permissions or vice-versa. In order for TestArchitect to automate the application both TestArchitect Client and the AUT must be run with the same permissions.

## {{< expand >}} Solution {{< permerlink >}} {#concept_afk_5kt_jdb__section_gqb_rmg_2kb} 

## {{< expand >}} 1. Run both with normal privileges. {{< permerlink >}} {#concept_afk_5kt_jdb__section_m11_mtg_2kb} 

Open both TestArchitect Client and the AUT by double-clicking on their icon.

## {{< expand >}} 2. Run both with administrator privileges. {{< permerlink >}} {#concept_afk_5kt_jdb__section_hqh_wyl_2kb} 

To run both TestArchitect Client and the AUT with Administrative privileges right click on their icon and select **Run as administrator**

## {{< expand >}} For example: {{< permerlink >}} {#concept_afk_5kt_jdb__section_xm1_1zl_2kb} 

Run TestArchitect Client as administrator.

![](/images/TA_Automation/Images/sap_ts_check_control_exist_1.png)

Run AUT as administrator.

![](/images/TA_Automation/Images/sap_ts_check_control_exist_2.png)




