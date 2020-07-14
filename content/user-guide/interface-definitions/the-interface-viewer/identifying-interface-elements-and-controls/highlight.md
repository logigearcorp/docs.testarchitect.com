--- 
title: "Highlight"
linktitle: "Highlight"
description: "The Highlight feature of the Interface Viewer might be considered the flip side of the point-to-identify coin. Whereas point-to-identify allows you to start with a known control or window on an application and find its node in the UI explorer panel, Highlight allows you to start from a node in the tree and locate the physical object it represents."
weight: 2
aliases: 
    - /TA_Help/Topics/Interface_def_Viewer_highlight.html
keywords: "highlight, controls, Interface Viewer, highlighting controls, viewer, highlighting controls, highlighting"
---

The **Highlight** feature of the Interface Viewer might be considered the flip side of the **point-to-identify** coin. Whereas **point-to-identify** allows you to start with a known control or window on an application and find its node in the UI explorer panel, **Highlight** allows you to start from a node in the tree and locate the physical object it represents.

1.  In the UI Explorer panel, select the node that you are interested in.

2.  To highlight a control, do one of the following:

    -   Click the **Highlight** button on the toolbar.

        ![](/images/TA_Help/Images/ug_interface_definition25_UIA.png)

    -   Alternatively, select **Tools** \> **Highlight Object** from the main menu.

The Interface Viewer minimizes, brings the appropriate application window to the foreground, and flashes the corresponding control or window two or three times. Once completed, the Viewer pops back into the foreground of your screen.

![](/images/TA_Help/Images/ug_interface_definition26_UIA.png)

{{<warning>}} An issue with [Google Chrome](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/) exists, in which the **Highlight** feature cannot accurately display the positions of HTML controls when the Chrome download bar is active. The solution is to simply dismiss the download bar, which you can do by clicking the **Close** button to its right:![](/images/TA_Help/Images/Chrome_download_bar_close.png).

{{<note>}}

-   Auto Highlight, available in the Interface Viewer, is a convenient variation on the Highlight tool. The **Auto Highlight** button is a toggle: click it once to turn Auto Highlight mode on, and again to turn this mode off.
    -   With Auto Highlight in the on state, you can continuously select node after node in the UI explorer panel, navigating within a tree or between trees. As you do so, Auto Highlight brings the appropriate window to the near-foreground \(just behind the Viewer\), highlighting the appropriate control or window. Click the **Auto Highlight** button again to exit from Auto Highlight mode.
    -   For Android mobile testing, to allow Auto Highlight to work properly, ensure that [application notification](/user-guide/support/frequently-asked-questions/unable-to-use-the-interface-viewer-s-auto-highlight-tool-on-android-devices) of TestArchitect Automation Agent is enabled.



