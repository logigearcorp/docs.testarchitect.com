--- 
title: "Some elements do not meet the requirements for obtaining the encrypted password. The value of 'value' argument that you entered was used as an actual unencrypted password."
linktitle: "Some elements do not meet the requirements for obtaining the encrypted password. The value of 'value' argument that you entered was used as an actual unencrypted password."
aliases: 
    - /TA_FAQ/Topics/0x80010012L.html
---
# Some elements do not meet the requirements for obtaining the encrypted password. The value of 'value' argument that you entered was used as an actual unencrypted password. {#reference_0x80010012L .reference}

Error code: 0x80010012L

## Problem { .section}

This happens because the encrypted password used for the [enter](../../TA_Automation/Topics/bia_enter.html) built-in action could not be verified during automation playback. Note that the encrypted password is defined in the [Manage Password](../../TA_Administration/Topics/Manage_password_add.html) dialog box.

Common causes are as follows:

-   The interface, window, and/or control defined for the given action line do not match the interface, window, and/or control registered in the Manage Password dialog box.
-   The properties of the window/control defined in the Manage Password dialog box do not match the properties of the actual AUT's window/control.

## Solution { .section}

-   Check the interface, window, control specified in the action line to ensure they all match the corresponding ones registered in the Manage Password dialog box.
-   Check whether the properties of window or control defined in the Manage Password dialog box match the runtime properties by using the [Property Comparison](../../TA_Help/Topics/ug_Inteface_properties_comparison_panel.html) panel in the Interface Viewer.

**Parent topic:**[Diagnosing and resolving automation errors](../../TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[Unable to delete cookies. Please close all processes of the test browser and try again.](../../TA_FAQ/Topics/0x80010504L.html)

**Next topic:**[TestArchitect is unable to set the <newValue\> value for the given control. Please check the <controlName\> control, which resides in the <windowName\> window, is editable.](../../TA_FAQ/Topics/0x80010207L.html)

