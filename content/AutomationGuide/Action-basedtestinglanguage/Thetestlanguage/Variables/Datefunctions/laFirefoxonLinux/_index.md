--- 
title: "How do I enable the TestArchitect Automation Agent in Mozilla Firefox on Linux?"
linktitle: "How do I enable the TestArchitect Automation Agent in Mozilla Firefox on Linux?"
aliases: 
    - /TA_FAQ/Topics/faq.howto.web_automation_enable_TA_Firefox_plugin_Linux.html
---
# How do I enable the TestArchitect Automation Agent in Mozilla Firefox on Linux? {#web_automation_enable_TA_Agent_FF_Linux .task}

**A**: Sometimes windows/controls cannot be captured from Mozilla Firefox on Linux using the [Interface Viewer](../../TA_Help/Topics/Interface_def_Viewer.html), even when using the [Automation Agent Manager](../../TA_Help/Topics/Test_exec_automation_agent_manager.html) to verify that the TestArchitect Automation Agent is installed and enabled in Mozilla Firefox.

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

You can now use the [Interface Viewer](../../TA_Help/Topics/Interface_def_Viewer.html) method to capture windows/controls in Mozilla Firefox.

**Parent topic:**[Troubleshooting web automation](../../TA_Automation/Topics/web_troubleshooting.html)

