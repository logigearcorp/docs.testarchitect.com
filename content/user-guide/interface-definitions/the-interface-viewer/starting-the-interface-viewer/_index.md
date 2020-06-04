--- 
title: "Starting the Interface Viewer"
linktitle: "Starting the Interface Viewer"
weight: 1
aliases: 
    - /TA_Help/Topics/Interface_def_Viewer_Starting.html
---

Launching the Interface Viewer tool.

1.  Do the following:

    -   Start up an application for which you already have an interface; navigate to a window of that application.
    -   Check out and open an interface entity corresponding to the open application window, and ensure that it occupies the active tab on the client's main panel.
2.  Launch the Interface Viewer dialog box by doing one of the following:

    -   Press F7 on your keyboard.
    -   Select **Tools** \> **Interface Viewer** from the main menu.
    -   Click the **Interface Viewer** ![](/images//Images/Interface_viewer_btn.png) button on the toolbar.
3.  Upon startup, the Interface Viewer does the following:

    -   identifies all open windows on the desktop, and lists them as nodes in a tree;
    -   if the Viewer detects one of the open windows as being that which is identified by the open interface entity, it identifies this node with a green check mark ![](/images//Images/ug_interface_definition45.png), expands the node one level, and
        -   if that window belongs to a desktop application, identifies all recognizable elements on the screen, putting them in the subtree;
        -   if that window is an instance of a supported browser displaying the web page referenced by the open interface entity, the Viewer identifies all of the HTML controls within the page, along with all embedded frames, populating the subtree with them.

**Parent topic:**[The Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html)

**Next topic:**[Interpreting the Interface Viewer](/TA_Help/Topics/Interface_def_Viewer_reading.html)

