--- 
title: "Support for WinForms class mapping"
linktitle: "Support for WinForms class mapping"
description: "TestArchitect 8.3 enhances Windows Forms (WinForms) class mapping to allow WinForms controls to be mapped to TestArchitect's set of TA classes. Note that these TA classes support the full range of TestArchitect built-in actions, affording your tests more power and flexibility."
weight: 6
aliases: 
    - /TA_Help/Topics/ug_class_mapping_WinForms.html
keywords: "class mapping, WinForms, backward compatibility"
---

TestArchitect 8.3 enhances Windows Forms \(WinForms\) class mapping to allow WinForms controls to be mapped to TestArchitect's set of TA classes. Note that these TA classes support the full range of TestArchitect built-in actions, affording your tests more power and flexibility.

If you have captured WinForms controls in versions of TestArchitect prior to [8.3](/TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.3.html), your automated tests will continue to run normally in those versions. When running tests under TestArchitect versions 8.3 or later, if you haven't updated your mappings, the following automation warning appears in your test results: On Windows Forms AUTs, the algorithm to map user-defined and built-in TA classes has been enhanced. This causes your previously-captured interface elements to be obsolete. Please use “WinForms improvement command-line tool” to upgrade your current class mapping.

**Important:**

-   You may continue using legacy-captured controls in TA 8.3 and later versions by setting [winforms raw class](/TA_Automation/Topics/bis_winforms_raw_class.html) to yes.
-   You only need to run this tool once to address the backward compatibility issues and make existing tests runnable.

To update your legacy WinForms project's class mappings:

1.  Run the WinForms command line tool to obtain the new WinForms class mapping file. \([Learn more](/TA_Automation/Topics/aut_app_testing_WinForms_command_line_tool.html).\)

2.  Once you have obtained the file, open it using any text editor, then select and copy all text lines.

    ![](/images/TA_Help/Images/winforms_class_mapping_file.png)

3.  For the given interface of your active TestArchitect project\(s\), update its [$Class Maps](/TA_Help/Topics/Interface_def_Viewer_class_mapping.html) interface entity.

    1.  Open the $Class Maps interface entity, and [check it out](/TA_Help/Topics/Project_items_checkout.html).

    2.  Place the cell pointer at the first column of an empty row below the last line.

    3.  Paste the copied lines.

    ![](/images/TA_Help/Images/winforms_class_mapping_dollar_new.png)


Now you may run automated tests normally with new WinForms class mapping.



