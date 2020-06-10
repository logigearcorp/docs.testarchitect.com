--- 
title: "Unlocking multiple container classes"
linktitle: "Unlocking multiple container classes"
weight: 3
aliases: 
    - /TA_Help/Topics/Interface_def_container_class_unlock_settings.html
---

How to unlock more than one container class at one time.

[Unlocking container classes](/TA_Help/Topics/Interface_def_container_class_unlock.html) discusses how to unlock the class of a container control whose children you may need to access for your test. In some cases, a window may contain controls of more than one container class that you wish to unlock. Rather than repeat the unlocking process for each such class, TestArchitect allows you to select multiple container classes for unlocking at one time.

**Important:** TestArchitect supports unlocking container classes for the following applications:

-   Windows Presentation Foundation \(WPF\)
-   Win32
-   Silverlight
-   Windows Forms \(WinForms\)
-   SAP

-   **Option 1**: Unlocking container classes from Identify mode:

    1.  Repeat steps \#[1](/TA_Help/Topics/Interface_def_container_class_unlock.html#step_fwb_rb1_1l) through \#[5](/TA_Help/Topics/Interface_def_container_class_unlock.html#step_qpb_sb1_1l) in [Unlocking container classes](/TA_Help/Topics/Interface_def_container_class_unlock.html).

        As discussed, a warning dialog box appears:

        ![](/images//Images/unlock_container_classes_warning_dialog.png)

    2.  In the dialog box, click the **Settings** button.

    3.  In the Unlock Container Classes dialog box, select any other container classes that you wish to unlock:

        ![](/images//Images/unlock_container_classes_setting.png)

        **Note:** The Listview option does not apply to Silverlight applications. Silverlight only supports Table, Treeview, and Listbox container classes.

    4.  Click **Apply**.

-   **Option 2**: Unlocking container classes from the **Settings** tab on the Interface Viewer.

    1.  Ensure that your target AUT is running, and navigate to the window with the container classes of interest.

    2.  Launch the [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer_Starting.html).

    3.  In the Viewer's UI explorer panel, click on the node of the AUT window.

        If it wasn't previously visible, the **Settings** tab should now appear in the Properties panel.

    4.  In the Properties panel, click the **Settings** tab.

        ![](/images//Images/unlock_container_classes_interface_viewer_settings.png)

    5.  If no Browse ![](/images//Images/btn.browse-ellipsis.03.png) button appears in the Unlocked container classes setting, click its **Value** cell.

        The Browse button appears in the cell.

    6.  Click the Browse ![](/images//Images/btn.browse-ellipsis.03.png) button.

        The Unlock Container Classes dialog box appears.

        ![](/images//Images/unlock_container_classes_setting.png)

    7.  Select the container classes that you want to unlock.

        **Note:** The Listview option does not apply to Silverlight applications. Silverlight only supports Table, Treeview, and Listbox container classes.

    8.  Click **Apply**.


The selected container classes are unlocked.

**Parent topic:**[Container classes](/TA_Help/Topics/Interface_def_container_class.html)

**Previous topic:**[Dynamically interacting with controls](/TA_Help/Topics/Container_class_click_control_dynamically.html)

**Related information**  


[Remapping known controls](/TA_Help/Topics/Mapping_known_controls.html)

[Mapping unknown controls](/TA_Help/Topics/Mapping_unknown_controls.html)

