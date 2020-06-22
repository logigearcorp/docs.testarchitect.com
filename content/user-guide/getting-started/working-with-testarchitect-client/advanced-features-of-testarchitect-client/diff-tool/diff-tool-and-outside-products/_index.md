--- 
title: "Using Diff Tool with other third-party products"
linktitle: "Using Diff Tool with other third-party products"
description: "Integrating TestArchitect with other differencing and merging tools."
weight: 3
aliases: 
    - /TA_Help/Topics/ug_diff_tool_using_other_products.html
keywords: "Diff Tool, external tools"
---

Integrating TestArchitect with other differencing and merging tools.

Follow these steps to set up the Diff Tool to work with a third-party product.

1.  In the TestArchitect [Preferences](/TA_Help/Topics/Additional_features_preferences.html) dialog box, enable the third-party tool to be used for comparing or merging project items by selecting the **Configure the program to be used for merging items** check box.

2.  Click the ellipsis \(…\) button to browse to the executable file of the external tool \(Windows: \*.exe; macOS: \*.app\), and use its corresponding command line to integrate Diff Tool with the external tool.

{{<note>}} See the documentation for the given third party tool to familiarize yourself with its command line parameters. When constructing the command line in the Preferences dialog box, keep in mind the following two substitution variables to which the Diff Tool exports values:

    -   %sname: Reference to the Source item of the current comparison.
    -   %tname: Reference to the Target item of the current comparison.
    Here are two examples of how to set up Preferences to allow the Diff Tool to invoke two popular file comparison and merging tools:

    -   [**WinMerge**](http://manual.winmerge.org/Command_line.html): In the entry field, we enter the command line `C:\Program Files (x86)\WinMerge\WinMergeU.exe -dl %sname -dr %tname`

        ![](/images/TA_Help/Images/diff_tool_external_tools_WinMerge.png)

{{<note>}}

        -   The path `C:\Program Files (x86)\WinMerge\WinMergeU.exe` is the full path to the WinMerge executable for the particular installation of this example. Use whatever path is correct for the installation directory and application that you are using.
        -   %sname: Reference to the Source item of the current comparison.
        -   %tname: Reference to the Target item of the current comparison.
    -   [**Araxis Merge for Windows**](http://www.araxis.com/merge/documentation-windows/command-line.en) and [**Araxis Merge for macOS**](http://www.araxis.com/merge/documentation-os-x/command-line.en): In the entry field, enter the following C:\\Program Files \(x86\)\\Araxis\\Araxis Merge\\Compare.exe /title1:%sname /title2:%tname

        ![](/images/TA_Help/Images/diff_tool_external_tools_AraxisMerge.png)

{{<note>}}

        -   The path `C:\Program Files (x86)\Araxis\Araxis Merge\` is the full path to the Araxis Merge executable for the particular installation of this example. Use whatever path is correct for the installation directory and application that you are using.
        -   %sname: Reference to the Source item of the current comparison.
        -   %tname: Reference to the Target item of the current comparison.
3.  Click **Save** to save your changes and dismiss the Preferences dialog box.

4.  In the Diff Tool dialog box, after performing a comparison, invoke the specified external tool by clicking the **Open External Merge Tool** \(![](/images/TA_Help/Images/btn_external_merge.png)\) button on the toolbar.

    The Diff Tool window is closed and the external tool is invoked to compare and/or merge the two project items represented by the Source and Target panels.

    ![](/images/TA_Help/Images/AraxisMerge.png)

5.  From the invoked external tool, make any changes, if necessary.

    Upon closing the external tool, if a change has been made to either item \(Source or Target\), it is displayed in the TestArchitect editor. The changes are unsaved, allowing you to save them, or close the file without saving.





