--- 
title: "How do I enable the TestArchitect Automation Agent in Mozilla Firefox on Linux?"
linktitle: "How do I enable the TestArchitect Automation Agent in Mozilla Firefox on Linux?"
description: "A : Sometimes windows/controls cannot be captured from Mozilla Firefox on Linux using the Interface Viewer , even when using the Automation Agent Manager to verify that the TestArchitect Automation ..."
weight: 6
aliases: 
    - /TA_FAQ/Topics/faq.howto.web_automation_enable_TA_Firefox_plugin_Linux.html
keywords: "FAQ, enabling add-on (Mozilla Firefox), Linux, enabling add-on (Mozilla Firefox), add-on (Mozilla Firefox), enabling, activating add-on (Mozilla Firefox)"
---

**A**: Sometimes windows/controls cannot be captured from Mozilla Firefox on Linux using the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/), even when using the [Automation Agent Manager](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-non-webdriver/preparing-web-browsers/automation-agent-manager) to verify that the TestArchitect Automation Agent is installed and enabled in Mozilla Firefox.

To resolve this issue, follow the steps outlined below:

1.  Browse to the following directory:

    -   For the root user: root/.mozilla/firefox/...default
    -   For other users: /home/user-name/.mozilla/firefox/...default
2.  Delete these three files:

    -   extensions.ini
    -   extensions.sqlite
    -   pluginreg.dat
3.  Start Mozilla Firefox from the terminal.

4.  A notification dialog box appears, asking if you want to install the TestArchitect Automation Agent add-on. Click **Continue**, and then follow the procedure for installing the TestArchitect Automation Agent add-on in Mozilla Firefox.

5.  Restart Mozilla Firefox.


The TestArchitect Automation Agent add-on is installed and enabled successfully in Mozilla Firefox.

You can now use the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/) method to capture windows/controls in Mozilla Firefox.


