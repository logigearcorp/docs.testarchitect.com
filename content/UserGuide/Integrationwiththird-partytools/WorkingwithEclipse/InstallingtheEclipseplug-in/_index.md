--- 
title: "Installing the Eclipse plug-in"
linktitle: "Installing the Eclipse plug-in"
weight: 1
aliases: 
    - /TA_Help/Topics/Integration_install_eclipse_plugin.html
---
# Installing the Eclipse plug-in {#install_eclipse_plugin .task}

The TestArchitect plug-in can be installed into the Eclipse IDE using the **Help** menu in Eclipse, or the **Tools** menu in TestArchitect.

**Restriction:** Integration between TestArchitect™ and the Eclipse™ has been deprecated since TestArchitect version [8.3 Update 2](../../TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_2.html).

Ensure that your system meets the following software requirements:

-   Installation of a Neon, Mars, Luna, Kepler, Juno, Indigo, or Helios version of Eclipse.
-   A functional Eclipse development environment.
-   TestArchitect plug-in file for Eclipse is available. Assuming TestArchitect is installed, plug-in file, TAEclipsePlugin.zip, can be found at TA\_INSTALL\_DIR\\plugins\\TAEclipsePlugin.zip

    **Important:** Since TestArchitect version [8.3](../../TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.3.html), the TestArchitect Eclipse plug-in works with JDK versions from 1.8.0 to [1.8.0\_91](http://www.oracle.com/technetwork/java/javase/8u91-relnotes-2949462.html).


You have two options for installing the Eclipse plug-in:

-   **Option 1**: Install the Eclipse plug-in using the Eclipse **Help** menu:

    1.  If it is not already running, launch Eclipse.

    2.  From the Eclipse main menu, select **Help** \> **Install New Software**.

        The Install dialog box appears.

    3.  In the top-right corner, click **Add**.

        ![](../Images/Install_dlg_Eclipse.png)

    4.  In the Add Repository dialog box, enter the name of the plug-in in the **Name** text field.

    5.  Click Archive and browse to the location of the plug-in file TAEclipsePlugin.zip.

    6.  Choose the plug-in TAEclipsePlugin.zip and click Open to add the plug-in file path to the **Location** text field in the Add Repository dialog box.

        ![](../Images/Ok_repository_plugin.png)

    7.  Click **OK**.

    8.  In the Available Software dialog box, select the **com.logigear.testarchitect** check box.

        ![](../Images/Available_software_dlg_1.png)

    9.  Clear the **Contact all update sites during install to find required software** check box and click **Next**.

        ![](../Images/Available_software_dlg_2.png)

    10. In the next window, you'll see a list of the tools to be installed. Click **Next** .

    11. Read and accept the license agreements, then click **Finish**.

-   **Option 2**: Install the Eclipse plug-in using the TestArchitect **Tools** menu:

    1.  If it is not already running, launch TestArchitect.

    2.  From the toolbar, select **Tools** \> **Plug-ins** \> **Eclipse Plug-in**.

    3.  On the Eclipse Plug-in dialog box, click ![](../Images/btn.browse-ellipsis.01.png) and browse to the folder containing the Eclipse executable file.

    4.  Click **OK** to install the plug-in.


After installation, restart Eclipse.

**Parent topic:**[Working with Eclipse](../../TA_Help/Topics/Integration_eclipse_intro.html)

**Next topic:**[TestArchitect Eclipse plug-in](../../TA_Help/Topics/Integration_eclipse_plugin.html)

