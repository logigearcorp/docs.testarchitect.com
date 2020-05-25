--- 
title: "How to activate SAP GUI Scripting"
linktitle: "How to activate SAP GUI Scripting"
aliases: 
    - /TA_Automation/Topics/aut_SAP_gui_scripting_activate.html
---
# How to activate SAP GUI Scripting {#concept_afk_5kt_jdb .concept}

To steer the SAP application SAP GUI Scripting must be activated.

## Situation {#section_tns_mmg_2kb .section}

Scripting needs to be enabled both on the **server** and the corresponding **client** to be able to steer SAP applications.

## Solution {#section_gqb_rmg_2kb .section}

## ACTIVATING SCRIPTING ON THE SERVER {#section_m11_mtg_2kb .section}

You have to activate scripting on the server to steer SAP applications via the SAP scripting interface.

**Scripting parameters**

The parameter **sapgui/user\_scripting** must be set to **TRUE** \(Please note that this value is case-sensitive\). The default value of the parameter is **FALSE**.

If one of the following parameters is available, it must have the value **FALSE**. The available parameters depend on the SAP version used.

-   sapgui/user\_scripting\_disable\_recording
-   sapgui/user\_scripting\_force\_notification
-   sapgui/user\_scripting\_per\_user
-   sapgui/user\_scripting\_set\_readonly
-   sapgui/nwbc\_scripting

## Procedure {#section_fhl_lng_2kb .section}

1. Open transaction **RZ11** in the system.

![](../Images/sap_open_rz11.PNG)

2. Enter the parameter name **sapgui/user\_scripting** and click on **Display**.![](../Images/sap_config_server_1.PNG)

3. If the parameter value is currently set to **FALSE**, click on the **Change Value** button in the toolbar.![](../Images/sap_config_server_2.PNG)

4. A window will open. Enter the new value **TRUE** and save your changes.![](../Images/sap_config_server_3.PNG)

5. Repeat the previous steps for all available parameters mentioned above.

## ACTIVATING SCRIPTING ON THE CLIENT {#section_wlw_ktg_2kb .section}

You have to activate scripting on the client to steer SAP applications via the SAP scripting interface.

1.  Open the menu in the Logon window by click the ![](../Images/sap_config_client_1.png) icon and select the meny entry **Options**.
2.  Switch to the view **Accessibility & Scripting → Scripting** and enable the scripting function.
3.  In addition, disable the following options: **Notify when a script attaches to SAP GUI** and **Notify when a script opens a connection.**

![](../Images/sap_config_client_2.png)

## ACTIVATING MODAL DIALOG BOXES ON THE CLIENT {#section_oqy_hwg_2kb .section}

You have to activate modal dialog boxes on the client to steer SAP applications.

1.  Open the SAP GUI window and select the menu entry Help → Settings... on any screen.![](../Images/sap_config_client_3.png)
2.  Switch to the **F1 Help** tab and select the option **In Modal Dialog Box** in the Display section.![](../Images/sap_config_client_4.png)
3.  Switch the **F4 Help** tab and select the option **Dialog \(modal\)** in the **Display** section.![](../Images/sap_config_client_5.png)
4.  Confirm by clicking on the green check mark ![](../Images/sap_config_client_6.png) button.

    **Note:** Please note, that this is a per-user setting. The settings have to be configured on each client you want to test your application with. The SAP system administrator can set up the system default as Dialog \(modal\).


**Parent topic:**[Troubleshooting SAP](../../TA_Automation/Topics/aut_SAP.html)

**Next topic:**[The action "check control exist" is unable to detect a SAP control that does exist.](../../TA_Automation/Topics/aut_SAP_check_control_exist_ts.html)

