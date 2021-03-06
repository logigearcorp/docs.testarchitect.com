--- 
title: "Displaying action descriptions"
linktitle: "Displaying action descriptions"
weight: 2
aliases: 
    - /TA_Help/Topics/Additional_features_Help_extensibility_sensitive_help.html
---

The primary value of the Help System Extensibility feature is in allowing you to provide reference pages documenting your custom actions. Context-sensitive help functionality allows you to offer testers and automation engineers easy access to the actions' definitions and application notes.

1.  Document descriptions of custom actions \(preferable in HTML files\). The format and structure of such HTML files should be based on your particular design needs, using one description for each custom action per file.

    **Tip:** You can save the HTML files in any folder that is easy to remember.

2.  For each documented custom action, add an action entry to user\_defined\_help.ini along with the corresponding command, and the absolute path to the appropriate HTML page. \([Learn more](Additional_features_Help_extensibility_configuration.html#section_r2d_nlh_cl)\).

3.  Save user\_defined\_help.ini.

4.  In TestArchitect, hold your cursor over a custom action in the editor, or in the **Actions** node on the TestArchitect explorer tree, then press F1.

    The default browser opens the HTML page containing the description of the selected custom action in the HTML format that you have defined for the description file.


**Parent topic:**[Help system extensibility](/TA_Help/Topics/Additional_features_Help_extensibility.html)

**Previous topic:**[Configuring user-defined help](/TA_Help/Topics/Additional_features_Help_extensibility_configuration.html)

