--- 
title: "Incompatible add-on on Internet Explorer"
linktitle: "Incompatible add-on on Internet Explorer"
aliases: 
    - /TA_FAQ/Topics/faq.tshoot.incompatible_add_on_IE.html
---
# Incompatible add-on on Internet Explorer {#ref.faq.tshoot.incompatible_IE_add_on .reference}

## Problem { .section}

During the setup of Internet Explorer 11 to allow for testing of web applications, the TestArchitect Automation Agent add-on is indicated as being incompatible with the browser. This prevents you from automating tests on Internet Explorer.

![](../Images/incompatible_add_on_IE.png)

## Solution { .section}

Sometimes, the protection mode of Internet Explorer 11 causes the TestArchitect Automation Agent to show up as incompatible. Following the steps below will help resolve this issue:

1.  In Internet Explorer, click **Tools** \> **Internet Options**.
2.  In the Internet Options dialog box, click the **Advanced** tab.
3.  In the Settings panel, scroll to the **Security** section.
4.  Clear the **Enable Enhanced Protected Mode** check box.

    ![](../../TA_Tutorials_Sample_App/Images/ug_taextension_ie_3.png)

5.  Click **OK** to save your changes.
6.  Restart your computer to ensure that the changes take effect.

**Parent topic:**[Troubleshooting web automation](../../TA_Automation/Topics/web_troubleshooting.html)

