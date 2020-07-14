--- 
title: "How to activate SAP GUI Scripting"
linktitle: "How to activate SAP GUI Scripting"
description: "To steer the SAP application SAP GUI Scripting must be activated."
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_SAP_gui_scripting_activate.html
keywords: "SAP, GUI Scripting activated"
---

To steer the SAP application SAP GUI Scripting must be activated.

## Situation {{< permerlink >}} {#concept_afk_5kt_jdb__section_tns_mmg_2kb} 

Scripting needs to be enabled both on the **server** and the corresponding **client** to be able to steer SAP applications.

## Solution {{< permerlink >}} {#concept_afk_5kt_jdb__section_gqb_rmg_2kb} 

## ACTIVATING SCRIPTING ON THE SERVER {{< permerlink >}} {#concept_afk_5kt_jdb__section_m11_mtg_2kb} 

You have to activate scripting on the server to steer SAP applications via the SAP scripting interface.

**Scripting parameters**

The parameter **sapgui/user\_scripting** must be set to **TRUE** \(Please note that this value is case-sensitive\). The default value of the parameter is **FALSE**.

If one of the following parameters is available, it must have the value **FALSE**. The available parameters depend on the SAP version used.

-   sapgui/user\_scripting\_disable\_recording
-   sapgui/user\_scripting\_force\_notification
-   sapgui/user\_scripting\_per\_user
-   sapgui/user\_scripting\_set\_readonly
-   sapgui/nwbc\_scripting

## Procedure {{< permerlink >}} {#concept_afk_5kt_jdb__section_fhl_lng_2kb} 

1. Open transaction **RZ11** in the system.

![](/images/TA_Automation/Images/sap_open_rz11.png)

2. Enter the parameter name **sapgui/user\_scripting** and click on **Display**.![](/images/TA_Automation/Images/sap_config_server_1.png)

3. If the parameter value is currently set to **FALSE**, click on the **Change Value** button in the toolbar.![](/images/TA_Automation/Images/sap_config_server_2.png)

4. A window will open. Enter the new value **TRUE** and save your changes.![](/images/TA_Automation/Images/sap_config_server_3.png)

5. Repeat the previous steps for all available parameters mentioned above.

## ACTIVATING SCRIPTING ON THE CLIENT {{< permerlink >}} {#concept_afk_5kt_jdb__section_wlw_ktg_2kb} 

You have to activate scripting on the client to steer SAP applications via the SAP scripting interface.

1.  Open the menu in the Logon window by click the ![](/images/TA_Automation/Images/sap_config_client_1.png) icon and select the meny entry **Options**.
2.  Switch to the view **Accessibility & Scripting → Scripting** and enable the scripting function.
3.  In addition, disable the following options: **Notify when a script attaches to SAP GUI** and **Notify when a script opens a connection.**

![](/images/TA_Automation/Images/sap_config_client_2.png)

## ACTIVATING MODAL DIALOG BOXES ON THE CLIENT {{< permerlink >}} {#concept_afk_5kt_jdb__section_oqy_hwg_2kb} 

You have to activate modal dialog boxes on the client to steer SAP applications.

1.  Open the SAP GUI window and select the menu entry Help → Settings... on any screen.![](/images/TA_Automation/Images/sap_config_client_3.png)
2.  Switch to the **F1 Help** tab and select the option **In Modal Dialog Box** in the Display section.![](/images/TA_Automation/Images/sap_config_client_4.png)
3.  Switch the **F4 Help** tab and select the option **Dialog \(modal\)** in the **Display** section.![](/images/TA_Automation/Images/sap_config_client_5.png)
4.  Confirm by clicking on the green check mark ![](/images/TA_Automation/Images/sap_config_client_6.png) button.

    {{<note>}} Please note, that this is a per-user setting. The settings have to be configured on each client you want to test your application with. The SAP system administrator can set up the system default as Dialog \(modal\).




